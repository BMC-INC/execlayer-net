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
  title: "Research",
  description:
    "DOI-registered research on deterministic runtime enforcement, governed execution, and AI governance benchmarks. Eleven papers, one book.",
  alternates: { canonical: "https://execlayer.net/research" },
  openGraph: {
    title: "Research | James Benton",
    description:
      "DOI-registered research on deterministic runtime enforcement, governance benchmarks, and AI governance infrastructure. Eleven papers, one book.",
    url: "https://execlayer.net/research",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Research | James Benton",
    description:
      "DOI-registered research on deterministic runtime enforcement, governance benchmarks, and AI governance infrastructure. Eleven papers, one book.",
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
        deck. Everything below is DOI-registered or SSRN-distributed. Read it,
        cite it, or try to break it.
      </p>

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
              <p className="text-[var(--color-muted)] text-sm">
                {paper.summary}
              </p>
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
          <p className="text-[var(--color-muted)] text-sm mb-3">
            {book.summary}
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            ISBN {book.isbn}. Published by {book.publisher}.
          </p>
        </div>
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
