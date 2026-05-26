import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { filedPatents, patentPortfolioThemes } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Patent Portfolio",
  description:
    "Patent portfolio covering deterministic execution gating, governed emotional calibration, XRPL-native governance, and AI runtime enforcement.",
  alternates: { canonical: "https://execlayer.net/patents" },
  openGraph: {
    title: "Patent Portfolio | James Benton",
    description:
      "Patent portfolio covering deterministic execution gating, governed emotional calibration, XRPL-native governance, and AI runtime enforcement.",
    url: "https://execlayer.net/patents",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Patent Portfolio | James Benton",
    description:
      "Patent portfolio covering deterministic execution gating, governed emotional calibration, XRPL-native governance, and AI runtime enforcement.",
  },
};

const patentDates: Record<number, string> = {
  1: "2025-10-20",
  2: "2025-12-31",
  3: "2026-02-14",
  4: "2026-03-23",
  5: "2026-05-19",
};

export default function PatentsPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-12">
        Patent Portfolio
      </h1>

      {/* Filed Patents */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-6 text-[var(--color-foreground)]">
          Filed Patents
        </h2>
        <div className="space-y-4">
          {filedPatents.map((patent) => (
            <div
              key={patent.number}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6"
            >
              <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                Patent #{patent.number}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-lg mb-1">
                {patent.name}
              </h3>
              <p className="text-sm text-[var(--color-foreground)] mb-1">
                {patent.title}
              </p>
              <p className="text-sm text-[var(--color-accent)] mb-3">
                {patent.filing}
              </p>
              <p className="text-[var(--color-muted)] text-sm mb-4">
                {patent.summary}
              </p>
              {patent.focusAreas && (
                <ul className="space-y-1.5 text-sm text-[var(--color-muted)]">
                  {patent.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2"
                    >
                      <span className="text-[var(--color-border)] mt-1.5 block h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
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

      {filedPatents.map((patent) => (
        <JsonLd
          key={patent.number}
          data={{
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            additionalType: "Patent",
            name: `${patent.name} — ${patent.title}`,
            dateCreated: patentDates[patent.number],
            author: { "@type": "Person", name: "James Benton" },
            description: patent.summary,
          }}
        />
      ))}
    </main>
  );
}
