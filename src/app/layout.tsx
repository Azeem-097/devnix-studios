import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SchemaOrg from "@/components/SchemaOrg";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devnixstudios.tech"),
  title: {
    default:
      "Devnix Studios | Affordable Website Design Pakistan | Starting PKR 5,000",
    template: "%s | Devnix Studios",
  },
  description:
    "Professional custom website design in Pakistan starting at PKR 5,000. Includes SEO optimization, social media management, and 3 months support. Serving Karachi, Lahore, Islamabad and all Pakistan.",
  keywords: [
    "website design pakistan",
    "web development pakistan",
    "affordable website pakistan",
    "custom website pakistan",
    "website design karachi",
    "website design lahore",
    "website design islamabad",
    "seo services pakistan",
    "social media management pakistan",
    "web designer pakistan",
    "cheap website pakistan",
    "ecommerce website pakistan",
    "business website pakistan",
    "devnix studios",
    "website 5000 pkr",
  ],
  authors: [{ name: "Devnix Studios", url: "https://devnixstudios.tech" }],
  creator: "Devnix Studios",
  publisher: "Devnix Studios",
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
  alternates: {
    canonical: "https://devnixstudios.tech",
  },
  openGraph: {
    title: "Devnix Studios | Website Design Pakistan | PKR 5,000",
    description:
      "Custom websites starting at PKR 5,000. SEO + Social Media + 3 Months Support included. Serving all of Pakistan.",
    url: "https://devnixstudios.tech",
    siteName: "Devnix Studios",
    images: [
      {
        url: "https://devnixstudios.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devnix Studios - Website Design Pakistan",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devnix Studios | Website Design Pakistan",
    description:
      "Custom websites starting at PKR 5,000. SEO + Social Media included.",
    images: ["https://devnixstudios.tech/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo/DevnixlogoWeb.avif",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external origins for faster connection */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://www.googletagmanager.com"
        />
        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com"
        />

        {/* Preload the logo for instant rendering */}
        <link
          rel="preload"
          href="/logo/DevnixlogoWeb.avif"
          as="image"
          type="image/avif"
          fetchPriority="high"
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
