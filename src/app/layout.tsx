import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Space_Grotesk,
  Noto_Sans,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "700"],
  display: "swap",
});

const siteDescription =
  "DHURTA is a privacy-first technology group from India — makers of Dhurta Browser (the zero-telemetry open-source web browser), Dhurta Connect (serverless end-to-end encrypted P2P chat, calls & file sharing), and Dhurta Setu (a curated web index). Built on Trust, Technology & Culture — Dhurta is Sanskrit for clever.";

export const metadata: Metadata = {
  title: {
    default: "Dhurta India — Smart. Secure. Sovereign.",
    template: "%s | DHURTA India",
  },
  description: siteDescription,
  metadataBase: new URL("https://dhurta.in"),
  keywords: [
    "Dhurta",
    "Dhurta Browser",
    "privacy browser",
    "zero telemetry browser",
    "open source browser",
    "Dhurta Connect",
    "end-to-end encrypted chat",
    "P2P messaging",
    "serverless chat",
    "Dhurta Setu",
    "curated web index",
    "privacy-first software",
    "Dhurta India",
    "digital sovereignty India",
    "Sanskrit clever",
    "DPDP Act",
    "data privacy India",
    "Indian tech",
  ],
  alternates: {
    canonical: "https://dhurta.in",
    languages: {
      "en-IN": "https://dhurta.in",
    },
  },
  verification: {
    other: { "msvalidate.01": "E50EBC1ACA98B59E247E744077DA0EF8" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dhurta India — Smart. Secure. Sovereign.",
    description: siteDescription,
    url: "https://dhurta.in",
    siteName: "DHURTA India",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/dhurta-in-og.svg", width: 1200, height: 630, alt: "Dhurta India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhurta India — Smart. Secure. Sovereign.",
    description:
      "Makers of Dhurta Browser (zero telemetry), Dhurta Connect (E2E-encrypted P2P chat) and Dhurta Setu. Privacy-first, made in India.",
    images: ["/dhurta-in-og.svg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DHURTA",
  alternateName: "The Dhurta Group",
  url: "https://dhurta.in",
  logo: "https://dhurta.in/dhurta-logo.png",
  description: siteDescription,
  email: "contact@dhurta.in",
  slogan: "The Clever Choice — Trust, Technology, Culture",
  sameAs: ["https://dhurta.org", "https://dhurta.com"],
  brand: [
    {
      "@type": "Brand",
      name: "Dhurta Browser",
      description:
        "Flagship open-source, privacy-first web browser with zero telemetry.",
      url: "https://github.com/prashantkeshr/drtajl26.n",
    },
    {
      "@type": "Brand",
      name: "Dhurta Connect",
      description:
        "Zero-server, end-to-end encrypted peer-to-peer chat, calls and file sharing.",
    },
    {
      "@type": "Brand",
      name: "Dhurta Setu",
      description: "A hand-curated web index — an information bridge to the useful internet.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} ${notoSans.variable} ${notoDevanagari.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-navy text-white antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <CursorGlow />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
