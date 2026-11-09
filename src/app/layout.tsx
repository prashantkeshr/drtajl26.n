import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Space_Grotesk,
  Noto_Sans,
  Noto_Sans_Devanagari,
  Noto_Sans_Bengali,
  Noto_Sans_Arabic,
  Noto_Sans_SC,
  Noto_Sans_JP,
  Noto_Sans_KR,
  Noto_Sans_Thai,
  Noto_Sans_Tamil,
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

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "700"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  weight: ["400", "700"],
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "700"],
  display: "swap",
});

const siteDescription =
  "DHURTA is a privacy-first technology group from India — makers of Dhurta Browser (the zero-telemetry open-source web browser), Dhurta Connect (serverless end-to-end encrypted P2P chat, calls & file sharing), and Dhurta Setu (a curated web index). Built on Trust, Technology & Culture — Dhurta is Sanskrit for clever.";

export const metadata: Metadata = {
  title: {
    default: "Dhurta India — सुरक्षित तकनीक, भारतीय दृष्टि",
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
    "digital transformation India",
    "Sanskrit clever",
    "DPDP Act",
    "भारतीय तकनीक",
  ],
  alternates: {
    canonical: "https://dhurta.in",
    languages: {
      "en-IN": "https://dhurta.in",
      hi: "https://dhurta.in/hi",
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
    title: "Dhurta India — सुरक्षित तकनीक, भारतीय दृष्टि",
    description: siteDescription,
    url: "https://dhurta.in",
    siteName: "DHURTA India",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/dhurta-in-og.svg", width: 1200, height: 630, alt: "Dhurta India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhurta India — सुरक्षित तकनीक, भारतीय दृष्टि",
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
      className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} ${notoSans.variable} ${notoDevanagari.variable} ${notoBengali.variable} ${notoArabic.variable} ${notoSC.variable} ${notoJP.variable} ${notoKR.variable} ${notoThai.variable} ${notoTamil.variable} h-full scroll-smooth`}
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
