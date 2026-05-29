import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOServicesContent from "@/components/SEOServicesContent";

export const metadata: Metadata = {
  title:
    "SEO Services Pakistan | 6 SEO Packages Starting PKR 3,000 | Devnix Studios",
  description:
    "Professional SEO services in Pakistan. Basic SEO setup, monthly SEO plans, local SEO, e-commerce SEO, audits, and Google Business setup. Rank higher on Google starting PKR 3,000.",
  keywords: [
    "seo services pakistan",
    "seo optimization pakistan",
    "google ranking pakistan",
    "local seo pakistan",
    "monthly seo plan pakistan",
    "seo audit pakistan",
    "seo expert pakistan",
    "affordable seo pakistan",
    "ecommerce seo pakistan",
    "google business setup pakistan",
    "seo karachi",
    "seo lahore",
    "seo islamabad",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/seo-services-pakistan",
  },
  openGraph: {
    title: "SEO Services Pakistan | Devnix Studios",
    description:
      "6 SEO packages for Pakistan businesses. Starting at PKR 3,000. Rank higher on Google.",
    url: "https://devnixstudios.tech/seo-services-pakistan",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function SEOServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <SEOServicesContent />
      <Footer />
    </main>
  );
}