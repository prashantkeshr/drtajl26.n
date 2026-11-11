"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  MapPin,
  Globe,
  MessageCircle,
  BookOpen,
} from "lucide-react";
import Button from "@/components/ui/Button";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

const letters = "DHURTA".split("");

const products = [
  {
    name: "Dhurta Browser",
    icon: Globe,
    href: "https://dhurta.com",
    colorClass:
      "border-saffron/25 bg-saffron/8 text-saffron hover:border-saffron/50 hover:bg-saffron/12",
  },
  {
    name: "Dhurta Connect",
    icon: MessageCircle,
    href: "https://dhurta.com",
    colorClass:
      "border-teal/25 bg-teal/8 text-teal hover:border-teal/50 hover:bg-teal/12",
  },
  {
    name: "Dhurta Setu",
    icon: BookOpen,
    href: "https://dhurta.com",
    colorClass:
      "border-blue/25 bg-blue/8 text-blue hover:border-blue/50 hover:bg-blue/12",
  },
];

const proofStats = [
  { value: "₹500Cr+",  label: "Client Value Delivered" },
  { value: "180+",     label: "Indian Clients" },
  { value: "100%",     label: "DPDP Compliant" },
  { value: "8 Cities", label: "One Vision" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy">
      {/* 3D scene — full canvas; orb shifted right inside the scene */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <HeroScene />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_55%_60%_at_70%_42%,rgba(201,168,76,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-navy/95 via-navy/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-navy/40 via-transparent to-navy" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-noise" />

      {/* Two-column split layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-screen grid-cols-1 items-center lg:grid-cols-2">

          {/* ── Left column: text content ── */}
          <div className="flex flex-col items-center pt-24 pb-32 text-center lg:items-start lg:py-28 lg:pr-10 lg:text-left">

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
            <h1 className="perspective-container flex flex-col items-center gap-2 font-black tracking-tight lg:items-start">
              <span className="flex flex-wrap items-center justify-center gap-x-0.5 font-display text-7xl sm:text-8xl md:text-[6rem] lg:justify-start lg:text-[7rem]">
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 60, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.1 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      display: "inline-block",
                      transformStyle: "preserve-3d",
                      textShadow:
                        "0 1px 0 #A68B3A, 0 2px 0 #97792f, 0 3px 0 #866a29, 0 4px 8px rgba(0,0,0,0.5)",
                    }}
                    className="text-shimmer-gold"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-bold tracking-wide text-saffron/90 sm:text-3xl"
              >
                Smart. Secure. Sovereign.
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-5 max-w-md text-balance text-lg leading-relaxed text-gray-light sm:text-xl"
            >
              Zero telemetry. Zero servers. Zero compromise.
              <span className="mt-1 block text-base text-gray-light/70">
                Browser · Encrypted Chat · Curated Web — built for India&apos;s data sovereignty laws.
              </span>
            </motion.p>

            {/* Compliance stickers */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {[
                { icon: <ShieldCheck size={11} />, text: "DPDP 2023 Compliant" },
                { icon: <MapPin size={11} />,      text: "Data in India" },
                { icon: <Zap size={11} />,         text: "Zero Telemetry" },
                { icon: <Code2 size={11} />,       text: "Open Source" },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-saffron/30 bg-saffron/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-saffron/80"
                >
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
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            >
              <Button href="/contact" variant="saffron" icon={<ArrowRight size={16} />}>
                Start Now
              </Button>
              <Button href="/portfolio" variant="saffron-outline">
                See Our Work
              </Button>
            </motion.div>

            {/* Product showcase chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {products.map(({ name, icon: Icon, href, colorClass }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 ${colorClass}`}
                >
                  <Icon size={12} aria-hidden="true" />
                  {name}
                </a>
              ))}
            </motion.div>

          </div>

          {/* ── Right column: empty — Sovereign Orb fills this via canvas ── */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Floating trust card — desktop-xl only, right side */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-28 right-8 z-10 hidden xl:block"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card min-w-[172px] rounded-2xl px-5 py-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-saffron/30 bg-saffron/10">
              <ShieldCheck size={18} className="text-saffron" />
            </div>
            <div>
              <div className="font-display text-2xl font-black leading-none text-gradient-gold">
                500+
              </div>
              <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-light/60">
                Businesses
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-0.5">
            <span className="text-saffron" style={{ fontSize: "11px", letterSpacing: "2px" }}>
              ★★★★★
            </span>
            <span className="ml-2 text-[10px] text-gray-light/50">India&apos;s choice</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Stat proof bar — pinned to section bottom */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.7 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-white/[0.06]"
      >
        <div className="relative overflow-hidden bg-black/50 backdrop-blur-md">
          {/* Ambient glow blobs */}
          <div className="pointer-events-none absolute left-[18%] top-0 h-full w-48 bg-saffron/5 blur-3xl" />
          <div className="pointer-events-none absolute right-[22%] top-0 h-full w-48 bg-teal/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-4 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {proofStats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <span className="font-display text-lg font-black leading-none text-gradient-gold">
                    {value}
                  </span>
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-gray-light/50">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
