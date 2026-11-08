"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import TiltCard from "@/components/ui/TiltCard";

const regions = ["All Regions", ...Array.from(new Set(caseStudies.map((c) => c.region)))];
const industries = ["All Industries", ...Array.from(new Set(caseStudies.map((c) => c.industry)))];

export default function PortfolioGrid() {
  const [region, setRegion] = useState("All Regions");
  const [industry, setIndustry] = useState("All Industries");

  const filtered = useMemo(
    () =>
      caseStudies.filter(
        (c) =>
          (region === "All Regions" || c.region === region) &&
          (industry === "All Industries" || c.industry === industry)
      ),
    [region, industry]
  );

  return (
    <section className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                  region === r
                    ? "border-gold/50 bg-gold/10 text-gold"
                    : "border-white/10 text-gray-light hover:text-white"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setIndustry(ind)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                  industry === ind
                    ? "border-teal/50 bg-teal/10 text-teal"
                    : "border-white/10 text-gray-light hover:text-white"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <TiltCard className="glass-card h-full p-8">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
                      {project.industry}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-light">
                      {project.region}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-light">{project.client}</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-light">{project.summary}</p>

                  <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-6">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-lg font-bold text-gradient-gold">{m.value}</p>
                        <p className="text-[10px] uppercase tracking-wide text-gray-light">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-gold">
                    View case study
                    <ArrowUpRight size={15} />
                  </button>
                </TiltCard>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
