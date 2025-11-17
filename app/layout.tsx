import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "[Clinic Name] Aesthetics - Los Angeles Medical Aesthetics",
  description: "Physician-led medical aesthetics in Los Angeles. Specializing in face slimming, weight management, and anti-aging injectables. Safe, natural, evidence-based treatments.",
  keywords: ["medical aesthetics", "Los Angeles", "face slimming", "weight management", "injectables", "瘦脸针", "减肥针", "医美"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
