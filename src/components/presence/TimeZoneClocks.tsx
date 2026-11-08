"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { regionTimeZones } from "@/lib/data";

function formatTime(offset: number, now: Date) {
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const local = new Date(utc + offset * 3600000);
  return local.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function TimeZoneClocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncs client clock post-hydration; server has no real time to render
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Always On"
          title="A Team Working Across Every Time Zone"
          description="Global delivery means someone's always awake — here's what it looks like right now."
          className="mb-16"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {regionTimeZones.map((tz, i) => (
            <motion.div
              key={tz.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card flex flex-col items-center gap-2 rounded-2xl px-3 py-6 text-center"
            >
              <Clock size={16} className="text-gold" />
              <span className="font-display text-lg font-bold text-white tabular-nums">
                {now ? formatTime(tz.offset, now) : "--:--"}
              </span>
              <span className="text-xs text-gray-light">{tz.city}</span>
              <span className="text-[10px] text-gray-light/60">
                UTC{tz.offset >= 0 ? "+" : ""}
                {tz.offset}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
