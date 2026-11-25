import * as React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CursorGlow } from "@/components/cursor-glow";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    images: { url: "/opengraph-image.png", width: 1200, height: 630 },
  },
  twitter: {
    card: "summary_large_image",
    creator: "@blacmilk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-[#060607] text-white antialiased selection:bg-emerald-500 selection:text-white">
        <CursorGlow />
        <SiteHeader />
        <main className="flex min-h-[calc(100dvh-4rem)] flex-col">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
