import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { CookieConsentProvider } from "@/components/CookieConsent";
import { business } from "@/data/business";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fsrrecoverygroups.co.uk"),
  title: {
    template: `%s | ${business.name}`,
    default: `${business.name} | 24/7 Car Recovery & Towing Services`,
  },
  description: `${business.name} provides fast, reliable 24/7 vehicle breakdown recovery, roadside assistance, accident recovery and vehicle transporting services.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/service-roadside.webp" />
        {/* Self-hosted icon font (solid + brands only) — same-origin to avoid the
            extra DNS/TLS round trip a CDN link adds on slow connections. */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/fonts/fontawesome/fontawesome.min.css" />
      </head>
      <body className="pb-14 antialiased sm:pb-0">
        <ScrollAnimations />
        <FloatingButtons />
        <CookieConsentProvider>{children}</CookieConsentProvider>
      </body>
    </html>
  );
}
