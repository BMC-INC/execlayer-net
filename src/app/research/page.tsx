import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/ExternalLink";
import {
  researchSeries,
  latestWhitePaper,
  latestPapers,
  books,
  founder,
  ssrnPublication,
  foundationalArchive,
  researchRecognition,
} from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Research",
  description:
    "James Benton’s three books, twelve published papers, four governance benchmarks, and further research on AI execution authority.",
  alternates: { canonical: "https://execlayer.net/research" },
  openGraph: {
    title: "Research | James Benton",
    description:
      "James Benton’s three books, twelve published papers, four governance benchmarks, and further research on AI execution authority.",
    url: "https://execlayer.net/research",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Research | James Benton",
    description:
      "James Benton’s three books, twelve published papers, four governance benchmarks, and further research on AI execution authority.",
  },
};

export default function ResearchPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-6">
        Research
      </h1>

      <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-14">
        I publish the thinking behind ExecLayer instead of keeping it in a pitch
        deck. The published collection contains four foundational papers and
        eight standalone papers, with DOI records and SSRN distribution. ELIB
        joins AGB, OHB, and MGIB as the fourth governance instrument, published
        as a version 0.2 preprint. Further benchmark research is listed separately
        with its current status.
      </p>

      <p className="mb-10">
        <ExternalLink href="https://zenodo.org/communities/execlayer/records">
          Browse the complete Zenodo publication community →
        </ExternalLink>
      </p>

      <section className="mb-14" aria-labelledby="recognition-heading">
        <h2
          id="recognition-heading"
          className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]"
        >
          Recognition
        </h2>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
          <p className="text-sm text-[var(--color-accent)] mb-1">August 2026</p>
          <h3 className="font-[family-name:var(--font-display)] text-lg mb-2">
            {researchRecognition.title}
          </h3>
          <p className="text-[var(--color-muted)] text-sm mb-3">
            {researchRecognition.summary}
          </p>
          <p className="text-sm">
            <ExternalLink href={researchRecognition.href}>
              View the listing
            </ExternalLink>
          </p>
        </div>
      </section>

      {/* Foundational Research Series */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          Foundational Research Series ({foundationalArchive.version} archive)
        </h2>
        <div className="space-y-4">
          {researchSeries.map((paper) => (
            <div
              key={paper.label}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6"
            >
              <p className="text-sm text-[var(--color-accent)] mb-1">
                {paper.label}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-lg mb-2">
                {paper.title}
              </h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">
                {paper.summary}
              </p>
              <ExternalLink href={foundationalArchive.versionDoi}>
                Read in the foundational archive
              </ExternalLink>
            </div>
          ))}
        </div>
      </section>

      {/* White papers */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          White papers
        </h2>
        <div className="space-y-4">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
            <p className="text-sm text-[var(--color-accent)] mb-1">
              {latestWhitePaper.label}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-lg mb-2">
              {latestWhitePaper.title}
            </h3>
            <p className="text-[var(--color-muted)] text-sm mb-3">
              {latestWhitePaper.summary}
            </p>
            <p className="text-sm">
              <ExternalLink href={latestWhitePaper.href}>
                DOI: {latestWhitePaper.doi}
              </ExternalLink>
            </p>
          </div>
          {latestPapers.map((paper) => (
            <div
              key={paper.label}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6"
            >
              <p className="text-sm text-[var(--color-accent)] mb-1">
                {paper.label}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-lg mb-2">
                {paper.title}
              </h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">
                {paper.summary}
              </p>
              <p className="text-sm">
                <ExternalLink href={paper.href}>DOI: {paper.doi}</ExternalLink>
                {paper.ssrnHref && (
                  <>
                    {" "}
                    ·{" "}
                    <ExternalLink href={paper.ssrnHref}>
                      SSRN record
                    </ExternalLink>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14" aria-labelledby="further-research-heading">
        <h2
          id="further-research-heading"
          className="font-[family-name:var(--font-display)] text-xl mb-6"
        >
          Further benchmark research
        </h2>
        <div className="space-y-6 text-[var(--color-muted)] leading-relaxed">
          <article>
            <h3 className="text-lg text-[var(--color-foreground)] mb-2">
              Agent Authority Benchmark (AAB / EAAC-1)
            </h3>
            <p className="text-xs text-[var(--color-accent)] mb-2">
              Implemented research instrument · pre-release · October 2026
            </p>
            <p>
              Evaluates whether an agent control plane prevents prohibited
              execution, preserves human approval authority, and emits evidence
              that can be reconciled with observed actions. The implemented
              challenge uses scripted adversaries and a simulated world. Its
              recorded build status separates implementation from public release
              and publication.
            </p>
          </article>
        </div>
      </section>

      <section
        id="books"
        className="mb-14 scroll-mt-8"
        aria-labelledby="books-heading"
      >
        <h2
          id="books-heading"
          className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]"
        >
          Books
        </h2>
        <div className="space-y-4">
          {books.map((entry) => (
            <article
              key={entry.title}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6"
            >
              <h3 className="font-[family-name:var(--font-display)] text-lg mb-2">
                {entry.title}
              </h3>
              <p className="text-[var(--color-muted)] text-sm">
                {entry.summary}
              </p>
              {entry.isbn && (
                <p className="mt-3 text-sm text-[var(--color-muted)]">
                  ISBN {entry.isbn}. Published by {entry.publisher}.
                </p>
              )}
            </article>
          ))}
        </div>
        <p className="mt-6">
          <ExternalLink href={founder.amazon}>
            View all three books on Amazon
          </ExternalLink>
        </p>
      </section>

      {/* Archive metadata */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          Archive metadata
        </h2>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 space-y-2 text-sm text-[var(--color-muted)]">
          <p>
            <span className="text-[var(--color-foreground)]">Version:</span>{" "}
            {foundationalArchive.version}
          </p>
          <p>
            <span className="text-[var(--color-foreground)]">Publisher:</span>{" "}
            {foundationalArchive.publisher}
          </p>
          <p>
            <span className="text-[var(--color-foreground)]">Released:</span>{" "}
            {foundationalArchive.releaseDate}
          </p>
          <p>
            <span className="text-[var(--color-foreground)]">Version DOI:</span>{" "}
            <ExternalLink href={foundationalArchive.versionDoi}>
              {foundationalArchive.versionDoi}
            </ExternalLink>
          </p>
          <p>
            <span className="text-[var(--color-foreground)]">Concept DOI:</span>{" "}
            <ExternalLink href={foundationalArchive.conceptDoi}>
              {foundationalArchive.conceptDoi}
            </ExternalLink>
          </p>
          <p>
            <span className="text-[var(--color-foreground)]">GitHub:</span>{" "}
            <ExternalLink href={foundationalArchive.githubUrl}>
              {foundationalArchive.githubUrl}
            </ExternalLink>
          </p>
          <p>
            <span className="text-[var(--color-foreground)]">SSRN:</span>{" "}
            <ExternalLink href={ssrnPublication.href}>
              Abstract {ssrnPublication.abstractId}
            </ExternalLink>
            , distributed {ssrnPublication.distributionDate}
          </p>
        </div>
      </section>

      {/* JSON-LD */}
      {researchSeries.map((paper) => (
        <JsonLd
          key={paper.label}
          data={{
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            name: paper.title,
            url: foundationalArchive.versionDoi,
            author: { "@type": "Person", name: "James Benton" },
            publisher: {
              "@type": "Organization",
              name: "ExecLayer Inc.",
            },
            datePublished: "2026-02-08",
          }}
        />
      ))}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          name: latestWhitePaper.title,
          url: latestWhitePaper.href,
          author: { "@type": "Person", name: "James Benton" },
          publisher: {
            "@type": "Organization",
            name: "ExecLayer Inc.",
          },
          datePublished: "2026-03",
        }}
      />
      {latestPapers.map((paper) => (
        <JsonLd
          key={paper.label}
          data={{
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            name: paper.title,
            url: paper.href,
            author: { "@type": "Person", name: "James Benton" },
            publisher: {
              "@type": "Organization",
              name: "ExecLayer Inc.",
            },
            description: paper.summary,
            datePublished: paper.datePublished,
          }}
        />
      ))}
      {books.map((entry) => (
        <JsonLd
          key={entry.title}
          data={{
            "@context": "https://schema.org",
            "@type": "Book",
            name: entry.title,
            description: entry.summary,
            isbn: entry.isbn,
            url: founder.amazon,
            author: { "@type": "Person", name: "James Benton" },
            publisher: entry.publisher
              ? {
                  "@type": "Organization",
                  name: entry.publisher,
                }
              : undefined,
          }}
        />
      ))}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          name: "ExecLayer Foundational Research",
          url: ssrnPublication.href,
          author: { "@type": "Person", name: "James Benton" },
          publisher: {
            "@type": "Organization",
            name: "SSRN",
          },
          identifier: ssrnPublication.abstractId,
          datePublished: "2026-04-08",
        }}
      />
    </main>
  );
}
