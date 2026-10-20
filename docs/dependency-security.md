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

## Remaining development-only advisory

`pnpm audit` still reports **GHSA-vfj7-8cjw-p6xm**, a high-severity stack-exhaustion
issue in `braces@3.0.3`. No patched upstream release exists as of this review.
Its only dependency path is:

`eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`

This is a development dependency, absent from the production dependency audit.
The Next.js plugin passes `settings.next.rootDir` to fast-glob when that setting
is explicitly configured. This site's ESLint configuration does not set it;
the plugin uses the current working directory without glob expansion instead.
The site accepts no visitor input for ESLint patterns or configuration.

This advisory remains visible in the full audit; it is neither dismissed nor
globally ignored. The release accepts this bounded development-tooling exposure
while retaining the upstream Next.js lint rules. Review by **November 19, 2026**,
or sooner when braces, fast-glob, or the Next.js ESLint plugin releases a fix.
Reassess before introducing root-directory glob settings or untrusted patterns.

## Release checks

Run `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm build`, and
`pnpm audit --prod`. Also review the full `pnpm audit`; the advisory above is the
only known outstanding finding at this review. Any additional finding requires
a fresh assessment. Verify GitHub's open alerts and the deployed commit after
publishing; a successful local audit alone does not prove alert closure.
