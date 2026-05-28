import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import PackageSection from "@/components/PackageSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title:
    "Devnix Studios | Affordable Website Design Pakistan | Starting PKR 5,000",
  description:
    "Professional custom website design in Pakistan starting at PKR 5,000. Includes SEO optimization, social media management, and 3 months support. Serving Karachi, Lahore, Islamabad & all Pakistan.",
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
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}