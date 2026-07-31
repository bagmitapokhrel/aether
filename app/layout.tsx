import type { Metadata } from "next";
import { Lora, DM_Sans, Caveat, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Optimize Google Fonts with swap display
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bagmitapokhrel.com.np"),
  title: {
    default: "Bagmita Pokhrel | Full Stack Developer",
    template: "%s | Bagmita Pokhrel",
  },
  description:
    "I'm Bagmita Pokhrel, a full stack developer. I don't sugarcoat things — this is a look at what I've actually built, and why.",
  keywords: [
    "Bagmita Pokhrel",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Software Engineer",
    "React Developer",
    "Django Developer",
  ],
  authors: [{ name: "Bagmita Pokhrel" }],
  creator: "Bagmita Pokhrel",
  openGraph: {
    title: "Bagmita Pokhrel | Full Stack Developer",
    description:
      "I'm Bagmita Pokhrel, a full stack developer. I don't sugarcoat things — this is a look at what I've actually built, and why.",
    url: "https://bagmitapokhrel.com.np",
    siteName: "Bagmita Pokhrel",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bagmita Pokhrel — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagmita Pokhrel — Full Stack Developer",
    description: "I don't sugarcoat things. Here's what I've actually built.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bagmita Pokhrel",
    url: "https://bagmitapokhrel.com.np",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/bagmitapokhrel",
      "https://linkedin.com/in/bagmitapokhrel",
    ],
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "Python",
      "Django",
    ],
  };

  return (
    <html
      lang="en"
      className={`${lora.variable} ${dmSans.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-[var(--background)]">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Layout Shell */}
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>

        {/* Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

        {/* Console Easter Egg */}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("%cLooking around? Try /now or /uses.", "color: #6B2737; font-size: 14px; font-family: monospace; font-weight: bold;");`,
          }}
        />
      </body>
    </html>
  );
}