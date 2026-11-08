"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Sparkles,
  Cloud,
  Cpu,
  TrendingUp,
  Check,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import TiltCard from "@/components/ui/TiltCard";
import ContactForm from "@/components/forms/ContactForm";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  brain: Brain,
  sparkles: Sparkles,
  cloud: Cloud,
  cpu: Cpu,
  "trending-up": TrendingUp,
};

const colorMap: Record<string, string> = {
  gold: "from-gold/20 text-gold",
  teal: "from-teal/20 text-teal",
  blue: "from-blue/20 text-blue",
};

const deliverables: Record<string, string[]> = {
  "web-app-development": ["Web platforms", "iOS & Android apps", "Progressive web apps", "API architecture"],
  "digital-strategy": ["Market intelligence", "Positioning strategy", "Roadmapping", "Competitive analysis"],
  "brand-experience": ["Identity systems", "UX research", "Design systems", "Cultural localization"],
  "cloud-engineering": ["Multi-region architecture", "CI/CD automation", "Observability", "Cost optimization"],
  "ai-automation": ["Workflow automation", "Predictive models", "LLM integration", "Data pipelines"],
  "growth-marketing": ["Performance campaigns", "SEO & content", "Localized funnels", "Analytics & attribution"],
};

export default function ServicesCatalog() {
  const [active, setActive] = useState(services[0].slug);
  const current = services.find((s) => s.slug === active)!;
  const Icon = icons[current.icon];

  return (
    <section className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] p-2">
          {services.map((service) => (
            <button
              key={service.slug}
              onClick={() => setActive(service.slug)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === service.slug
                  ? "bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black"
                  : "text-gray-light hover:text-white"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5"
        >
            <div className="lg:col-span-3">
              <TiltCard className="glass-card h-full p-10">
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${colorMap[current.color]} border border-white/10`}
                >
                  <Icon size={30} />
                </div>
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {current.title}
                </h2>
                <p className="mt-2 text-gold/80">{current.shortDesc}</p>
                <p className="mt-5 leading-relaxed text-gray-light">{current.description}</p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {deliverables[current.slug]?.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-gray-light">
                      <Check size={15} className="shrink-0 text-teal" />
                      {d}
                    </div>
                  ))}
                </div>
              </TiltCard>
            </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
