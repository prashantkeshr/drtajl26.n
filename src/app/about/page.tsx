import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { milestones, team } from "@/lib/data";
import MissionVision from "@/components/about/MissionVision";
import BrandTimeline from "@/components/about/BrandTimeline";
import TeamGrid from "@/components/about/TeamGrid";
import CulturalShowcase from "@/components/about/CulturalShowcase";

export const metadata: Metadata = {
  title: "About DHURTA — Global Brand Identity",
  description:
    "The story behind DHURTA — a brand built on reclaiming ‘clever’ as a global strength, with a remote-first team spanning every continent.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DHURTA"
        title="Clever, By Design"
        description="We took a word most brands would avoid — ‘Dhurta,’ clever, shrewd, cunning — and turned it into a global promise: we see what others miss, and we deliver what others only promise."
      />
      <MissionVision />
      <BrandTimeline milestones={milestones} />
      <TeamGrid team={team} />
      <CulturalShowcase />
    </>
  );
}
