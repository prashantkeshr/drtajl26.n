import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import IndustryTabs from "@/components/solutions/IndustryTabs";

export const metadata: Metadata = {
  title: "Global Solutions — DHURTA",
  description:
    "Industry-specific solutions from DHURTA — fintech, health tech, retail, mobility, media, and public sector, engineered globally.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Solutions"
        title="Specialized, Not Generic"
        description="Every industry has its own rules. We build solutions that respect them — and outsmart them where it counts."
      />
      <IndustryTabs />
    </>
  );
}
