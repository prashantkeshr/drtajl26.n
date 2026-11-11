"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Zap, Code2, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

const letters = "DHURTA".split("");

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy">
      {/* 3D scene — desktop only */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <HeroScene />
      </div>

      {/* Warm ambient glow behind orb */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_55%_60%_at_60%_42%,rgba(201,168,76,0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-navy/50 via-transparent to-navy" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-noise" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-saffron"
        >
          Privacy-First · Made in India
        </motion.span>

        {/* Headline */}
        <h1 className="perspective-container flex flex-col items-center justify-center gap-2 font-black tracking-tight">
          {/* Line 1 — DHURTA animated letters */}
          <span className="flex flex-wrap items-center justify-center gap-x-1 font-display text-7xl sm:text-8xl md:text-9xl">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                  textShadow:
                    "0 1px 0 #A68B3A, 0 2px 0 #97792f, 0 3px 0 #866a29, 0 4px 8px rgba(0,0,0,0.5)",
                }}
                className="text-gradient-gold"
              >
                {letter}
              </motion.span>
            ))}
          </span>

          {/* Line 2 — Punchy tagline */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl font-bold tracking-wide text-saffron/90 sm:text-3xl"
          >
            Smart. Secure. Sovereign.
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-gray-light sm:text-xl"
        >
          Zero telemetry. Zero servers. Zero compromise.
          <span className="block mt-1 text-base text-gray-light/70">
            Browser · Encrypted Chat · Curated Web — all built for India&apos;s data sovereignty laws.
          </span>
        </motion.p>

        {/* Compliance stickers */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-2"
        >
          {[
            { icon: <ShieldCheck size={11} />, text: "DPDP 2023 Compliant" },
            { icon: <MapPin size={11} />, text: "Data in India" },
            { icon: <Zap size={11} />, text: "Zero Telemetry" },
            { icon: <Code2 size={11} />, text: "Open Source" },
          ].map(({ icon, text }) => (
            <span key={text} className="inline-flex items-center gap-1.5 rounded-full border border-saffron/30 bg-saffron/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-saffron/80">
              {icon} {text}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-saffron/30 bg-saffron/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-saffron/80">
            🇮🇳 Made in India
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="/contact" variant="saffron" icon={<ArrowRight size={16} />}>
            Start Now
          </Button>
          <Button href="/portfolio" variant="saffron-outline">
            See Our Work
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator — saffron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-saffron/60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
