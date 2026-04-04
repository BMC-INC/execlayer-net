import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Benton — Founder, ExecLayer",
  metadataBase: new URL("https://execlayer.net"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-foreground)] font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
