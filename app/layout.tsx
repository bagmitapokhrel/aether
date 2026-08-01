import type { Metadata } from "next";
import { Lora, DM_Sans, Caveat, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bagmitapokhrel.com.np"),
  title: "Bagmita Pokhrel — Full Stack Developer",
  description:
    "I'm Bagmita Pokhrel, a full stack developer. I don't sugarcoat things — this is a look at what I've actually built, and why.",
  keywords: ["Bagmita Pokhrel", "Full Stack Developer", "Web Developer Portfolio"],
  authors: [{ name: "Bagmita Pokhrel" }],
  creator: "Bagmita Pokhrel",
  verification: {
    google: "c8v8Bgtk2ZaCHs67UFId3KPEm9HenK8lD7LbZlKYl28",
  },
  openGraph: {
    title: "Bagmita Pokhrel — Full Stack Developer",
    description:
      "I'm Bagmita Pokhrel, a full stack developer. I don't sugarcoat things — this is a look at what I've actually built, and why.",
    url: "https://bagmitapokhrel.com.np",
    siteName: "Bagmita Pokhrel",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${dmSans.variable} ${caveat.variable} ${jetbrainsMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bagmita Pokhrel",
              url: "https://bagmitapokhrel.com.np",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/bagmitapokhrel",
                "https://linkedin.com/in/bagmitapokhrel",
              ],
            }),
          }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("%cLooking around? Try /now or /uses.", "color: #6B2737; font-size: 14px; font-family: monospace;");`,
          }}
        />
      </body>
    </html>
  );
}