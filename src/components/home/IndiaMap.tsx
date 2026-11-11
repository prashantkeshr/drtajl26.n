"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";

/*
 * India outline — 500 × 540 viewBox, clockwise from NW corner (Ladakh/J&K).
 * Key landmarks traced: Kashmir peak, Himalayan border, NE appendage
 * (Arunachal→Mizoram), Bay of Bengal coast, Kanyakumari tip, Kerala/Karnataka
 * coast, Maharashtra Konkan, Saurashtra peninsula, Kutch peninsula, Rajasthan.
 */
const INDIA_PATH =
  /* NW J&K → Kashmir peak (Bezier) → east along Himalayan border */
  "M 112,22 C 128,6 152,2 178,8 L 205,16 L 232,22 " +
  /* Nepal border (gently undulating) */
  "L 260,20 L 288,18 L 315,20 L 338,22 " +
  /* Bhutan → Arunachal Pradesh far NE */
  "L 355,28 L 378,32 L 405,38 L 432,52 L 440,70 " +
  /* NE going south-west (Nagaland → Manipur → Mizoram) */
  "L 433,95 L 420,118 L 406,138 L 388,155 " +
  /* Bangladesh border → West Bengal delta */
  "L 366,170 L 346,185 L 336,205 " +
  /* East coast: Odisha → Andhra Pradesh */
  "L 338,230 L 346,258 L 346,282 L 332,315 L 315,350 " +
  /* Tamil Nadu east coast → Kanyakumari (southernmost tip) */
  "L 295,382 L 272,415 L 252,450 L 238,476 L 225,492 " +
  /* Kerala coast going north */
  "L 210,478 L 196,455 L 180,428 L 165,398 " +
  /* Karnataka coast → Goa → Maharashtra Konkan */
  "L 155,368 L 145,340 L 136,312 L 126,282 " +
  /* South Gujarat coast */
  "L 112,258 L 100,238 L 94,224 " +
  /* Saurashtra peninsula (westward Bezier loop) */
  "C 72,220 50,210 46,200 C 46,188 55,178 65,174 " +
  /* Gulf of Kutch mouth → Kutch peninsula */
  "L 72,168 L 65,158 L 50,162 L 48,150 L 60,142 L 75,135 " +
  /* Rajasthan → Punjab → J&K west border closes back to start */
  "L 88,118 L 92,95 L 100,70 L 108,48 C 108,34 110,28 112,22 Z";

/* ─── Data centres (accurate lat-lon mapped to viewBox) ─────────── */
const CITIES = [
  { name: "Delhi",      x: 228, y: 108 },
  { name: "Mumbai",     x: 142, y: 285 },
  { name: "Bengaluru",  x: 205, y: 388 },
  { name: "Chennai",    x: 302, y: 358 },
  { name: "Kolkata",    x: 332, y: 200 },
  { name: "Hyderabad",  x: 228, y: 320 },
];

/* ─── Route pairs ────────────────────────────────────────────────── */
const ROUTES: [number, number][] = [
  [0, 1], [0, 4], [0, 5], [1, 2], [1, 5], [2, 3], [3, 5], [4, 5],
];

/* ─── Compliance badges ──────────────────────────────────────────── */
const BADGES = [
  "DPDP Act 2023", "MeitY Aligned", "CERT-In Compliant", "ISO 27001",
  "Make in India", "Startup India", "IT Act 2000", "Zero Cross-Border",
];

/* ─── Stats ──────────────────────────────────────────────────────── */
const STATS = [
  { value: "6",      label: "Metro data centres" },
  { value: "100%",   label: "Indian infrastructure" },
  { value: "<200ms", label: "Pan-India latency" },
  { value: "0",      label: "Cross-border transfers" },
];

/* Text-anchor per city — left-side cities get "end" */
const LABEL_SIDE: Record<string, "end" | "start"> = {
  Mumbai: "end",
  Bengaluru: "end",
};

export default function IndiaMap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section ref={ref} className="relative bg-black py-20 overflow-hidden">
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

          {/* ── India SVG map ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-sm flex-shrink-0 lg:max-w-xs xl:max-w-sm"
          >
            <div className="absolute inset-0 rounded-full bg-saffron/5 blur-3xl" />

            <svg
              viewBox="0 0 500 540"
              className="relative w-full drop-shadow-[0_0_40px_rgba(255,153,51,0.18)]"
              aria-label="India data centre map"
            >
              <defs>
                {/* Border glow */}
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
                {/* Tricolor border gradient */}
                <linearGradient id="border-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"   stopColor="#FF9933" />
                  <stop offset="50%"  stopColor="#C9A84C" />
                  <stop offset="100%" stopColor="#00D4AA" />
                </linearGradient>
                {/* Land fill gradient */}
                <radialGradient id="land-fill" cx="50%" cy="45%" r="55%">
                  <stop offset="0%"   stopColor="#FF9933" stopOpacity="0.09" />
                  <stop offset="70%"  stopColor="#FF9933" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
                </radialGradient>
                {/* Dot-grid texture clipped to India shape */}
                <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="0.75" fill="rgba(255,153,51,0.15)" />
                </pattern>
                <clipPath id="india-clip">
                  <path d={INDIA_PATH} />
                </clipPath>
                {/* Hidden route paths for animateMotion */}
                {ROUTES.map(([ai, bi], i) => (
                  <path
                    key={i}
                    id={`route-${i}`}
                    d={`M ${CITIES[ai].x},${CITIES[ai].y} L ${CITIES[bi].x},${CITIES[bi].y}`}
                  />
                ))}
              </defs>

              {/* Land fill */}
              <path d={INDIA_PATH} fill="url(#land-fill)" stroke="none" />

              {/* Dot-grid texture inside India */}
              <rect
                width="500" height="540"
                fill="url(#dot-grid)"
                clipPath="url(#india-clip)"
              />

              {/* Animated border draw */}
              <path
                d={INDIA_PATH}
                fill="none"
                stroke="url(#border-grad)"
                strokeWidth="2"
                filter="url(#glow)"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 3000,
                  strokeDashoffset: isInView ? 0 : 3000,
                  transition: "stroke-dashoffset 3.5s ease 0.4s",
                }}
              />

              {/* Radar rings emanating from Delhi */}
              {[70, 130, 190].map((r, i) => (
                <circle
                  key={i}
                  cx={228} cy={108} r={r}
                  fill="none"
                  stroke="#FF9933"
                  strokeWidth="0.5"
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
                    values="0.2;0;0.2"
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
                  x1={CITIES[ai].x} y1={CITIES[ai].y}
                  x2={CITIES[bi].x} y2={CITIES[bi].y}
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
              {isInView && ROUTES.map(([, ], i) => (
                <circle key={i} r="2.2" fill="#FF9933" fillOpacity="0.9" filter="url(#city-glow)">
                  <animateMotion
                    dur={`${2.4 + i * 0.3}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.4}s`}
                  >
                    <mpath href={`#route-${i}`} />
                  </animateMotion>
                </circle>
              ))}

              {/* City nodes */}
              {CITIES.map((city, i) => {
                const side = LABEL_SIDE[city.name] ?? "start";
                return (
                  <g
                    key={i}
                    style={{
                      opacity: isInView ? 1 : 0,
                      transition: `opacity 0.5s ease ${1.8 + i * 0.15}s`,
                    }}
                  >
                    {/* Ping ring */}
                    <circle
                      cx={city.x} cy={city.y} r="10"
                      fill="none" stroke="#FF9933" strokeWidth="0.8" strokeOpacity="0"
                    >
                      <animate attributeName="r" values="4;18;18" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                      <animate attributeName="stroke-opacity" values="0.6;0;0" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                    </circle>
                    {/* Core dot */}
                    <circle cx={city.x} cy={city.y} r="3.5" fill="#FF9933" filter="url(#city-glow)" />
                    <circle cx={city.x} cy={city.y} r="2" fill="#FFE4B5" />
                    {/* Label */}
                    <text
                      x={city.x + (side === "end" ? -6 : 6)}
                      y={city.y - 7}
                      fontSize="8.5"
                      fontFamily="system-ui, sans-serif"
                      fontWeight="600"
                      fill="#FF9933"
                      fillOpacity="0.75"
                      textAnchor={side}
                      letterSpacing="0.5"
                    >
                      {city.name}
                    </text>
                  </g>
                );
              })}

              {/* Andaman & Nicobar Islands (Bay of Bengal) */}
              {([[448, 362], [453, 378], [456, 395]] as [number, number][]).map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx} cy={cy} r="4.5"
                  fill="none" stroke="#FF9933" strokeWidth="1" strokeOpacity="0.4"
                  style={{ opacity: isInView ? 1 : 0, transition: "opacity 0.5s ease 2.5s" }}
                />
              ))}

              {/* Lakshadweep Islands (Arabian Sea) */}
              {([[82, 408], [76, 422], [72, 435]] as [number, number][]).map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx} cy={cy} r="3"
                  fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.35"
                  style={{ opacity: isInView ? 1 : 0, transition: "opacity 0.5s ease 2.5s" }}
                />
              ))}

              {/* Sri Lanka (small island below Kanyakumari) */}
              <ellipse
                cx={238} cy={512} rx="12" ry="16"
                fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.3"
                style={{ opacity: isInView ? 1 : 0, transition: "opacity 0.5s ease 2.5s" }}
              />
            </svg>
          </motion.div>

          {/* ── Right column: stats + compliance ── */}
          <div className="flex flex-1 flex-col gap-8">
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
