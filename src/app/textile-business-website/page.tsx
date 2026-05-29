import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Textile Business Website Pakistan — Fabric Mill Website | Devnix Studios",
  description:
    "Professional textile and fabric business website design in Pakistan. Product catalog, wholesale inquiries, export-ready. Starting at PKR 5,000.",
  keywords: [
    "textile website Pakistan",
    "textile business website Pakistan",
    "fabric website Pakistan",
    "textile mill website Pakistan",
    "garment website Pakistan",
    "textile export website Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/textile-business-website" },
  openGraph: {
    title: "Textile Business Website Pakistan | Devnix Studios",
    description: "Professional textile and fabric business websites. Starting at PKR 5,000.",
    url: "https://devnixstudios.tech/textile-business-website",
    type: "website",
  },
};

const features = [
  { title: "Fabric Catalog", description: "Beautiful display of all your fabrics with high-quality photos, GSM, composition, colors available, and pricing." },
  { title: "Wholesale Inquiry System", description: "B2B buyers send detailed inquiries with quantity, specifications, and delivery requirements via WhatsApp." },
  { title: "Product Categories", description: "Organize by fabric type, end-use, season, or any structure that helps buyers navigate your products." },
  { title: "Mill Photo Gallery", description: "Showcase your manufacturing facility, machinery, and quality control. Important for export and B2B credibility." },
  { title: "Certifications Display", description: "Highlight your ISO, OEKO-TEX, GOTS, or other certifications. Critical for international buyers." },
  { title: "Export Information", description: "Dedicated sections for international buyers — payment terms, shipping, MOQ, lead times, and export experience." },
];

const benefits = [
  "Compete with large textile brands online",
  "Attract export buyers from Middle East, EU, and USA",
  "Showcase quality and certifications to serious buyers",
  "WhatsApp integration for instant inquiries",
  "Professional presence builds trust for large orders",
  "SEO helps buyers find you for specific fabric searches",
  "Showcase your mill facilities to build credibility",
  "Multilingual ready for international clients",
];

const whatsIncluded = [
  "Custom textile website (no templates)",
  "Complete fabric catalog",
  "Product category organization",
  "Mill facility photo gallery",
  "Certifications section",
  "Wholesale inquiry system",
  "Export information section",
  "WhatsApp integration",
  "Mobile responsive design",
  "Google Business Profile setup",
  "Free 1-year hosting",
  "3 months management included",
];

const faq = [
  { q: "Is this suitable for textile mills or fabric traders?", a: "Both! Whether you are a textile manufacturer (mill), fabric trader, garment exporter, or yarn supplier — we customize the website for your specific business type. The structure adapts to your needs." },
  { q: "Can international buyers contact me through the website?", a: "Yes! We make sure your website works for international visitors — multiple contact methods, WhatsApp Business with international format, email forms, and clear export information. We can even add multi-language support if needed (additional cost)." },
  { q: "How do I showcase my fabric collections?", a: "We organize your fabric catalog with high-quality photos, technical details (GSM, composition, width), available colors, MOQ, and pricing tiers. We include up to 50 fabric items in the base package." },
  { q: "Can I show my certifications and quality standards?", a: "Yes! We include a dedicated certifications section where you can display ISO, OEKO-TEX, GOTS, BSCI, or any other certifications you have. This is crucial for international buyers." },
  { q: "Will the website help me get export orders?", a: "A professional website is essential for export business. International buyers research suppliers online before contacting them. With SEO optimization for export-related keywords and a professional presentation, you significantly improve your chances of getting international inquiries." },
];

export default function TextileBusinessWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Textile Business"
        badgeColor="#8b5cf6"
        emoji="🧵"
        heroHeading="Professional Textile Business Websites for Pakistan"
        heroSubheading="Custom websites for textile mills, fabric traders, and garment exporters in Pakistan. Product catalog, mill gallery, and export-ready features included."
        industryName="Textile Business"
        slug="textile-business-website"
        features={features}
        benefits={benefits}
        faq={faq}
        whatsIncluded={whatsIncluded}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}