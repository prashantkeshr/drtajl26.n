"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  PenTool,
  Server,
  Cog,
  type LucideIcon,
} from "lucide-react";
import { futureSectors } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  brain: Brain,
  "pen-tool": PenTool,
  server: Server,
  cog: Cog,
};

export default function FutureSectors() {
  return (
    <section className="relative bg-black py-28">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Vision & Roadmap"
          title="Where the Group Is Headed"
          description="These sectors are ambitions, not yet divisions — we name them honestly as the roadmap we are building toward, in the order trust is earned."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {futureSectors.map((sector, i) => {
            const Icon = icons[sector.icon];
            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group relative rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-7 transition-colors hover:border-gold/40"
              >
                <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-light">
                  Vision
                </span>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-light transition-colors group-hover:text-gold">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {sector.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-light">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-gray-light/70">
          We announce sectors when they ship, not before — today, the shipping
          products above are the group.
        </p>
      </div>
    </section>
  );
}
