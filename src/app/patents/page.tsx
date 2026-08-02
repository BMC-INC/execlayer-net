import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { filedPatents } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Patents",
  description:
    "Six provisional patents filed pro se, covering deterministic execution gating, governed emotional calibration, XRPL-native governance, and neural-interface enforcement.",
  alternates: { canonical: "https://execlayer.net/patents" },
  openGraph: {
    title: "Patents | James Benton",
    description:
      "Six provisional patents filed pro se, covering deterministic execution gating, governed emotional calibration, XRPL-native governance, and neural-interface enforcement.",
    url: "https://execlayer.net/patents",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Patents | James Benton",
    description:
      "Six provisional patents filed pro se, covering deterministic execution gating, governed emotional calibration, XRPL-native governance, and neural-interface enforcement.",
  },
};

const patentDates: Record<number, string> = {
  1: "2025-10-20",
  2: "2025-12-31",
  3: "2026-02-14",
  4: "2026-03-23",
  5: "2026-05-19",
  6: "2026-06-25",
};

export default function PatentsPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-6">
        Patents
      </h1>

      <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-14">
        Six provisional patents, all filed pro se as a micro entity. I write my
        own claims because nobody understands this architecture better than the
        person who built it, and because filing pro se forces you to know exactly
        what you invented.
      </p>

      <div className="space-y-4">
        {filedPatents.map((patent) => (
          <div
            key={patent.number}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6"
          >
            <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
              Patent #{patent.number}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-lg mb-1">
              {patent.name}
            </h2>
            <p className="text-sm text-[var(--color-foreground)] mb-1">
              {patent.serial}
            </p>
            <p className="text-sm text-[var(--color-accent)] mb-3">
              {patent.filing}
            </p>
            <p className="text-[var(--color-muted)] text-sm">
              {patent.summary}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[var(--color-muted)] leading-relaxed mt-12 border-t border-[var(--color-border)] pt-8">
        The through-line: deterministic gating, schema-based authority,
        cryptographic receipts. Every filing is a different surface of the same
        conviction.
      </p>

      {filedPatents.map((patent) => (
        <JsonLd
          key={patent.number}
          data={{
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            additionalType: "Patent",
            name: `${patent.name}: ${patent.serial}`,
            dateCreated: patentDates[patent.number],
            author: { "@type": "Person", name: "James Benton" },
            description: patent.summary,
          }}
        />
      ))}
    </main>
  );
}
