import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactHero from "@/components/contact/ContactHero";
import TimeZoneClocks from "@/components/presence/TimeZoneClocks";

export const metadata: Metadata = {
  title: "Contact DHURTA — Start Your Global Transformation",
  description:
    "Get in touch with DHURTA. Tell us about your project and our global team will respond within 4 business hours, in your time zone.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Something Clever"
        description="Tell us about your project. Our global team responds fast — in your language, in your time zone."
      />
      <ContactHero />
      <TimeZoneClocks />
    </>
  );
}
