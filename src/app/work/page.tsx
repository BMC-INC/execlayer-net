import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { ResumeLink } from "@/components/ResumeLink";
import { SelectedResults } from "@/components/SelectedResults";
import {
  operatingWork,
  engineeringWork,
  earlierRecognition,
} from "@/lib/workData";

const description =
  "James Benton’s body of work: ExecLayer products, AI governance research, physical engineering, manufacturing ventures, and operating results.";
export const metadata: Metadata = {
  title: "Work & Impact",
  description,
  alternates: { canonical: "https://execlayer.net/work" },
  openGraph: {
    title: "Work & Impact | James Benton",
    description,
    url: "https://execlayer.net/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Impact | James Benton",
    description,
  },
};

export default function WorkPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16 space-y-12">
      <header>
        <p className="text-sm text-[var(--color-accent)] mb-4">
          Companies · Products · Research · Engineering
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl mb-6">
          Work &amp; Impact
        </h1>
        <p className="text-lg leading-relaxed text-[var(--color-muted)]">
          I build the system around the idea: the product, the process, the
          team, and the controls that make it usable. That work has taken me
          from healthcare facilities and manufacturing floors to physical
          prototypes and AI infrastructure.
        </p>
        <nav
          aria-label="On this page"
          className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--color-accent)]"
        >
          <a href="#operating-work" className="hover:underline">
            Companies &amp; operations
          </a>
          <a href="#engineering" className="hover:underline">
            Engineering
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
          <a href="#research" className="hover:underline">
            Research &amp; standards
          </a>
          <a href="#recognition" className="hover:underline">
            Recognition
          </a>
        </nav>
      </header>
      <SelectedResults />
      <section
        id="operating-work"
        className="scroll-mt-8 border-t border-[var(--color-border)] pt-8"
      >
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-8">
          Companies and operating work
        </h2>
        <div className="space-y-10">
          {operatingWork.map((section) => (
            <article key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <ExternalLink href="https://www.newsfilecorp.com/release/110456/Britannia-Secures-Agreement-with-RST-to-Supply-UK-CBD-Market">
            Britannia’s public announcement of the RST supply agreement
          </ExternalLink>
        </p>
      </section>
      <section
        id="engineering"
        className="scroll-mt-8 border-t border-[var(--color-border)] pt-8"
      >
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-6">
          Engineering, fabrication, and physical products
        </h2>
        <div className="space-y-8">
          {engineeringWork.map((item) => (
            <article key={item.title}>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="products"
        className="scroll-mt-8 border-t border-[var(--color-border)] pt-8"
      >
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
          A portfolio with a common question
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-5">
          The products address different problems. Their common thread is making
          the source, authority, and outcome of a consequential action visible
          enough to inspect.
        </p>
        <ul className="space-y-4 text-[var(--color-muted)] leading-relaxed">
          <li>
            <Link
              href="/ecosystem#sovereignclaw"
              className="text-[var(--color-accent)] hover:underline"
            >
              SovereignClaw and Kernel V4
            </Link>{" "}
            supply distinct implementations of execution authority: a Rust agent
            runtime and a Node.js/JavaScript authorization service.
          </li>
          <li>
            <Link
              href="/ecosystem#queueflow-sentinel"
              className="text-[var(--color-accent)] hover:underline"
            >
              QueueFlow Sentinel
            </Link>{" "}
            applies policy to Ring device events and delivers notifications and
            governed actions for customers.
          </li>
          <li>
            <Link
              href="/ecosystem#authority-assessment"
              className="text-[var(--color-accent)] hover:underline"
            >
              Authority Assessment
            </Link>{" "}
            helps an organization see where automated actions meet external
            systems and where controls may belong.
          </li>
          <li>
            <Link
              href="/ecosystem#ironmem"
              className="text-[var(--color-accent)] hover:underline"
            >
              IronMem and Coding Ledger
            </Link>{" "}
            make AI work more persistent and measurable: governed memory on one
            side, usage tied to shipped outcomes on the other.
          </li>
          <li>
            <Link
              href="/ecosystem#operator-os"
              className="text-[var(--color-accent)] hover:underline"
            >
              Operator OS
            </Link>{" "}
            brings operators, connectors, jobs, memory, and approval workflows
            into a shared operating workspace.
          </li>
          <li>
            <Link
              href="/ecosystem#corpus"
              className="text-[var(--color-accent)] hover:underline"
            >
              Corpus
            </Link>{" "}
            combines interactive Human, Humanoid, and Transhuman reference
            systems with source-linked evidence and private research workflows.
          </li>
          <li>
            <Link
              href="/ecosystem#clearance-city"
              className="text-[var(--color-accent)] hover:underline"
            >
              Clearance City
            </Link>{" "}
            makes authority, evidence, refusal, and approval part of an
            interactive game, with browser and offline desktop editions.
          </li>
        </ul>
        <p className="mt-6">
          <Link
            href="/ecosystem"
            className="text-[var(--color-accent)] hover:underline"
          >
            Read what each product does and where it stands →
          </Link>
        </p>
      </section>
      <section
        id="research"
        className="scroll-mt-8 border-t border-[var(--color-border)] pt-8 space-y-4"
      >
        <h2 className="font-[family-name:var(--font-display)] text-2xl">
          Research, standards, and intellectual property
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed">
          The published research comprises four foundational papers and seven
          standalone papers. It covers runtime enforcement, execution doctrine,
          governed artifacts, emotional-signal calibration, distributed-ledger
          transactions, neural interfaces, and autonomous space systems. The
          AGB, OHB, and MGIB instruments examine runtime governance, meaningful
          human oversight, and memory-mediated authority failures.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          I have filed seven provisional patent applications, from voice-driven
          parts identification through execution-bound governance and physically
          isolated authority enforcement. The{" "}
          <Link
            href="/patents"
            className="text-[var(--color-accent)] hover:underline"
          >
            filing record
          </Link>{" "}
          lists their scope, dates, and application numbers.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          I contribute as a designated Technical Expert to CEN-CENELEC JTC 21
          WG2/WG3, participate as an ISO/IEC JTC 1/SC 42 observer via UNE, and
          work with ASTM committees, including F45 robotics and D37. The
          operating background matters here: I have had to implement the kinds
          of rules that standards help define.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          I also write for a broader audience.{" "}
          <em>The End of Probabilistic Governance</em> develops the technical
          argument; <em>Elephants Over Unicorns</em> describes my approach to
          building a business; <em>Wired Different</em> explores building with
          ADHD and AI.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/research"
            className="text-[var(--color-accent)] hover:underline"
          >
            Papers and DOI records
          </Link>
          <ExternalLink href="https://www.amazon.com/author/jamesbentonjr">
            Books
          </ExternalLink>
        </div>
      </section>
      <section
        id="recognition"
        className="scroll-mt-8 border-t border-[var(--color-border)] pt-8"
      >
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
          Recognition across the work
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          QueueFlow appeared in TechCrunch’s coverage of the Ring Appstore
          launch. ExecLayer is listed in Awesome AI Agent Governance. Program
          participation includes NVIDIA Inception, the OpenAI Partner Network,
          and the Anthropic Claude Partner Network.
        </p>
        <h3 className="text-lg font-semibold mt-7 mb-4">
          Earlier awards and industry service
        </h3>
        <ul className="space-y-3 text-[var(--color-muted)] leading-relaxed">
          {earlierRecognition.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-[var(--color-muted)]">
          Earlier awards and judging roles are reported in my career record.
        </p>
        <p className="mt-6">
          <Link
            href="/evidence"
            className="text-[var(--color-accent)] hover:underline"
          >
            Coverage, publication records, and program references →
          </Link>
        </p>
      </section>
      <section className="border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
          The next useful conversation
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-6">
          If you see a client problem, a partnership, or an investment thesis in
          this work, contact{" "}
          <a
            href="mailto:james@execlayer.io"
            className="text-[var(--color-accent)] hover:underline"
          >
            james@execlayer.io
          </a>
          . The résumé provides the detailed professional record.
        </p>
        <ResumeLink />
      </section>
    </main>
  );
}
