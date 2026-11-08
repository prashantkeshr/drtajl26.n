"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.14),transparent_65%)]" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-blue/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-noise" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-black leading-[1.05] sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient-gold">{title}</span>
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-light"
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
