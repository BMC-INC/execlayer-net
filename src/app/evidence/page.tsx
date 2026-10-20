import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/ExternalLink";
import { evidenceLinks } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Evidence",
  description:
    "External references supporting the work on this site: press coverage, standards committees, DOI-registered publications, and federal registration.",
  alternates: { canonical: "https://execlayer.net/evidence" },
  openGraph: {
    title: "Evidence | James Benton",
    description:
      "External references supporting the work on this site: press coverage, standards committees, DOI-registered publications, and federal registration.",
    url: "https://execlayer.net/evidence",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evidence | James Benton",
    description:
      "External references supporting the work on this site: press coverage, standards committees, DOI-registered publications, and federal registration.",
  },
};

export default function EvidencePage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-6 text-[var(--color-foreground)]">
        Evidence
      </h1>
      <p className="text-[var(--color-muted)] text-lg leading-relaxed">
        Sources for different parts of the work: independent coverage, company
        announcements, published research, community listings, standards
        participation, and program memberships. The descriptions explain what
        each source establishes.
      </p>

      <div className="mt-14 space-y-8">
        {[...new Set(evidenceLinks.map((link) => link.category))].map(
          (category) => (
            <section key={category}>
              <h2 className="text-2xl font-[family-name:var(--font-display)] mb-6">
                {category}
              </h2>
              <div className="space-y-7">
                {evidenceLinks
                  .filter((link) => link.category === category)
                  .map((link) => (
                    <div key={link.title}>
                      <h3 className="text-lg font-bold text-[var(--color-foreground)]">
                        {link.title}
                      </h3>
                      <p className="mt-1 text-[var(--color-muted)]">
                        {link.description}
                      </p>
                      {link.badge && (
                        <Image
                          src={link.badge.src}
                          alt={link.badge.alt}
                          width={link.badge.width}
                          height={link.badge.height}
                          className="mt-3 h-auto w-[220px] max-w-full"
                        />
                      )}
                      {(link.href || link.links) && (
                        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                          {link.links ? (
                            link.links.map((source) => (
                              <ExternalLink
                                key={source.href}
                                href={source.href}
                              >
                                {source.label}
                              </ExternalLink>
                            ))
                          ) : (
                            <ExternalLink href={link.href!}>
                              View source
                            </ExternalLink>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </section>
          ),
        )}
      </div>

      <div className="mt-16 border-t border-[var(--color-border)] pt-6">
        <p className="italic text-[var(--color-muted)]">
          Operating results, customer traction, earlier awards, and individual
          participation are reported by James Benton unless a linked source
          establishes them. Program membership, a DOI record, and an
          organization directory entry each document a different kind of
          activity.
        </p>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: evidenceLinks
            .filter((link) => link.href || link.links?.length)
            .map((link, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: link.title,
              url: link.href ?? link.links?.[0]?.href,
              description: link.description,
            })),
        }}
      />
    </main>
  );
}
