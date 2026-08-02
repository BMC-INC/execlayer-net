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
        Claims are cheap. Receipts aren&apos;t. External references supporting
        everything on this site:
      </p>

      <div className="mt-14 space-y-8">
        {evidenceLinks.map((link) => (
          <div key={link.title}>
            <h2 className="text-lg font-bold text-[var(--color-foreground)]">
              {link.title}
            </h2>
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
                    <ExternalLink key={source.href} href={source.href}>
                      {source.label}
                    </ExternalLink>
                  ))
                ) : (
                  <ExternalLink href={link.href!}>View source</ExternalLink>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-[var(--color-border)] pt-6">
        <p className="italic text-[var(--color-muted)]">
          This site is not exhaustive. It is representative.
        </p>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: evidenceLinks.map((link) => ({
            "@type": "Article",
            name: link.title,
            url: link.href ?? link.links?.[0]?.href,
            publisher: {
              "@type": "Organization",
              name: link.title,
            },
          })),
        }}
      />
    </main>
  );
}
