"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { brandLanguages } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function LanguageTypewriter({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % brandLanguages.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const current = brandLanguages[index];

  return (
    <div className={cn("relative flex h-14 items-center justify-center overflow-hidden sm:h-16", className)}>
      <motion.span
        key={current.code}
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "absolute inline-block text-xl font-medium text-gray-light sm:text-2xl",
          current.fontClass
        )}
      >
        {current.text}
        <span className="ml-2 text-xs uppercase tracking-widest text-gold/70">
          {current.language}
        </span>
      </motion.span>
    </div>
  );
}
