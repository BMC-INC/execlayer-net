# execlayer.net

The personal site of James Benton, founder of ExecLayer, published at
**[execlayer.net](https://execlayer.net)**.

It is a biography and a public record: who he is, what he has built, what he
has filed, and what he has published. The site is the thing. This repository is
just where it is written and from where it deploys.

**Read it at [execlayer.net](https://execlayer.net).** There is nothing here to
install or download. It is not a template, a starter, or a product, and the
content is not offered for reuse.

## What is on the site

| Page | What it holds |
|---|---|
| `/` | Who James is, and the short version of the work |
| `/record` | The professional record: healthcare operations, regulatory policy, ASTM and CEN-CENELEC standards work, international compliance, applied formulation science |
| `/research` | Eleven DOI-registered papers and one book, with the SSRN and Zenodo listings |
| `/patents` | Seven provisional patents filed pro se, with serial numbers and dates |
| `/ecosystem` | What gets built on ExecLayer: the execution kernel, the governed skill supply chain, the credentialing directory, the measurement instruments |
| `/evidence` | Primary sources for the claims made elsewhere: press, standards committees, DOIs, federal registration |
| `/philosophy` | The five operating principles behind the engineering |

Claims on these pages are meant to be checkable. Where a page asserts a paper,
a filing, or a standards seat, `/evidence` is where the primary source for it
lives.

## How it is built

Next.js 16 (App Router) and React 19 on Tailwind 4, TypeScript throughout,
deployed on Vercel. Playfair Display and Inter, self-hosted through
`next/font`.

Nearly all page copy lives in `src/lib/siteData.ts`. The pages under
`src/app/` are thin renderers over it, so a content change is almost always an
edit to that one file rather than to a component. Structured data is emitted
from `src/components/JsonLd.tsx`.

`public/llms.txt` summarizes the site for crawlers. It is written by hand and
does not derive from `siteData.ts`, so it goes stale first. Update it whenever
a paper, a filing, or a headline count changes.

## Maintaining it

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm lint
pnpm build
```

There is no test suite. Verification is `pnpm lint` and `pnpm build`, plus
reading the rendered HTML under `.next/server/app/` when a content or metadata
change needs confirming.

pnpm dependency `overrides` belong in `pnpm-workspace.yaml` and nowhere else.
Declaring them in `package.json` as well makes the two disagree, which breaks
the frozen install Vercel runs and can quietly weaken the pinned versions.

Merging to `main` deploys to production.
