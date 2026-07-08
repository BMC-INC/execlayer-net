import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/ExternalLink";
import {
  researchSeries,
  latestWhitePaper,
  latestPapers,
  book,
  ssrnPublication,
  foundationalArchive,
} from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Published Research",
  description:
    "Foundational research series on deterministic runtime enforcement, governed execution, and AI governance infrastructure.",
  alternates: { canonical: "https://execlayer.net/research" },
  openGraph: {
    title: "Published Research | James Benton",
    description:
      "Published research on deterministic runtime enforcement, governance benchmarks, and AI governance infrastructure. Eight papers, one book.",
    url: "https://execlayer.net/research",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Published Research | James Benton",
    description:
      "Published research on deterministic runtime enforcement, governance benchmarks, and AI governance infrastructure. Eight papers, one book.",
  },
};

export default function ResearchPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-12">
        Published Research
      </h1>

      {/* Foundational Research Series */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          Foundational Research Series
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
              <p className="text-[var(--color-muted)] text-sm mb-2">
                {paper.summary}
              </p>
              <p className="text-xs text-[var(--color-muted)] opacity-70">
                Included in the {foundationalArchive.version} archive
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest White Papers */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          Latest White Papers
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
                <ExternalLink href={paper.href}>
                  DOI: {paper.doi}
                </ExternalLink>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Book */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          Book
        </h2>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
          <h3 className="font-[family-name:var(--font-display)] text-lg mb-2">
            {book.title}
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-1">
            ISBN {book.isbn}
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            Published by {book.publisher}.
          </p>
        </div>
      </section>

      {/* Archive Metadata */}
      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          Archive Metadata
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
            <span className="text-[var(--color-foreground)]">Release Date:</span>{" "}
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
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          SSRN Publication
        </h2>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 space-y-2 text-sm text-[var(--color-muted)]">
          <p>
            <span className="text-[var(--color-foreground)]">Abstract ID:</span>{" "}
            {ssrnPublication.abstractId}
          </p>
          <p>
            <span className="text-[var(--color-foreground)]">Distributed:</span>{" "}
            {ssrnPublication.distributionDate}
          </p>
          <p>
            <span className="text-[var(--color-foreground)]">Link:</span>{" "}
            <ExternalLink href={ssrnPublication.href}>
              {ssrnPublication.href}
            </ExternalLink>
          </p>
        </div>
      </section>

      {/* JSON-LD for all 5 papers */}
      {researchSeries.map((paper) => (
        <JsonLd
          key={paper.label}
          data={{
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            name: paper.title,
            author: { "@type": "Person", name: "James Benton" },
            publisher: {
              "@type": "Organization",
              name: "ExecLayer Inc.",
            },
            datePublished: "2026-03",
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Book",
          name: book.title,
          isbn: book.isbn,
          author: { "@type": "Person", name: "James Benton" },
          publisher: {
            "@type": "Organization",
            name: book.publisher,
          },
        }}
      />
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
