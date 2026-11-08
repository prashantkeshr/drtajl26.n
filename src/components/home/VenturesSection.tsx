"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  MessageCircle,
  Library,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { ventures, groupPillars } from "@/lib/data";
import TiltCard from "@/components/ui/TiltCard";
import SectionHeading from "@/components/ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  compass: Compass,
  "message-circle": MessageCircle,
  library: Library,
};

const colorMap: Record<string, string> = {
  gold: "from-gold/20 text-gold",
  teal: "from-teal/20 text-teal",
  blue: "from-blue/20 text-blue",
};

export default function VenturesSection() {
  return (
    <section className="relative bg-black py-28">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Dhurta Group"
          title="One Name. Real, Shipping Products."
          description="Built on three pillars — Trust, Technology, and Culture — the group ships privacy-first software you can verify, not just believe."
          className="mb-10"
        />

        <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
          {groupPillars.map((pillar) => (
            <span
              key={pillar.name}
              className="inline-flex items-baseline gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-sm font-semibold text-white"
            >
              {pillar.name}
              <span className="font-devanagari text-xs text-gold/60">
                {pillar.sanskrit}
              </span>
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ventures.map((venture, i) => {
            const Icon = icons[venture.icon];
            return (
              <motion.div
                key={venture.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard className="glass-card flex h-full flex-col p-8">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[venture.color]} border border-white/10`}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-teal">
                      {venture.status}
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline gap-2.5">
                    <h3 className="font-display text-xl font-bold text-white">
                      {venture.name}
                    </h3>
                    <span className="font-devanagari text-sm text-gold/60">
                      {venture.devanagari}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-light">
                    {venture.tagline}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    {venture.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-gold"
                      >
                        {link.label}
                        <ArrowUpRight size={15} />
                      </a>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/ventures"
            className="group inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition-all hover:bg-gold/10 hover:shadow-[0_0_24px_2px_rgba(201,168,76,0.25)]"
          >
            Explore the Group &amp; Roadmap
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
