import Hero from "@/components/home/Hero";
import IndiaHeritage from "@/components/home/IndiaHeritage";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsSection from "@/components/home/StatsSection";
import VenturesSection from "@/components/home/VenturesSection";
import GlobalPresence from "@/components/home/GlobalPresence";
import Testimonials from "@/components/home/Testimonials";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      {/* navy */}
      <Hero />
      {/* black */}
      <IndiaHeritage />
      {/* navy */}
      <div className="bg-gradient-to-b from-black to-navy">
        <ServicesGrid />
      </div>
      {/* saffron/5 warmth */}
      <div className="bg-[rgba(255,153,51,0.05)]">
        <StatsSection />
      </div>
      {/* black */}
      <div className="bg-gradient-to-b from-[rgba(255,153,51,0.05)] to-black">
        <VenturesSection />
      </div>
      <GlobalPresence />
      <Testimonials />
      <ProcessTimeline />
      {/* navy */}
      <ContactSection />
    </>
  );
}
