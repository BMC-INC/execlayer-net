import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
      <h1 className="text-3xl font-[family-name:var(--font-display)] text-[var(--color-foreground)]">
        Page not found
      </h1>
      <p className="mt-4 text-[var(--color-muted)]">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 inline-block text-[var(--color-accent)] hover:underline">
        Return home
      </Link>
    </main>
  );
}
