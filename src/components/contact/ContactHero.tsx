"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Building2 } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

const channels = [
  { icon: Mail, title: "contact@dhurta.org", desc: "For new business and general inquiries" },
  { icon: MessageSquare, title: "Response in 4 business hours", desc: "In your local time zone, guaranteed" },
  { icon: Building2, title: "Remote-first, global by design", desc: "Regional hubs across 42+ countries" },
];

const floatingWords = [
  { text: "धूर्त", top: "8%", left: "4%", delay: 0 },
  { text: "达尔塔", top: "20%", left: "88%", delay: 0.5 },
  { text: "دهورتا", top: "70%", left: "6%", delay: 1 },
  { text: "다르타", top: "82%", left: "90%", delay: 1.5 },
  { text: "ダルタ", top: "45%", left: "94%", delay: 0.8 },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      {floatingWords.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.12, 0.12, 0], y: [0, -20, -20, -40] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: w.delay,
            ease: "easeInOut",
          }}
          style={{ top: w.top, left: w.left }}
          className="pointer-events-none absolute hidden select-none font-display text-4xl font-bold text-gold lg:block"
        >
          {w.text}
        </motion.span>
      ))}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {channels.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{c.title}</p>
                    <p className="text-sm text-gray-light">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 font-devanagari text-lg text-gold/70"
            >
              धूर्तः — clever, global, trusted.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <ContactForm full />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
