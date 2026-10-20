import { selectedResults } from "@/lib/workData";

export function SelectedResults() {
  return (
    <section
      aria-labelledby="results-heading"
      className="border-t border-[var(--color-border)] pt-8"
    >
      <h2
        id="results-heading"
        className="font-[family-name:var(--font-display)] text-2xl mb-6"
      >
        Selected results
      </h2>
      <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        {selectedResults.map((result) => (
          <div key={result.label}>
            <dt className="text-xl font-semibold text-[var(--color-foreground)]">
              {result.value}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
              {result.label}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-xs leading-relaxed text-[var(--color-muted)]">
        Career and business results reported by James Benton. Research, source
        code, and external coverage are linked separately.
      </p>
    </section>
  );
}
