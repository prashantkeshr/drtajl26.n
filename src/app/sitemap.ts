import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

export const dynamic = "force-static";

const BASE = "https://dhurta.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/ventures/", priority: 0.9 },
    { path: "/about/", priority: 0.8 },
    { path: "/services/", priority: 0.7 },
    { path: "/solutions/", priority: 0.7 },
    { path: "/presence/", priority: 0.6 },
    { path: "/portfolio/", priority: 0.6 },
    { path: "/blog/", priority: 0.6 },
    { path: "/contact/", priority: 0.5 },
  ];

  return [
    ...pages.map((p) => ({
      url: `${BASE}${p.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}/`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
