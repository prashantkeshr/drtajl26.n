"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Milestone } from "@/lib/data";

export default function BrandTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <section className="relative bg-navy py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Evolution"
          title="From a Reclaimed Word to a Global Brand"
          className="mb-16"
        />

        <div className="relative border-l border-gold/20 pl-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold bg-navy" />
              <span className="font-display text-sm font-bold uppercase tracking-widest text-gold">
                {m.year}
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-white">{m.title}</h3>
              <p className="mt-2 max-w-xl text-gray-light">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
