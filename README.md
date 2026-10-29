# ExecLayer · Founder, Products & Research

The personal site of James Benton, founder of ExecLayer, published at
**[execlayer.net](https://execlayer.net)**.

The site connects the company's work, products, research, and supporting evidence
in one public record. Investors, customers, and collaborators can explore the
portfolio and follow primary sources behind its claims.

**[Visit execlayer.net](https://execlayer.net)** · [Explore the work](https://execlayer.net/work) · [Read the research](https://execlayer.net/research) · [Review the evidence](https://execlayer.net/evidence)

This repository contains the website source and maintenance instructions. Product
implementations are maintained separately. The website content is not offered for
reuse, and no repository-wide open-source license is included.

## What is on the site

| Page | What it holds |
|---|---|
| `/` | Who James is, and the short version of the work |
| `/work` | Founder’s body of work: companies, products, research, physical engineering, operating results, and recognition. `/record` permanently redirects here. |
| `/research` | Twelve published papers, four published benchmarks (including the ELIB v0.2 preprint), books, and separately labeled further research |
| `/patents` | Seven provisional patent applications, with serial numbers and dates |
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

The downloadable résumé is `public/James-Benton-Resume.pdf`, converted from `docs/James-Benton-Resume.docx`. This is James’s supplied two-page résumé with only his phone number and its adjacent separator removed. Preserve the original headline, wording, email addresses, links, budget reference, sections, and formatting; do not rewrite or condense it.

## Maintaining it

Use Node.js 20.9 or later and pnpm **10.33.0**, the version declared in
`package.json`. Clone the repository and run these commands from its root:

```bash
pnpm install --frozen-lockfile
pnpm dev     # http://localhost:3000
pnpm lint
pnpm build
pnpm audit --prod
```

`pnpm build` runs the focused dependency security tests before building Next.js.
Run those tests independently with `pnpm test:security`. Verification also
includes `pnpm lint` and reading the rendered HTML under `.next/server/app/`
when a content or metadata change needs confirming.

Review the full `pnpm audit` as well. The development-only braces advisory,
its committed local mitigation, and the upstream review deadline are recorded in
[`docs/dependency-security.md`](docs/dependency-security.md).

pnpm dependency `overrides` belong in `pnpm-workspace.yaml` and nowhere else.
Declaring them in `package.json` as well makes the two disagree, which breaks
the frozen install Vercel runs and can quietly weaken the pinned versions.

Merging to `main` deploys to production. For website defects or broken source
links, [open an issue](https://github.com/BMC-INC/execlayer-net/issues) with the
affected page and expected behavior.
