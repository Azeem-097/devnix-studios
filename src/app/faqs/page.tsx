import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQsPageContent from "@/components/FAQsPageContent";

export const metadata: Metadata = {
  title: "FAQs | Common Questions About Web Design Pakistan | Devnix Studios",
  description:
    "Got questions about our web development, SEO, or pricing? Find answers to common questions about Devnix Studios services in Pakistan.",
  keywords: [
    "devnix faqs",
    "web design questions pakistan",
    "website cost pakistan questions",
    "web development faq",
    "devnix studios questions",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/faqs",
  },
  openGraph: {
    title: "FAQs | Devnix Studios",
    description:
      "All your questions answered about our web development and SEO services in Pakistan.",
    url: "https://devnixstudios.tech/faqs",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <FAQsPageContent />
      <Footer />
    </main>
  );
}