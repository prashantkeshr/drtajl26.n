"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Globe2, type LucideIcon } from "lucide-react";
import { groupPillars } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  shield: Shield,
  cpu: Cpu,
  globe: Globe2,
};

const colorMap: Record<string, string> = {
  gold: "from-gold/20 text-gold",
  teal: "from-teal/20 text-teal",
  blue: "from-blue/20 text-blue",
};

export default function PillarsStrip() {
  return (
    <section className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {groupPillars.map((pillar, i) => {
            const Icon = icons[pillar.icon];
            return (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card rounded-2xl p-8"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[pillar.color]} border border-white/10`}
                >
                  <Icon size={22} />
                </div>
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {pillar.name}
                  </h3>
                  <span className="font-devanagari text-sm text-gold/60">
                    {pillar.sanskrit}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-light">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
