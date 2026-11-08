"use client";

import { motion } from "framer-motion";
import { Mail, Clock, Globe2 } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  { icon: Mail, title: "contact@dhurta.org", desc: "General & new business" },
  { icon: Clock, title: "Reply within 4 hours", desc: "In your local time zone" },
  { icon: Globe2, title: "42+ countries served", desc: "Remote-first, global by design" },
];

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28" id="contact">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-blue/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Ready for the Clever Choice?"
          description="Tell us about your project — our global team responds fast, in your language, in your time zone."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <p.icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{p.title}</p>
                    <p className="text-sm text-gray-light">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
