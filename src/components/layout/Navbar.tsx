"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-navy/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/dhurta-logo.png"
            alt="Dhurta emblem"
            width={38}
            height={38}
            priority
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display text-2xl font-bold tracking-wide text-white">
            DHU<span className="text-gradient-gold">RTA</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium text-gray-light transition-colors hover:text-white",
                pathname === link.href && "text-gold"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-[length:200%_auto] px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-[position:100%_0] hover:shadow-[0_0_24px_2px_rgba(201,168,76,0.4)]"
          >
            Start a Project
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-medium text-gray-light transition-colors hover:bg-white/5 hover:text-gold",
                      pathname === link.href && "text-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-4">
                <LanguageSwitcher />
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-5 py-2 text-sm font-semibold text-black"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
