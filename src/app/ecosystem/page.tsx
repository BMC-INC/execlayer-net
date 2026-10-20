import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { ecosystemProjects } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "James Benton’s products and engineering: execution authority, AI memory, developer tools, applied systems, and physical prototypes.",
  alternates: { canonical: "https://execlayer.net/ecosystem" },
  openGraph: {
    title: "Ecosystem | James Benton",
    description:
      "James Benton’s products and engineering: execution authority, AI memory, developer tools, applied systems, and physical prototypes.",
    url: "https://execlayer.net/ecosystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosystem | James Benton",
    description:
      "James Benton’s products and engineering: execution authority, AI memory, developer tools, applied systems, and physical prototypes.",
  },
};

export default function EcosystemPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-6 text-[var(--color-foreground)]">
        Ecosystem
      </h1>
      <p className="text-[var(--color-muted)] text-lg leading-relaxed">
        Products, infrastructure, research tools, and prototypes from my work at
        ExecLayer and beyond. Each addresses a specific problem; the
        descriptions distinguish implementations, public demonstrations, and
        work still in development.
      </p>

      <nav
        aria-label="Project categories"
        className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--color-accent)]"
      >
        {[...new Set(ecosystemProjects.map((p) => p.group))].map((group) => (
          <a
            key={group}
            href={`#${group.toLowerCase().replaceAll(" ", "-")}`}
            className="hover:underline"
          >
            {group}
          </a>
        ))}
      </nav>
      <div className="mt-14 space-y-12">
        {[...new Set(ecosystemProjects.map((p) => p.group))].map((group) => (
          <section
            key={group}
            id={group.toLowerCase().replaceAll(" ", "-")}
            className="scroll-mt-8"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl mb-6">
              {group}
            </h2>
            <div className="space-y-6">
              {ecosystemProjects
                .filter((project) => project.group === group)
                .map((project) => (
                  <div
                    key={project.title}
                    id={project.id}
                    className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs uppercase tracking-widest text-[var(--color-accent)]">
                        {project.label}
                      </p>
                      {project.openSource && (
                        <span className="text-xs uppercase tracking-widest border border-[var(--color-border)] rounded-full px-2 py-0.5 text-[var(--color-muted)]">
                          Open source
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-lg font-[family-name:var(--font-display)] text-[var(--color-foreground)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-[var(--color-muted)]">
                      {project.status}
                    </p>
                    <p className="mt-2 text-[var(--color-muted)]">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      {project.links ? (
                        project.links.map((link) => (
                          <ExternalLink key={link.href} href={link.href}>
                            {link.label}
                          </ExternalLink>
                        ))
                      ) : project.href ? (
                        <ExternalLink href={project.href}>
                          Explore {project.title}
                        </ExternalLink>
                      ) : null}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
      <p className="mt-12 text-[var(--color-muted)]">
        For the operating story and physical engineering behind these systems,{" "}
        <Link
          href="/work"
          className="text-[var(--color-accent)] hover:underline"
        >
          explore Work &amp; Impact
        </Link>
        .
      </p>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: ecosystemProjects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            url: `https://execlayer.net/ecosystem#${project.id}`,
            description: project.summary,
          })),
        }}
      />
    </main>
  );
}
