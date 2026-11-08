"use client";

import { useState } from "react";
import Link from "next/link";

export default function EcosystemBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-6 bg-black/80 backdrop-blur-sm border-b border-saffron/20 px-4 py-2 text-xs text-gray-light">
      <span className="text-saffron font-semibold">DHURTA ECOSYSTEM</span>
      <Link href="https://dhurta.org" className="hover:text-gold transition-colors">
        Group → dhurta.org
      </Link>
      <Link href="https://dhurta.com" className="hover:text-teal transition-colors">
        Products → dhurta.com
      </Link>
      <button onClick={() => setDismissed(true)} className="ml-4 text-gray-dark hover:text-white">
        ✕
      </button>
    </div>
  );
}
