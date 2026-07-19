import type { Metadata } from "next";
import { Lora, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://bagmitapokhrel.com.np"),
  title: "Bagmita Pokhrel — Full Stack Developer",
  description:
    "I'm Bagmita Pokhrel, a full stack developer. I don't sugarcoat things — this is a look at what I've actually built, and why.",
  keywords: ["Bagmita Pokhrel", "Full Stack Developer", "Web Developer Portfolio"],
  authors: [{ name: "Bagmita Pokhrel" }],
  creator: "Bagmita Pokhrel",
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
      <body className={`${lora.variable} ${dmSans.variable} ${caveat.variable}`}>
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
                "https://linkedin.com/in/Bagmita-Pokhrel",
              ],
            }),
          }}
        />
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}