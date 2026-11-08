"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import TiltCard from "@/components/ui/TiltCard";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogGrid() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => blogPosts.filter((p) => category === "All" || p.category === category),
    [category]
  );

  return (
    <section className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                category === c
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-white/10 text-gray-light hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <TiltCard className="glass-card h-full p-7">
                    <div className="flex items-center justify-between text-xs">
                      <span className="rounded-full border border-white/10 px-3 py-1 font-semibold uppercase tracking-widest text-gold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-light">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold leading-snug text-white">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-light">{post.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs text-gray-light/70">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-white">
                        Read
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </TiltCard>
                </Link>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
