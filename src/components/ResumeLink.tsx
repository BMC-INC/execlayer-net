export function ResumeLink() {
  return (
    <a
      href="/James-Benton-Resume.pdf"
      download
      className="inline-flex rounded-md border border-[var(--color-border)] px-4 py-2 text-sm hover:border-[var(--color-accent)] transition-colors"
    >
      Download Résumé{" "}
      <span className="ml-2 text-[var(--color-muted)]">PDF · 2 pages</span>
    </a>
  );
}
