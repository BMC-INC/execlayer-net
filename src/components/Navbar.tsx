"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/record", label: "Record" },
  { href: "/research", label: "Research" },
  { href: "/patents", label: "Patents" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/evidence", label: "Evidence" },
  { href: "/philosophy", label: "Philosophy" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[var(--color-border)]">
      <div className="max-w-3xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                isActive
                  ? "text-[var(--color-foreground)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
