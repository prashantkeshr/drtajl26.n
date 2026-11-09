"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";

/* ─── India SVG path (clockwise, 460 × 520 viewBox) ─────────────── */
const INDIA_PATH =
  "M 165,48 C 185,32 200,15 202,12 L 220,28 L 235,52 L 220,78 L 185,98 " +
  "L 258,98 L 320,90 L 395,72 L 428,95 L 420,128 L 395,158 L 372,172 " +
  "L 355,162 L 348,195 L 328,228 L 310,268 L 288,312 L 268,355 L 248,392 " +
  "L 228,445 C 212,468 198,460 185,452 L 172,432 L 158,398 L 145,358 " +
  "L 135,318 L 122,278 L 112,242 L 102,210 L 90,188 " +
  "C 80,182 72,196 68,218 L 58,208 L 48,195 L 42,178 L 55,158 L 70,138 " +
  "L 86,118 L 98,95 L 120,70 L 140,55 L 165,48 Z";

/* ─── Data centres ───────────────────────────────────────────────── */
const CITIES = [
  { name: "Delhi",     x: 175, y: 118 },
  { name: "Mumbai",    x: 108, y: 242 },
  { name: "Bangalore", x: 198, y: 390 },
  { name: "Chennai",   x: 255, y: 365 },
  { name: "Kolkata",   x: 340, y: 192 },
  { name: "Hyderabad", x: 225, y: 328 },
];

/* ─── Route pairs (index into CITIES) ───────────────────────────── */
const ROUTES: [number, number][] = [
  [0, 1], [0, 4], [0, 5], [1, 2], [1, 5], [2, 3], [3, 5], [4, 5],
];

/* ─── Compliance badges ──────────────────────────────────────────── */
const BADGES = [
  "DPDP Act 2023",
  "MeitY Aligned",
  "CERT-In Compliant",
  "ISO 27001",
  "Make in India",
  "Startup India",
  "IT Act 2000",
  "Zero Cross-Border",
];

/* ─── Stats ──────────────────────────────────────────────────────── */
const STATS = [
  { value: "6", label: "Metro data centres" },
  { value: "100%", label: "Indian infrastructure" },
  { value: "<200ms", label: "Pan-India latency" },
  { value: "0", label: "Cross-border transfers" },
];

export default function IndiaMap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section ref={ref} className="relative bg-black py-20 overflow-hidden">
      {/* Ambient bg glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,153,51,0.04),transparent)]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-saffron">
            🇮🇳 Data Sovereignty
          </span>
          <h2 className="mt-4 font-display text-4xl font-black text-white sm:text-5xl">
            Your Data Never Leaves
            <span className="block text-gradient-gold">India&apos;s Borders.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-light">
            Six metro data centres across the country. Zero international data transfers.
            Privacy-by-design, grounded in Indian law.
          </p>
        </motion.div>

        {/* Map + stats row */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
          {/* India SVG map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-sm flex-shrink-0 lg:max-w-xs xl:max-w-sm"
          >
            {/* Glow halo behind map */}
            <div className="absolute inset-0 rounded-full bg-saffron/5 blur-3xl" />

            <svg
              viewBox="0 0 460 520"
              className="relative w-full drop-shadow-[0_0_40px_rgba(255,153,51,0.18)]"
              aria-label="India data centre map"
            >
              <defs>
                {/* Border glow filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                {/* City node glow */}
                <filter id="city-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                {/* Tricolor gradient for border */}
                <linearGradient id="border-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF9933" />
                  <stop offset="50%" stopColor="#C9A84C" />
                  <stop offset="100%" stopColor="#00D4AA" />
                </linearGradient>
                {/* Radar ring gradient */}
                <radialGradient id="radar-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF9933" stopOpacity="0" />
                  <stop offset="80%" stopColor="#FF9933" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Subtle land fill */}
              <path
                d={INDIA_PATH}
                fill="url(#radar-grad)"
                fillOpacity="0.4"
                stroke="none"
              />

              {/* Main India border — animated draw */}
              <path
                d={INDIA_PATH}
                fill="none"
                stroke="url(#border-grad)"
                strokeWidth="1.8"
                filter="url(#glow)"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 2000,
                  strokeDashoffset: isInView ? 0 : 2000,
                  transition: "stroke-dashoffset 3s ease 0.4s",
                }}
              />

              {/* Radar rings emanating from Delhi */}
              {[60, 115, 170].map((r, i) => (
                <circle
                  key={i}
                  cx={175}
                  cy={118}
                  r={r}
                  fill="none"
                  stroke="#FF9933"
                  strokeWidth="0.5"
                  strokeOpacity={isInView ? 0 : 0}
                  style={{
                    opacity: isInView ? 1 : 0,
                    transition: `opacity 0.5s ease ${1.5 + i * 0.3}s`,
                  }}
                >
                  <animate
                    attributeName="r"
                    values={`${r};${r + 25};${r}`}
                    dur={`${3.5 + i * 0.8}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.9}s`}
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values="0.25;0;0.25"
                    dur={`${3.5 + i * 0.8}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.9}s`}
                  />
                </circle>
              ))}

              {/* Route lines */}
              {ROUTES.map(([ai, bi], i) => (
                <line
                  key={i}
                  x1={CITIES[ai].x}
                  y1={CITIES[ai].y}
                  x2={CITIES[bi].x}
                  y2={CITIES[bi].y}
                  stroke="#FF9933"
                  strokeWidth="0.6"
                  strokeOpacity="0.18"
                  strokeDasharray="4 6"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transition: `opacity 0.4s ease ${2 + i * 0.1}s`,
                  }}
                />
              ))}

              {/* Moving data particles */}
              {isInView &&
                ROUTES.map(([ai, bi], i) => (
                  <circle key={i} r="2.2" fill="#FF9933" fillOpacity="0.9" filter="url(#city-glow)">
                    <animateMotion
                      dur={`${2.4 + i * 0.3}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.4}s`}
                    >
                      <mpath
                        href={`#route-${i}`}
                      />
                    </animateMotion>
                  </circle>
                ))}

              {/* Hidden route paths for animateMotion */}
              <defs>
                {ROUTES.map(([ai, bi], i) => (
                  <path
                    key={i}
                    id={`route-${i}`}
                    d={`M ${CITIES[ai].x},${CITIES[ai].y} L ${CITIES[bi].x},${CITIES[bi].y}`}
                  />
                ))}
              </defs>

              {/* City nodes */}
              {CITIES.map((city, i) => (
                <g
                  key={i}
                  style={{
                    opacity: isInView ? 1 : 0,
                    transition: `opacity 0.5s ease ${1.8 + i * 0.15}s`,
                  }}
                >
                  {/* Ping ring */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="10"
                    fill="none"
                    stroke="#FF9933"
                    strokeWidth="0.8"
                    strokeOpacity="0"
                  >
                    <animate
                      attributeName="r"
                      values="4;18;18"
                      dur="2.5s"
                      repeatCount="indefinite"
                      begin={`${i * 0.4}s`}
                    />
                    <animate
                      attributeName="stroke-opacity"
                      values="0.6;0;0"
                      dur="2.5s"
                      repeatCount="indefinite"
                      begin={`${i * 0.4}s`}
                    />
                  </circle>

                  {/* Core dot */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="3.5"
                    fill="#FF9933"
                    filter="url(#city-glow)"
                  />
                  <circle cx={city.x} cy={city.y} r="2" fill="#FFE4B5" />

                  {/* City label */}
                  <text
                    x={city.name === "Mumbai" || city.name === "Bangalore" ? city.x - 6 : city.x + 6}
                    y={city.y - 7}
                    fontSize="8.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    fill="#FF9933"
                    fillOpacity="0.75"
                    textAnchor={city.name === "Mumbai" || city.name === "Bangalore" ? "end" : "start"}
                    letterSpacing="0.5"
                  >
                    {city.name}
                  </text>
                </g>
              ))}

              {/* Andaman Islands (small cluster) */}
              {[0, 1, 2].map((i) => (
                <circle
                  key={i}
                  cx={390 + i * 5}
                  cy={390 + i * 12}
                  r="4"
                  fill="none"
                  stroke="#FF9933"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transition: `opacity 0.5s ease 2.5s`,
                  }}
                />
              ))}
            </svg>
          </motion.div>

          {/* Right column: stats + compliance */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="rounded-xl border border-saffron/15 bg-saffron/5 p-5"
                >
                  <div className="font-display text-3xl font-black text-saffron">{s.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-light">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Compliance badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-saffron/60">
                Certifications &amp; Compliance
              </p>
              <div className="flex flex-wrap gap-2">
                {BADGES.map((badge, i) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.07 }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-saffron/25 bg-saffron/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-saffron/80"
                  >
                    <ShieldCheck size={9} className="text-saffron" />
                    {badge}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-xs text-gray-light/60"
            >
              All data processed and stored exclusively within Indian territory under the
              Digital Personal Data Protection Act, 2023.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
