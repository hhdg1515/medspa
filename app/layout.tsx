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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Medical Aesthetics Los Angeles | Face Slimming & Weight Management",
    template: "%s | LA Medical Aesthetics"
  },
  description: "Physician-led medical aesthetics in Los Angeles. Specializing in face slimming, weight management, and anti-aging injectables. Safe, natural, evidence-based treatments. 洛杉矶专业医美诊所。",
  keywords: ["medical aesthetics", "Los Angeles", "face slimming", "weight management", "injectables", "瘦脸针", "减肥针", "医美", "botox", "med spa"],
  authors: [{ name: "LA Medical Aesthetics" }],
  creator: "LA Medical Aesthetics",
  publisher: "LA Medical Aesthetics",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    url: '/',
    title: "Medical Aesthetics Los Angeles | Face Slimming & Weight Management",
    description: "Physician-led medical aesthetics in Los Angeles. Safe, natural, evidence-based treatments.",
    siteName: "LA Medical Aesthetics",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Medical Aesthetics Los Angeles",
    description: "Physician-led medical aesthetics. Face slimming, weight management, and anti-aging treatments.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
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
