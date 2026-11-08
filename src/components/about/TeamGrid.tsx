"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import type { TeamMember } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  return (
    <section className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Global Leadership"
          title="The Clever Ones, Leading From Everywhere"
          description="A distributed leadership team, embedded in the markets we serve."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <TiltCard className="glass-card h-full p-7">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-light/20 to-gold-dark/20 font-display text-xl font-bold text-gold">
                  {initials(member.name)}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm font-medium text-gold/80">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-light">{member.bio}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-light/70">
                  <MapPin size={12} />
                  {member.region}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
