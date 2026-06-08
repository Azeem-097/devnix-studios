import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import PackageSection from "@/components/PackageSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title:
    "Devnix Studios | Premium Website Design Pakistan | Starting PKR 20,000",
  description:
    "Professional custom website design in Pakistan starting at PKR 20,000. Includes SEO optimization, social media management, and 3 months support. Serving Karachi, Lahore, Islamabad and all Pakistan.",
  alternates: {
    canonical: "https://devnixstudios.tech",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <PackageSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}