import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import GlobalPresence from "@/components/home/GlobalPresence";
import TimeZoneClocks from "@/components/presence/TimeZoneClocks";
import CulturalShowcase from "@/components/about/CulturalShowcase";

export const metadata: Metadata = {
  title: "Global Presence — DHURTA",
  description:
    "DHURTA operates across 42+ countries with regional hubs, dedicated account leadership, and a remote-first team spanning every time zone.",
};

export default function PresencePage() {
  return (
    <>
      <PageHero
        eyebrow="Global Presence"
        title="Everywhere Clever Is Needed"
        description="Remote-first by design, with regional hubs and cultural fluency embedded in every market we serve."
      />
      <GlobalPresence />
      <TimeZoneClocks />
      <CulturalShowcase />
    </>
  );
}
