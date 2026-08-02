import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/ExternalLink";
import { ecosystemProjects } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "What gets built on ExecLayer: the deterministic execution kernel, governed skill supply chain, credentialing directory, and published measurement instruments.",
  alternates: { canonical: "https://execlayer.net/ecosystem" },
  openGraph: {
    title: "Ecosystem | James Benton",
    description:
      "What gets built on ExecLayer: the deterministic execution kernel, governed skill supply chain, credentialing directory, and published measurement instruments.",
    url: "https://execlayer.net/ecosystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosystem | James Benton",
    description:
      "What gets built on ExecLayer: the deterministic execution kernel, governed skill supply chain, credentialing directory, and published measurement instruments.",
  },
};

export default function EcosystemPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-6 text-[var(--color-foreground)]">
        Ecosystem
      </h1>
      <p className="text-[var(--color-muted)] text-lg leading-relaxed">
        ExecLayer is a platform, and platforms prove themselves through what gets
        built on them. Everything below runs on the same doctrine: enforce at the
        execution boundary, keep receipts.
      </p>

      <div className="mt-14 space-y-6">
        {ecosystemProjects.map((project) => (
          <div
            key={project.title}
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
            <h2 className="mt-2 text-lg font-[family-name:var(--font-display)] text-[var(--color-foreground)]">
              {project.title}
            </h2>
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
                  Visit {project.title}
                </ExternalLink>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: ecosystemProjects.map((project) => ({
            "@type": "SoftwareApplication",
            name: project.title,
            url: project.href ?? project.links?.[0]?.href,
            applicationCategory: "AI Governance",
            description: project.summary,
          })),
        }}
      />
    </main>
  );
}
