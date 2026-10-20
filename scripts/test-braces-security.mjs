import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { test } from "node:test";

// Resolve through the real ESLint dependency chain, not an unrelated test copy.
const require = createRequire(import.meta.url);
const nextRequire = createRequire(require.resolve("eslint-config-next"));
const pluginRequire = createRequire(nextRequire.resolve("@next/eslint-plugin-next"));
const globPath = pluginRequire.resolve("fast-glob");
const glob = pluginRequire("fast-glob");
const globRequire = createRequire(globPath);
const matchRequire = createRequire(globRequire.resolve("micromatch"));
const braces = matchRequire("braces");

const isDepthError = (error) =>
  error instanceof SyntaxError && error.code === "BRACES_MAX_DEPTH";

test("ordinary expansion, ranges, and regex compilation retain their results", () => {
  assert.deepEqual(braces.expand("src/{app,lib}/*.{ts,tsx}"), [
    "src/app/*.ts", "src/app/*.tsx", "src/lib/*.ts", "src/lib/*.tsx",
  ]);
  assert.deepEqual(braces.expand("file-{01..03}.js"), [
    "file-01.js", "file-02.js", "file-03.js",
  ]);
  assert.equal(braces.compile("src/{app,lib}/file.js"), "src/(app|lib)/file.js");
  assert.equal(braces.stringify(braces.parse("a/{b,c}/d")), "a/{b,c}/d");
  assert.throws(() => braces.expand("{1..1001}"), RangeError);
});

test("128 nested containers remain supported", () => {
  const pattern = "{".repeat(128) + "x" + "}".repeat(128);
  assert.equal(braces.compile(pattern), pattern);
  assert.deepEqual(braces.expand(pattern), [pattern]);
  assert.equal(braces.stringify(pattern), pattern);
});

test("every string entry point rejects over-deep braces before recursive traversal", () => {
  for (const depth of [129, 4000]) {
    const pattern = "{".repeat(depth) + "a,b" + "}".repeat(depth);
    for (const run of [
      () => braces(pattern),
      () => braces(["{a,b}", pattern]),
      () => braces.create(pattern),
      () => braces.parse(pattern),
      () => braces.compile(pattern),
      () => braces.expand(pattern),
      () => braces.stringify(pattern),
      () => braces.expand(pattern, { maxDepth: Infinity, rangeLimit: false }),
    ]) {
      assert.throws(run, isDepthError);
    }
  }
  // The process remains usable after the controlled input errors.
  assert.deepEqual(braces.expand("{safe,still-safe}"), ["safe", "still-safe"]);
});

test("parentheses, mixed nesting, and unclosed input cannot bypass the bound", () => {
  const patterns = [
    "(".repeat(4000) + "x" + ")".repeat(4000),
    "{(".repeat(1000) + "a,b" + ")}".repeat(1000),
    "{".repeat(4000),
    "(".repeat(4000),
    "${" + "{".repeat(1000) + "a,b" + "}".repeat(1001),
  ];
  for (const pattern of patterns) {
    assert.throws(() => braces.parse(pattern), isDepthError);
  }
});

test("quoted, escaped, and bracketed literal braces are not counted as nesting", () => {
  for (const pattern of [
    '"' + "{".repeat(1000) + '"',
    "\\{".repeat(1000),
    "[" + "{".repeat(1000) + "]",
  ]) {
    assert.doesNotThrow(() => braces.compile(pattern));
    assert.doesNotThrow(() => braces.expand(pattern));
    assert.doesNotThrow(() => braces.stringify(pattern));
  }
});

function nestedAst(depth) {
  const root = { type: "root", nodes: [] };
  let current = root;
  for (let index = 0; index < depth; index++) {
    const child = { type: "paren", nodes: [], parent: current };
    current.nodes.push(child);
    current = child;
  }
  current.nodes.push({ type: "text", value: "x", parent: current });
  return root;
}

test("direct AST entry points also reject excessive depth and child cycles", () => {
  for (const run of [braces.compile, braces.expand, braces.stringify]) {
    assert.throws(() => run(nestedAst(4000)), isDepthError);
    const cycle = { type: "root", nodes: [] };
    cycle.nodes.push(cycle);
    assert.throws(() => run(cycle), isDepthError);
  }
});

test("adversarial input is rejected safely even with a 256 KiB V8 stack", () => {
  const source = `
    const braces = require(${JSON.stringify(matchRequire.resolve("braces"))});
    const pattern = '{'.repeat(4000) + 'a,b' + '}'.repeat(4000);
    for (const method of ['compile', 'expand', 'stringify']) {
      try { braces[method](pattern); process.exit(1); }
      catch (error) {
        if (!(error instanceof SyntaxError) || error.code !== 'BRACES_MAX_DEPTH') {
          throw error;
        }
      }
    }
  `;
  const result = spawnSync(process.execPath, ["--stack-size=256", "-e", source], {
    encoding: "utf8",
    timeout: 5000,
  });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
});

test("the Next.js plugin's actual fast-glob copy still handles normal glob patterns", () => {
  const directory = mkdtempSync(path.join(tmpdir(), "execlayer-braces-"));
  try {
    for (const file of ["alpha/a.js", "alpha/a.txt", "beta/nested/b.ts"]) {
      const target = path.join(directory, file);
      mkdirSync(path.dirname(target), { recursive: true });
      writeFileSync(target, "");
    }
    assert.deepEqual(
      glob.globSync("{alpha,beta}/**/*.{js,ts}", { cwd: directory }).sort(),
      ["alpha/a.js", "beta/nested/b.ts"],
    );
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
