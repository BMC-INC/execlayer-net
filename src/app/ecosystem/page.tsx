import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/ExternalLink";
import { ecosystemProjects } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "The operating ecosystem behind ExecLayer, from runtime enforcement to governed skill supply chains.",
  alternates: { canonical: "https://execlayer.net/ecosystem" },
  openGraph: {
    title: "Ecosystem | James Benton",
    description:
      "The operating ecosystem behind ExecLayer, from runtime enforcement to governed skill supply chains.",
    url: "https://execlayer.net/ecosystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosystem | James Benton",
    description:
      "The operating ecosystem behind ExecLayer, from runtime enforcement to governed skill supply chains.",
  },
};

export default function EcosystemPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="text-3xl font-[family-name:var(--font-display)] text-[var(--color-foreground)]">
        Ecosystem
      </h1>
      <p className="mt-4 text-[var(--color-muted)]">
        The operating ecosystem behind ExecLayer, from runtime enforcement to
        governed skill supply chains.
      </p>

      <div className="mt-12 space-y-6">
        {ecosystemProjects.map((project) => (
          <div
            key={project.title}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6"
          >
            <p className="text-xs uppercase tracking-widest text-[var(--color-accent)]">
              {project.label}
            </p>
            <h3 className="mt-2 text-lg font-[family-name:var(--font-display)] text-[var(--color-foreground)]">
              {project.title}
            </h3>
            <p className="mt-2 text-[var(--color-muted)]">
              {project.summary}
            </p>
            {project.title === "QueueFlow Sentinel" && (
              <p className="mt-2 text-sm text-[var(--color-accent)]">
                Featured in TechCrunch
              </p>
            )}
            <div className="mt-4">
              <ExternalLink href={project.href}>
                Visit {project.title}
              </ExternalLink>
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
            url: project.href,
            applicationCategory: "AI Governance",
            description: project.summary,
          })),
        }}
      />
    </main>
  );
}
