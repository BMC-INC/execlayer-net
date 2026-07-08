export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="max-w-3xl mx-auto px-6 text-center text-sm text-[var(--color-muted)]">
        James Benton, Founder of{" "}
        <a
          href="https://www.execlayer.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          ExecLayer
        </a>
      </div>
    </footer>
  );
}
