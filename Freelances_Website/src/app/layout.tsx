import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GeoSpatial Pro — Freelance GIS, Remote Sensing & Research Support",
  description:
    "End-to-end GIS, Remote Sensing, Geoinformatics, Agricultural and Forestry geospatial services for students, researchers, universities, organizations and consultants. Google Earth Engine, Python, Machine Learning — with guaranteed on-time delivery.",
  keywords: [
    "GIS services",
    "Remote Sensing",
    "Google Earth Engine",
    "Geoinformatics",
    "Agriculture",
    "Forestry",
    "Machine Learning",
    "Freelance GIS expert",
    "Research support",
    "Thesis support",
  ],
  openGraph: {
    title: "GeoSpatial Pro — Professional Geospatial & Research Support Services",
    description:
      "Freelance GIS, Remote Sensing, Agriculture, Forestry & Machine Learning services with on-time delivery guaranteed.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoSpatial Pro — GIS & Remote Sensing Freelance Services",
    description:
      "End-to-end geospatial analysis and research support, delivered on time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
