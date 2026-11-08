"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { industries, caseStudies } from "@/lib/data";
import TiltCard from "@/components/ui/TiltCard";
import Button from "@/components/ui/Button";

export default function IndustryTabs() {
  const [active, setActive] = useState(industries[0].slug);
  const current = industries.find((i) => i.slug === active)!;
  const relatedCase = caseStudies.find((c) => c.industry === current.name);

  return (
    <section className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <button
              key={industry.slug}
              onClick={() => setActive(industry.slug)}
              className={`rounded-xl border px-4 py-4 text-sm font-medium transition-all ${
                active === industry.slug
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-white/10 text-gray-light hover:border-white/25 hover:text-white"
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5"
        >
            <TiltCard className="glass-card p-10 lg:col-span-3">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                {current.name}
              </h2>
              <p className="mt-4 leading-relaxed text-gray-light">{current.description}</p>
              <div className="mt-8 space-y-3">
                {current.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-gray-light">
                    <Check size={15} className="shrink-0 text-teal" />
                    {h}
                  </div>
                ))}
              </div>
              <Button href="/contact" className="mt-8" icon={<ArrowRight size={15} />}>
                Discuss Your Project
              </Button>
            </TiltCard>

            {relatedCase && (
              <div className="glass-card flex flex-col justify-between rounded-2xl p-8 lg:col-span-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Related Case Study
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">
                    {relatedCase.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-light">{relatedCase.summary}</p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-6">
                  {relatedCase.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-lg font-bold text-gradient-gold">{m.value}</p>
                      <p className="text-[10px] uppercase tracking-wide text-gray-light">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </motion.div>
      </div>
    </section>
  );
}
