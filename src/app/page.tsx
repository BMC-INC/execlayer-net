import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/ExternalLink";
import { founder } from "@/lib/siteData";

export default function Home() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight mb-8">
        I build governance infrastructure where AI meets regulated operations.
      </h1>

      <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6">
        My career spans regulatory policy formation, international standards
        governance, applied science, and deterministic runtime enforcement for
        AI systems. I hold standards seats at ASTM (D37, F45), CEN-CENELEC JTC 21
        (designated Technical Expert, WG2/WG3), and ISO/IEC JTC 1/SC 42 (observer
        via UNE). I have operated across highly regulated industries where
        judgment preceded precedent and where the cost of noncompliance was
        existential.
      </p>

      <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-12">
        I am now building{" "}
        <ExternalLink href="https://www.execlayer.io">ExecLayer</ExternalLink>
        {" "}&mdash; deterministic runtime control infrastructure for AI systems.
        Fail-closed execution gating, cryptographic receipt verification, and
        governed artifact standards for enterprise AI operations.
      </p>

      <div className="border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-4">
          Links
        </h2>
        <ul className="space-y-2 text-[var(--color-muted)]">
          <li>
            <ExternalLink href={founder.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={founder.url}>ExecLayer</ExternalLink>
          </li>
          <li>
            <ExternalLink href={founder.substack}>Substack</ExternalLink>
          </li>
          <li>
            <ExternalLink href={founder.twitter}>X (@JamesBentonArc)</ExternalLink>
          </li>
          <li>
            <ExternalLink href={founder.github}>GitHub</ExternalLink>
          </li>
          <li>
            <ExternalLink href={founder.orcid}>ORCID</ExternalLink>
          </li>
        </ul>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: founder.name,
          jobTitle: founder.jobTitle,
          url: founder.url,
          sameAs: [founder.linkedin, founder.github, founder.substack, founder.twitter, founder.orcid],
          knowsAbout: [
            "AI Governance",
            "Runtime Enforcement",
            "Standards Development",
            "Regulatory Policy",
            "Deterministic Execution",
            "International Compliance",
          ],
        }}
      />
    </main>
  );
}
