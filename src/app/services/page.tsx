import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services | Website Design, SEO & Social Media | Devnix Studios",
  description:
    "Complete digital services for Pakistan businesses. Custom website development, SEO optimization, social media management, ecommerce stores, Google Business setup, and website maintenance.",
  keywords: [
    "web design services pakistan",
    "seo services pakistan",
    "social media management pakistan",
    "website development services",
    "ecommerce development pakistan",
    "digital marketing pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/services",
  },
  openGraph: {
    title: "Our Services | Devnix Studios",
    description:
      "Website design, SEO, social media, and more for Pakistan businesses. Starting at PKR 20,000.",
    url: "https://devnixstudios.tech/services",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </main>
  );
}