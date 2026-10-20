import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/ExternalLink";
import { ResumeLink } from "@/components/ResumeLink";
import { SelectedResults } from "@/components/SelectedResults";
import { books, founder } from "@/lib/siteData";

export default function Home() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16 space-y-12">
      <header>
        <p className="text-sm text-[var(--color-accent)] mb-4">
          James Benton · Founder, CEO &amp; Chief Architect, ExecLayer
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl leading-tight mb-6">
          I build systems people can put to work.
        </h1>
        <div className="flow-root">
          <Image
            src="/james-benton.jpg"
            alt="James D. Benton Jr."
            width={440}
            height={440}
            priority
            className="float-left mr-6 mb-3 h-auto w-28 sm:w-36 rounded-lg border border-[var(--color-border)]"
          />
          <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-4">
            I&apos;m the founder of ExecLayer, where I design and ship AI
            infrastructure and products. My work connects software architecture
            with experience leading regulated operations, building manufacturing
            facilities, and taking physical designs through fabrication.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed">
            I&apos;ve led teams of 200+ people, built businesses from permits
            through operations, and shipped software with paying customers.
            Today I&apos;m focused on a practical problem: giving organizations
            control over what their AI systems are authorized to do.
          </p>
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href="/work"
            className="inline-flex rounded-md bg-[var(--color-accent)] text-[var(--color-bg)] font-medium px-4 py-2 text-sm"
          >
            Explore my work
          </Link>
          <ResumeLink />
        </div>
      </header>
      <section className="border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
          What I&apos;m building
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          <ExternalLink href="https://www.execlayer.io">ExecLayer</ExternalLink>{" "}
          builds execution controls for AI agents and autonomous systems. At an
          integrated tool or operation boundary, those controls check policy,
          authority, evidence, and action limits before allowing an operation.
          Missing authority or a failed check produces a refusal; signed
          receipts make the decision inspectable afterward.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed mb-6">
          The work spans SovereignClaw&apos;s Rust agent runtime, Kernel
          V4&apos;s separate JavaScript authorization service, IronMem&apos;s
          persistent memory, and products that turn those capabilities into
          usable workflows. The controls govern actions routed through their
          enforcement boundaries.
        </p>
        <ul className="space-y-4 text-[var(--color-muted)] leading-relaxed">
          <li>
            <Link
              href="/ecosystem#queueflow-sentinel"
              className="text-[var(--color-accent)] hover:underline"
            >
              QueueFlow Sentinel
            </Link>{" "}
            — Ring device events, configurable policies, notifications, and an
            operating product with paying customers.
          </li>
          <li>
            <Link
              href="/ecosystem#authority-assessment"
              className="text-[var(--color-accent)] hover:underline"
            >
              Authority Assessment
            </Link>{" "}
            — helps teams locate consequential machine actions and examine the
            authorization signals around them.
          </li>
          <li>
            <Link
              href="/ecosystem#ironmem"
              className="text-[var(--color-accent)] hover:underline"
            >
              IronMem
            </Link>{" "}
            — memory for AI assistants with source-backed retrieval, scoped
            access, and governance controls.
          </li>
          <li>
            <Link
              href="/ecosystem#coding-ledger"
              className="text-[var(--color-accent)] hover:underline"
            >
              Coding Ledger
            </Link>{" "}
            — connects local AI usage records to shipped commits and merged pull
            requests.
          </li>
        </ul>
        <p className="mt-6">
          <Link
            href="/ecosystem"
            className="text-[var(--color-accent)] hover:underline"
          >
            Explore the products and engineering →
          </Link>
        </p>
      </section>
      <SelectedResults />
      <section className="border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
          Research that informs the engineering
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          I publish the architecture behind the work: eleven papers covering
          execution authority, financial transactions, neural interfaces,
          autonomous space systems, and the AGB, OHB, and MGIB governance
          benchmarks. I have also filed seven provisional patent applications.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          My standards work includes CEN-CENELEC JTC 21 WG2/WG3, ISO/IEC JTC
          1/SC 42 through UNE, and ASTM. Experience on the operating side of
          regulation shapes the questions I bring to those groups.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[var(--color-accent)]">
          <Link href="/research" className="hover:underline">
            Read the research
          </Link>
          <Link href="/evidence" className="hover:underline">
            See sources and recognition
          </Link>
        </div>
      </section>
      <section className="border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
          The person behind the work
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          I&apos;m a father, a self-taught builder, and an author based in
          Monterey County, California. I still care about the physical side of
          making things: CAD, machining, additive manufacturing, prototypes, and
          classic cars through KJ&apos;s Customs.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          The elephant is my shorthand for how I build: methodical, substantial,
          and accountable for the result. My books explore that approach, the
          experience of building with ADHD, and the technical argument behind
          ExecLayer.
        </p>
        <ul className="mt-6 space-y-4 text-[var(--color-muted)]">
          {books.map((entry) => (
            <li key={entry.title} className="leading-relaxed">
              <span className="text-[var(--color-foreground)]">
                {entry.title}.
              </span>{" "}
              {entry.summary}
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <ExternalLink href={founder.amazon}>
            Books and author page
          </ExternalLink>
        </p>
      </section>
      <section className="border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
          Build something together
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-5">
          For clients, partners, and investors interested in the work, reach me
          at{" "}
          <a
            href="mailto:james@execlayer.io"
            className="text-[var(--color-accent)] hover:underline"
          >
            james@execlayer.io
          </a>
          . For the detailed career record, download the résumé.
        </p>
        <ResumeLink />
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          <ExternalLink href={founder.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={founder.github}>GitHub</ExternalLink>
          <ExternalLink href={founder.orcid}>ORCID</ExternalLink>
          <ExternalLink href={founder.substack}>Substack</ExternalLink>
          <ExternalLink href={founder.twitter}>X</ExternalLink>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: founder.name,
          alternateName: founder.fullName,
          jobTitle: founder.jobTitle,
          url: founder.url,
          image: "https://execlayer.net/james-benton.jpg",
          homeLocation: {
            "@type": "Place",
            name: "Monterey County, California",
          },
          sameAs: [
            founder.linkedin,
            founder.github,
            founder.substack,
            founder.twitter,
            founder.orcid,
            founder.amazon,
            founder.ssrn,
          ],
          knowsAbout: [
            "AI Governance",
            "Runtime Enforcement",
            "Manufacturing",
            "Physical Prototyping",
            "Standards Development",
            "Regulated Operations",
          ],
        }}
      />
    </main>
  );
}
