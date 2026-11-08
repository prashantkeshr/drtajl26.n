"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To deliver clever digital transformation to every market we touch — solutions that outsmart complexity instead of hiding from it, engineered with the same rigor whether we're serving a startup in Lagos or an enterprise in Tokyo.",
    color: "gold",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "A world where cleverness is a universal language — where the smartest solution wins regardless of geography, and where cultural fluency is treated as an engineering discipline, not an afterthought.",
    color: "teal",
  },
];

export default function MissionVision() {
  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <TiltCard className="glass-card h-full p-10">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 ${
                    card.color === "gold" ? "bg-gold/10 text-gold" : "bg-teal/10 text-teal"
                  }`}
                >
                  <card.icon size={26} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-light">{card.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
