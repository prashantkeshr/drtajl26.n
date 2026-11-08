"use client";

import { motion } from "framer-motion";
import {
  Compass,
  MessageCircle,
  Library,
  ArrowUpRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { ventures } from "@/lib/data";
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

export default function VenturesShowcase() {
  return (
    <section className="relative bg-navy py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Shipping Today"
          title="Products You Can Use Right Now"
          description="Not concepts, not coming-soon pages — software the group has already built, shipped, and open-sourced."
          className="mb-16"
        />

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
                      className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[venture.color]} border border-white/10`}
                    >
                      <Icon size={26} />
                    </div>
                    <span className="rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-teal">
                      {venture.status}
                    </span>
                  </div>

                  <div className="mt-6 flex items-baseline gap-2.5">
                    <h3 className="font-display text-xl font-bold text-white">
                      {venture.name}
                    </h3>
                    <span className="font-devanagari text-sm text-gold/60">
                      {venture.devanagari}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gold/80">
                    {venture.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-light">
                    {venture.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {venture.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-gray-light"
                      >
                        <Check size={14} className="shrink-0 text-teal" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
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
      </div>
    </section>
  );
}
