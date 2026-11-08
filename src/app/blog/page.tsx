import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Insights — DHURTA",
  description:
    "Perspectives on global design, engineering, and growth from the DHURTA team — clever thinking, shared openly.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Clever Thinking, Shared Openly"
        description="Notes from our global team on design, engineering, growth, and the culture of building things well."
      />
      <BlogGrid />
    </>
  );
}
