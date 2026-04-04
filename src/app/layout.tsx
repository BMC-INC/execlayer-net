import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
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
  title: {
    default: "James Benton — Founder, ExecLayer",
    template: "%s | James Benton",
  },
  description:
    "Founder of ExecLayer. Published research, patent portfolio, and operator background in AI governance and regulated industries.",
  metadataBase: new URL("https://execlayer.net"),
  verification: { google: "googlec016a09ca616f3e4" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://execlayer.net",
    siteName: "James Benton",
    title: "James Benton — Founder, ExecLayer",
    description:
      "Founder of ExecLayer. Published research, patent portfolio, and operator background in AI governance and regulated industries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Benton — Founder, ExecLayer",
    description:
      "Founder of ExecLayer. Published research, patent portfolio, and operator background in AI governance and regulated industries.",
  },
  alternates: { canonical: "https://execlayer.net" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-foreground)] font-[family-name:var(--font-body)] antialiased min-h-screen flex flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ExecLayer",
            url: "https://execlayer.net",
            founder: {
              "@type": "Person",
              name: "James Benton",
              jobTitle: "Founder, ExecLayer",
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "James Benton",
            url: "https://execlayer.net",
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
