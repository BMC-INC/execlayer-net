import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { recordSections } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Record",
  description:
    "Healthcare operations across convalescent hospitals and psychiatric wards, regulatory policy formation, ASTM and CEN-CENELEC standards work, international compliance, and applied formulation science.",
  alternates: { canonical: "https://execlayer.net/record" },
  openGraph: {
    title: "Record | James Benton",
    description:
      "Healthcare operations across convalescent hospitals and psychiatric wards, regulatory policy formation, ASTM and CEN-CENELEC standards work, international compliance, and applied formulation science.",
    url: "https://execlayer.net/record",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Record | James Benton",
    description:
      "Healthcare operations across convalescent hospitals and psychiatric wards, regulatory policy formation, ASTM and CEN-CENELEC standards work, international compliance, and applied formulation science.",
  },
};

export default function RecordPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-12">
        Record
      </h1>

      <div className="space-y-12">
        {recordSections.map((section) => (
          <section key={section.title}>
            <h2 className="font-[family-name:var(--font-display)] text-xl mb-4 text-[var(--color-foreground)]">
              {section.title}
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "James Benton",
          jobTitle: "Founder, ExecLayer",
          url: "https://execlayer.net",
          hasOccupation: recordSections.map((s) => ({
            "@type": "Occupation",
            name: s.occupation,
          })),
        }}
      />
    </main>
  );
}
