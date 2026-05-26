import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Professional Record",
  description:
    "Career record spanning regulatory policy, ASTM standards governance, international compliance, and AI runtime enforcement.",
  alternates: { canonical: "https://execlayer.net/record" },
  openGraph: {
    title: "Professional Record | James Benton",
    description:
      "Career record spanning regulatory policy, ASTM standards governance, international compliance, and AI runtime enforcement.",
    url: "https://execlayer.net/record",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Professional Record | James Benton",
    description:
      "Career record spanning regulatory policy, ASTM standards governance, international compliance, and AI runtime enforcement.",
  },
};

const sections = [
  {
    title: "Regulatory Policy Formation",
    occupation: "Regulatory Policy Advisor",
    items: [
      "Shaped policy at city, county, and state level during early market formation in highly regulated industries.",
      "Worked directly with regulators, planning departments, and enforcement agencies.",
      "Represented industry stakeholders during ordinance drafting and implementation.",
      "Operated inside ambiguity where judgment preceded precedent.",
    ],
  },
  {
    title: "Standards and Governance",
    occupation: "Standards Committee Member",
    items: [
      "ASTM D37 committee member.",
      "Contribute to consensus standards for regulated product safety, quality, and testing.",
      "Participate in standards that regulators rely on during enforcement and rulemaking.",
      "Bridge between standards development and real-world manufacturing and compliance execution.",
    ],
  },
  {
    title: "Standards Body Participation",
    occupation: "International Standards Participant",
    items: [
      "ASTM D37 committee member — U.S. consensus standards for regulated product safety and testing.",
      "CEN-CENELEC JTC 21 participant via UNE nomination. Drafting harmonized standards for the EU AI Act. First board meeting May 26, 2026.",
    ],
  },
  {
    title: "Regulated Manufacturing & International Compliance",
    occupation: "Co-Founder, Remediation Sciences & Technology",
    items: [
      "Co-founder of Remediation Sciences & Technology, PLLC.",
      "B2B ingredient and technology provider.",
      "Executed UK and EU market access under fragmented national regulatory frameworks.",
      "Cross-border documentation requirements, strict regulatory thresholds, lab variance risk management.",
    ],
  },
  {
    title: "Applied Science & Formulation",
    occupation: "Formulation Lead",
    items: [
      "Water-soluble formulations for regulated consumer products.",
      "Dose uniformity, onset predictability, and stability.",
      "Collaboration with former pharmaceutical scientists (GW Pharmaceuticals).",
      "Formulation treated as the first layer of compliance, not an afterthought.",
    ],
  },
  {
    title: "High-Risk Brand & Market Execution",
    occupation: "Regulatory & Compliance Lead",
    items: [
      "Regulatory and compliance leadership for high-visibility product launches in regulated industries.",
      "Packaging, labeling, and distribution under heightened enforcement scrutiny.",
      "Protected long-term brand and category credibility.",
    ],
  },
];

export default function RecordPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-12">
        Professional Record
      </h1>

      <div className="space-y-12">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-[family-name:var(--font-display)] text-xl mb-4 text-[var(--color-foreground)]">
              {section.title}
            </h2>
            <ul className="space-y-2 text-[var(--color-muted)] list-disc list-outside ml-5">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
          hasOccupation: sections.map((s) => ({
            "@type": "Occupation",
            name: s.occupation,
          })),
        }}
      />
    </main>
  );
}
