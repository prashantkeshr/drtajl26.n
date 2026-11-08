"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const scripts = [
  { text: "धूर्तः", lang: "Sanskrit", font: "font-devanagari" },
  { text: "धूर्त", lang: "Hindi", font: "font-devanagari" },
  { text: "ধূর্ত", lang: "Bengali", font: "font-bengali" },
  { text: "தூர்த்தா", lang: "Tamil", font: "font-tamil" },
  { text: "دهورتا", lang: "Arabic", font: "font-arabic" },
  { text: "达尔塔", lang: "Chinese", font: "font-sc" },
  { text: "ダルタ", lang: "Japanese", font: "font-jp" },
  { text: "다르타", lang: "Korean", font: "font-kr" },
  { text: "ฑูรตะ", lang: "Thai", font: "font-thai" },
  { text: "Dhurta", lang: "French", font: "font-sans" },
  { text: "Dhurta", lang: "Spanish", font: "font-sans" },
  { text: "Dhurta", lang: "Swahili", font: "font-sans" },
];

export default function CulturalShowcase() {
  return (
    <section className="relative overflow-hidden bg-navy py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="One Word, Every Culture"
          title="Cultural Adaptation, Not Just Translation"
          description="‘Clever’ means something in every language. We designed our identity to honor that."
          className="mb-16"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {scripts.map((s, i) => (
            <motion.div
              key={s.lang}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card flex flex-col items-center justify-center gap-2 rounded-2xl px-4 py-8 text-center"
            >
              <span className={`${s.font} text-3xl font-bold text-gradient-gold`}>{s.text}</span>
              <span className="text-xs uppercase tracking-widest text-gray-light">{s.lang}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
