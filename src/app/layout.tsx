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
      "Devnix Studios | Premium Website Design Pakistan | Starting PKR 20,000",
    template: "%s | Devnix Studios",
  },
  description:
    "Professional custom website design in Pakistan starting at PKR 20,000. Includes admin panel, hosting, domain, SEO, and 3 months support. Serving all Pakistan.",
  keywords: [
    "website design pakistan",
    "web development pakistan",
    "premium website pakistan",
    "custom website pakistan",
    "website design karachi",
    "website design lahore",
    "website design islamabad",
    "seo services pakistan",
    "web designer pakistan",
    "ecommerce website pakistan",
    "business website pakistan",
    "devnix studios",
    "admin panel website pakistan",
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
    title: "Devnix Studios | Premium Website Design Pakistan | PKR 20,000",
    description:
      "Custom websites with admin panel starting at PKR 20,000. Hosting + Domain + SEO + 3 Months Support included.",
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
    title: "Devnix Studios | Premium Website Design Pakistan",
    description:
      "Custom websites with admin panel starting at PKR 20,000.",
    images: ["https://devnixstudios.tech/og-image.png"],
  },
  icons: {
    apple: "/logo/DevnixlogoWeb.avif",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
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
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
