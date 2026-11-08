import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PillarsStrip from "@/components/ventures/PillarsStrip";
import VenturesShowcase from "@/components/ventures/VenturesShowcase";
import FutureSectors from "@/components/ventures/FutureSectors";

export const metadata: Metadata = {
  title: "Group Ventures — The Dhurta Group",
  description:
    "Explore the Dhurta group's shipping products: Dhurta Browser, the open-source zero-telemetry privacy browser; Dhurta Connect, serverless end-to-end encrypted P2P chat, calls & file sharing; and Dhurta Setu, a curated web index — plus our roadmap into IT & cybersecurity, AI, design, infrastructure, and mechanical & electrical engineering.",
  alternates: { canonical: "https://dhurta.org/ventures/" },
};

export default function VenturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Group Ventures"
        title="The Companies of Dhurta"
        description="An umbrella built on Trust, Technology, and Culture — real shipping products first, ambitions named honestly second."
      />
      <PillarsStrip />
      <VenturesShowcase />
      <FutureSectors />
    </>
  );
}
