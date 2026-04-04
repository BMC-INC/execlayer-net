import type { Metadata } from "next";
import { philosophyPrinciples } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Operating Principles",
  description:
    "The principles that guide how I approach regulatory work, governance, and technology.",
  alternates: { canonical: "https://execlayer.net/philosophy" },
  openGraph: {
    title: "Operating Principles | James Benton",
    description:
      "The principles that guide how I approach regulatory work, governance, and technology.",
    url: "https://execlayer.net/philosophy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operating Principles | James Benton",
    description:
      "The principles that guide how I approach regulatory work, governance, and technology.",
  },
};

export default function PhilosophyPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="text-3xl font-[family-name:var(--font-display)] text-[var(--color-foreground)]">
        Operating Principles
      </h1>
      <p className="mt-4 text-[var(--color-muted)]">
        The principles that guide how I approach regulatory work, governance,
        and technology.
      </p>

      <ol className="mt-12 space-y-6">
        {philosophyPrinciples.map((principle, index) => (
          <li key={index} className="flex gap-4">
            <span className="text-2xl font-[family-name:var(--font-display)] text-[var(--color-accent)] leading-tight">
              {index + 1}.
            </span>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              {principle}
            </p>
          </li>
        ))}
      </ol>
    </main>
  );
}
