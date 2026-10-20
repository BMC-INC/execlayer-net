# Dependency security review — October 20, 2026

The release updates Next.js and eslint-config-next to 16.3.8 and pins patched
transitive dependencies through pnpm workspace overrides:

| Dependency | Resolved version |
| --- | --- |
| Next.js / eslint-config-next | 16.3.8 |
| brace-expansion, 1.x | 1.1.21 |
| brace-expansion, 5.x | 5.0.12 |
| source-map-js | 1.2.2 |
| sharp | 0.35.5 |

These updates address all six Dependabot alerts open at the start of the review,
including both manifest reports of the critical Next.js ImageResponse advisory
GHSA-vcvr-r3jv-pc5j. The broader pnpm audit also identified affected sharp and
brace-expansion versions beyond those GitHub alerts.

## Local mitigation for the development-only braces advisory

`pnpm audit` still reports **GHSA-vfj7-8cjw-p6xm**, a high-severity stack-exhaustion
issue in `braces@3.0.3`. No patched upstream release exists as of this review.
Its only dependency path is:

`eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`

This is a development dependency, absent from the production dependency audit.
The Next.js plugin passes `settings.next.rootDir` to fast-glob when that setting
is explicitly configured. This site's ESLint configuration does not set it;
the plugin uses the current working directory without glob expansion instead.
The site accepts no visitor input for ESLint patterns or configuration.

The project applies `patches/braces@3.0.3.patch` through pnpm's
`patchedDependencies` mechanism. This is a local security mitigation, not an
upstream release. It limits brace and parenthesis nesting to 128 containers
during parsing, and also bounds the recursive compile, expand, and stringify
walkers for callers passing ASTs directly. Quoted, escaped, and bracketed literal
braces retain their ordinary interpretation. Over-deep input throws a deliberate
`SyntaxError` with code `BRACES_MAX_DEPTH` before exhausting the JavaScript stack.
As with the library's existing input-length errors, callers handling untrusted
patterns must catch invalid-input errors.

The eight checks in `scripts/test-braces-security.mjs` run against the actual
braces instance used by the Next.js ESLint plugin. They cover normal expansion,
numeric ranges, regex compilation, the depth boundary, adversarial strings,
mixed and unclosed nesting, direct ASTs, child cycles, and fast-glob integration.
A separate child process verifies rejection with a 256 KiB V8 stack; the
unpatched package exhausts that stack on the same 4,000-level pattern.
`pnpm build` runs these checks before Next.js builds the site, including on
Vercel. A frozen-lockfile install verifies the committed patch hash.

The advisory remains visible in the full audit because the package is still
version 3.0.3; package-version scanners do not establish whether this local code
patch is effective. It is neither dismissed nor globally ignored. The production
dependency audit remains clean. Review by **November 19, 2026**, or sooner when
braces, fast-glob, or the Next.js ESLint plugin releases a fix. Replace the local
patch with a reviewed upstream fix when available, rerun the security tests,
and reassess before accepting untrusted patterns in any new workflow.

## Release checks

Run `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm build`, and
`pnpm audit --prod`. The build includes `pnpm test:security`. Also review the full
`pnpm audit`; the locally mitigated advisory above is the only known outstanding
version-based finding at this review. Any additional finding requires a fresh
assessment. Verify GitHub's open alerts and the deployed commit after publishing;
a successful local audit alone does not prove alert closure.
