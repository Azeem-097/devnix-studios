import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  title: "Devnix Studios | Website Design Pakistan — Starting 5,000 PKR",

  description:
    "Affordable custom website design in Pakistan starting at 5,000 PKR. We build, manage & grow your business online. Includes SEO, social media & 3 months support.",

  keywords: [
    "website design Pakistan",
    "affordable website Pakistan",
    "website banwao Pakistan",
    "custom website 5000 PKR",
    "web development Pakistan",
    "small business website Pakistan",
    "Facebook ads website Pakistan",
    "ecommerce website Pakistan",
    "website for business Pakistan",
    "SEO Pakistan",
    "social media management Pakistan",
    "Devnix Studios",
    "website designer Pakistan",
    "online store Pakistan",
    "digital marketing Pakistan",
  ],

  authors: [{ name: "Devnix Studios" }],

  metadataBase: new URL("https://devnixstudios.tech"),
  alternates: {
    canonical: "/",
  },

  verification: {
    google: "a8DKm6D41vySR5TrEEtAFB-wkTSCFvo4mRWPTgLnIA8",
  },

  icons: {
    icon: "/favicon-v3.ico",
  },

  openGraph: {
    title: "Devnix Studios | Website Design Pakistan — Starting 5,000 PKR",
    description:
      "Affordable custom website design in Pakistan starting at 5,000 PKR. Includes SEO, social media management & 3 months support.",
    type: "website",
    url: "https://devnixstudios.tech",
    locale: "en_PK",
    siteName: "Devnix Studios",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devnix Studios - Website Design Pakistan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Devnix Studios | Website Design Pakistan — Starting 5,000 PKR",
    description:
      "Affordable custom website design in Pakistan starting at 5,000 PKR.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white overflow-x-hidden`}
      >
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
