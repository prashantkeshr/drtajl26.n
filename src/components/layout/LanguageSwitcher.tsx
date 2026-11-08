"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { uiLanguages } from "@/lib/data";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-light transition-colors hover:border-gold/40 hover:text-gold"
      >
        <Globe size={14} />
        <span className="uppercase">{uiLanguages.find((l) => l.code === selected)?.label}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 grid max-h-72 w-48 grid-cols-2 gap-1 overflow-y-auto rounded-xl border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-xl"
          >
            {uiLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelected(lang.code);
                  setOpen(false);
                }}
                className="flex items-center justify-between gap-1 rounded-lg px-2 py-1.5 text-left text-xs text-gray-light transition-colors hover:bg-gold/10 hover:text-gold"
              >
                {lang.label}
                {selected === lang.code && <Check size={12} className="text-gold" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
