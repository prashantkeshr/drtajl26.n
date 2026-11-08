import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServicesCatalog from "@/components/services/ServicesCatalog";

export const metadata: Metadata = {
  title: "Services — DHURTA Global Digital Transformation",
  description:
    "Explore DHURTA's global service catalog — web & app development, digital strategy, brand & UX design, cloud engineering, AI automation, and growth marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="A Clever Solution for Every Challenge"
        description="Six disciplines, engineered to work together — pick a starting point, or let us map the full transformation."
      />
      <ServicesCatalog />
    </>
  );
}
