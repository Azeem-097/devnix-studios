import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Devnix Studios — We Build. We Manage. We Grow.",
  description:
    "Professional web development, SEO, and social media management for businesses that want to dominate online. Custom websites starting at 5,000 PKR.",
  keywords: [
    "web development",
    "website design",
    "SEO",
    "social media management",
    "Pakistan",
    "custom website",
    "Devnix Studios",
  ],
  authors: [{ name: "Devnix Studios" }],
  icons: {
    icon: "/favicon-v3.ico",
  },
  openGraph: {
    title: "Devnix Studios — We Build. We Manage. We Grow.",
    description:
      "Professional web development, SEO, and social media management for businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Devnix Studios",
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
        className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}