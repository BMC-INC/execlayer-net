import { ArrowUpRight } from "lucide-react";

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:underline">
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 flex-shrink-0" />
    </a>
  );
}
