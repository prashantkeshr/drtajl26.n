import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Case Studies — DHURTA",
  description:
    "Global case studies from DHURTA — fintech, mobility, retail, health tech, media, and more, across every continent we serve.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Clever, Proven at Scale"
        description="Real results from real markets — filter by region or industry to see how we've delivered."
      />
      <PortfolioGrid />
    </>
  );
}
