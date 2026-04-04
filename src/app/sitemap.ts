import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const base = "https://execlayer.net";

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/record`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/research`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/patents`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ecosystem`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/evidence`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/philosophy`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
