"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { LinkedInIcon, XIcon, InstagramIcon, GitHubIcon } from "@/components/ui/SocialIcons";

const ecosystemLinks = [
  { label: "dhurta.com — Products", href: "https://dhurta.com" },
  { label: "Dhurta Browser on GitHub", href: "https://github.com/prashantkeshr/drtajl26.n" },
  { label: "Browser Releases", href: "https://github.com/prashantkeshr/drtajl26.n/releases" },
  { label: "Group Ventures", href: "/ventures" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/dhurta-logo.png"
                alt="Dhurta emblem"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="font-display text-3xl font-bold text-white">
                DHU<span className="text-gradient-gold">RTA</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-light">
              Privacy-first technology, built for Bharat. Dhurta India delivers
              security-by-design solutions rooted in Indian values and compliant
              with Indian law.
            </p>
            <p className="mt-3 text-xs text-gray-dark">
              Registered in India | CIN: [placeholder]
              <br />
              Data stored in India · Compliant with DPDP Act 2023
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: LinkedInIcon, href: "#" },
                { Icon: XIcon, href: "#" },
                { Icon: InstagramIcon, href: "#" },
                { Icon: GitHubIcon, href: "https://github.com/prashantkeshr/drtajl26.n" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  {...(href !== "#" && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-light transition-all hover:border-gold/50 hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-light transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Ecosystem
            </h4>
            <ul className="space-y-2.5">
              {ecosystemLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-gray-light transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ) : (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-gray-light transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "DPDP Compliance", href: "/dpdp" },
                { label: "Responsible Disclosure", href: "/security" },
                { label: "Open Source Licences", href: "/oss" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-light transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-gray-light">
              contact@dhurta.in
              <br />
              India HQ — Remote-first, Bharat-rooted.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-light sm:flex-row">
          <p>© {new Date().getFullYear()} DHURTA India. All rights reserved.</p>
          <p className="font-devanagari text-sm text-saffron/70">
            Made with ♥ in Bharat — धूर्तः, चतुरः, विश्वसनीयः
          </p>
        </div>
      </div>
    </footer>
  );
}
