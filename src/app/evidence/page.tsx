import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/ExternalLink";
import { evidenceLinks } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Public Record",
  description:
    "Public references and external validation supporting the work described on this site.",
  alternates: { canonical: "https://execlayer.net/evidence" },
  openGraph: {
    title: "Public Record | James Benton",
    description:
      "Public references and external validation supporting the work described on this site.",
    url: "https://execlayer.net/evidence",
  },
  twitter: {
    card: "summary_large_image",
    title: "Public Record | James Benton",
    description:
      "Public references and external validation supporting the work described on this site.",
  },
};

export default function EvidencePage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="text-3xl font-[family-name:var(--font-display)] text-[var(--color-foreground)]">
        Public Record
      </h1>
      <p className="mt-4 text-[var(--color-muted)]">
        Public references and external validation supporting the work described
        on this site.
      </p>

      <div className="mt-12 space-y-8">
        {evidenceLinks.map((link) => (
          <div key={link.title}>
            <h3 className="text-lg font-bold text-[var(--color-foreground)]">
              {link.title}
            </h3>
            <p className="mt-1 text-[var(--color-muted)]">
              {link.description}
            </p>
            {link.href && (
              <div className="mt-2">
                <ExternalLink href={link.href}>View source</ExternalLink>
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
            url: link.href,
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
