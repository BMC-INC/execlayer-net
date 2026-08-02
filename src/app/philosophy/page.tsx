import type { Metadata } from "next";
import { philosophyPrinciples } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "Five operating principles behind ExecLayer: accountability without observation, early rulemaking, compliance by design, methodical over hype, credibility that compounds.",
  alternates: { canonical: "https://execlayer.net/philosophy" },
  openGraph: {
    title: "Philosophy | James Benton",
    description:
      "Five operating principles behind ExecLayer: accountability without observation, early rulemaking, compliance by design, methodical over hype, credibility that compounds.",
    url: "https://execlayer.net/philosophy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philosophy | James Benton",
    description:
      "Five operating principles behind ExecLayer: accountability without observation, early rulemaking, compliance by design, methodical over hype, credibility that compounds.",
  },
};

export default function PhilosophyPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-6 text-[var(--color-foreground)]">
        Philosophy
      </h1>
      <p className="text-[var(--color-muted)] text-lg leading-relaxed">
        Five principles run everything I do. They came from operating, not
        reading.
      </p>

      <ol className="mt-14 space-y-10">
        {philosophyPrinciples.map((principle, index) => (
          <li key={principle.title} className="flex gap-4">
            <span className="text-2xl font-[family-name:var(--font-display)] text-[var(--color-accent)] leading-tight">
              {index + 1}.
            </span>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-lg text-[var(--color-foreground)] mb-2">
                {principle.title}
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {principle.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
