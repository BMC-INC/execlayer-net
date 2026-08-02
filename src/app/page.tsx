import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/ExternalLink";
import { books, founder } from "@/lib/siteData";

export default function Home() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight mb-6">
        I build things. It&apos;s not a career choice, it&apos;s a compulsion.
      </h1>

      <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-12">
        Companies, governance kernels, classic cars, books. The medium rotates.
        The habit doesn&apos;t.
      </p>

      <section className="border-t border-[var(--color-border)] pt-8 mb-12">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-4">
          Who I am
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          I&apos;m James Benton. Founder of ExecLayer. Father. Builder. Based in
          Monterey, CA.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          I don&apos;t have a degree and I&apos;ve stopped pretending that&apos;s
          a gap. Everything I know I learned by doing it, usually faster than the
          people assigned to teach me. My brain is wired different: ADHD lets me
          consume an entire discipline in weeks and ship production systems in
          it. I wrote a book about that instead of apologizing for it.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          I came up through regulated industries. Healthcare operations leading
          200+ person teams, complex manufacturing, international compliance,
          standards committees. Rooms where judgment preceded precedent and the
          cost of getting it wrong was existential. That&apos;s where my
          obsession started. Not policy documents. Enforcement.
        </p>
      </section>

      <section className="border-t border-[var(--color-border)] pt-8 mb-12">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-4">
          What I&apos;m building
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          <ExternalLink href="https://www.execlayer.io">ExecLayer</ExternalLink>{" "}
          is not a SaaS product. It&apos;s a platform: deterministic runtime
          control infrastructure for AI systems, with an ecosystem of products
          built on top of it. Fail-closed execution gating, cryptographic
          receipts, governed artifact standards. I wrote the stack myself. 1,200+
          tests, 32+ crates, six provisional patents filed pro se, US and EU
          scope.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          SaaS asks a model to behave. Infrastructure makes misbehavior
          mechanically impossible. I&apos;m building the second thing.
        </p>
      </section>

      <section className="border-t border-[var(--color-border)] pt-8 mb-12">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-4">
          The elephant thesis
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          The startup industry worships unicorns. I&apos;m building an elephant.
          Real mass, moves only by its own conviction, can&apos;t be pushed
          around by a hype cycle. And an elephant never forgets, which fits a
          company whose entire product is permanent evidence.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          People will call that slow. Slow is the accusation. Methodical is the
          fact.
        </p>
      </section>

      <section className="border-t border-[var(--color-border)] pt-8 mb-12">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-4">
          Books
        </h2>
        <ul className="space-y-4 text-[var(--color-muted)]">
          {books.map((entry) => (
            <li key={entry.title} className="leading-relaxed">
              <span className="text-[var(--color-foreground)]">
                {entry.title}.
              </span>{" "}
              {entry.summary}
            </li>
          ))}
        </ul>
        <p className="text-[var(--color-muted)] leading-relaxed mt-6">
          All titles:{" "}
          <ExternalLink href={founder.amazon}>
            amazon.com/author/jamesbentonjr
          </ExternalLink>
        </p>
      </section>

      <section className="border-t border-[var(--color-border)] pt-8 mb-12">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-4">
          Standards work
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed">
          ASTM committee member. Designated Technical Expert at CEN-CENELEC JTC
          21 (WG2/WG3). Observer at ISO/IEC JTC 1/SC 42 via UNE. I sit in the
          rooms where the rules get written because I spent my career on the side
          that has to live with them.
        </p>
      </section>

      <section className="border-t border-[var(--color-border)] pt-8 mb-12">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-4">
          Off the clock
        </h2>
        <p className="text-[var(--color-muted)] leading-relaxed">
          I restore classic cars under KJ&apos;s Customs 831. Same discipline as
          the software: good bones, strip it to the frame, rebuild it right, keep
          receipts. And the title I actually care about isn&apos;t Founder.
          It&apos;s Father.
        </p>
      </section>

      <div className="border-t border-[var(--color-border)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl mb-4">
          Links
        </h2>
        <ul className="space-y-2 text-[var(--color-muted)]">
          <li>
            <ExternalLink href={founder.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={founder.amazon}>Amazon Author Page</ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.execlayer.io">ExecLayer</ExternalLink>
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
          homeLocation: {
            "@type": "Place",
            name: "Monterey, California",
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
