"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const current = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-black py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Success Stories"
          title="Trusted Across Continents"
          className="mb-16"
        />

        <div className="perspective-container relative">
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, rotateY: direction * 35, x: direction * 60 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass-card mx-auto max-w-3xl rounded-3xl p-10 text-center sm:p-14"
          >
            <Quote className="mx-auto mb-6 text-gold/50" size={36} />
            <p className="font-display text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-8">
              <p className="font-semibold text-gold">{current.name}</p>
              <p className="text-sm text-gray-light">
                {current.role}, {current.company}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gray-light/70">
                {current.region}
              </p>
            </div>
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-light transition-colors hover:border-gold/40 hover:text-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-light transition-colors hover:border-gold/40 hover:text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
