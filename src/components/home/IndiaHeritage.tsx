"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    hindi: "गणित",
    english: "Mathematics",
    description:
      "India gave the world zero, the decimal system, and Aryabhata's astronomical calculations — the bedrock of all modern computation.",
  },
  {
    hindi: "नवाचार",
    english: "Innovation",
    description:
      "From IIT excellence to ISRO's frugal space missions and UPI's billion daily transactions — India innovates at scale.",
  },
  {
    hindi: "समुदाय",
    english: "Community",
    description:
      "Open-source tradition, collaborative engineering, and a global developer diaspora building technology for everyone.",
  },
];

const inView = { opacity: 0, y: 40 };
const inViewVisible = { opacity: 1, y: 0 };
const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

export default function IndiaHeritage() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={inView}
          whileInView={inViewVisible}
          viewport={{ once: true, margin: "-80px" }}
          transition={transition}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-saffron">
            Our Foundation
          </span>
          <h2 className="font-display text-4xl font-black text-white sm:text-5xl">
            Built on{" "}
            <span className="font-devanagari text-saffron">भारत</span>
            &apos;s Foundation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.hindi}
              initial={inView}
              whileInView={inViewVisible}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...transition, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-8"
            >
              <p className="font-devanagari text-5xl font-bold leading-[1.3] text-saffron">
                {pillar.hindi}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-gold/70">
                {pillar.english}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-light">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
