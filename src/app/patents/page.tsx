import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { filedPatent, patentPortfolioThemes } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Patent Portfolio",
  description:
    "Patent portfolio covering deterministic execution gating, governed emotional calibration, and AI runtime enforcement.",
  alternates: { canonical: "https://execlayer.net/patents" },
  openGraph: {
    title: "Patent Portfolio | James Benton",
    description:
      "Patent portfolio covering deterministic execution gating, governed emotional calibration, and AI runtime enforcement.",
    url: "https://execlayer.net/patents",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Patent Portfolio | James Benton",
    description:
      "Patent portfolio covering deterministic execution gating, governed emotional calibration, and AI runtime enforcement.",
  },
};

export default function PatentsPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-12">
        Patent Portfolio
      </h1>

      {/* Filed Patent */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          Filed Patent
        </h2>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
          <h3 className="font-[family-name:var(--font-display)] text-lg mb-1">
            {filedPatent.title}
          </h3>
          <p className="text-sm text-[var(--color-accent)] mb-3">
            {filedPatent.filing}
          </p>
          <p className="text-[var(--color-muted)] text-sm mb-4">
            {filedPatent.summary}
          </p>
          <ul className="space-y-1.5 text-sm text-[var(--color-muted)]">
            {filedPatent.focusAreas.map((area) => (
              <li
                key={area}
                className="flex items-start gap-2"
              >
                <span className="text-[var(--color-border)] mt-1.5 block h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Patent Portfolio Themes */}
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          Patent Portfolio Themes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {patentPortfolioThemes.map((theme) => (
            <div
              key={theme}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6"
            >
              <p className="text-[var(--color-foreground)] text-sm">{theme}</p>
            </div>
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          additionalType: "Patent",
          name: filedPatent.title,
          dateCreated: "2026-03-23",
          author: { "@type": "Person", name: "James Benton" },
          description: filedPatent.summary,
        }}
      />
    </main>
  );
}
