import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Real Estate Website Design Pakistan — Property Listings | Devnix Studios",
  description:
    "Professional real estate website design in Pakistan. Property listings, search filters, WhatsApp inquiries. Starting at PKR 5,000.",
  keywords: [
    "real estate website Pakistan",
    "property website Pakistan",
    "real estate website design Pakistan",
    "property listings website Pakistan",
    "real estate agent website Pakistan",
    "property dealer website Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/real-estate-website-pakistan" },
  openGraph: {
    title: "Real Estate Website Design Pakistan | Devnix Studios",
    description: "Professional real estate websites with property listings. Starting at PKR 5,000.",
    url: "https://devnixstudios.tech/real-estate-website-pakistan",
    type: "website",
  },
};

const features = [
  { title: "Property Listings", description: "Beautiful display of all properties with photos, price, location, size, and features. Easy for buyers to browse." },
  { title: "Search & Filters", description: "Customers filter by city, area, price range, property type (house, apartment, plot), bedrooms. Find perfect match fast." },
  { title: "WhatsApp Inquiry", description: "One-click WhatsApp button on every property with details pre-filled. Convert browsers into serious leads instantly." },
  { title: "Property Categories", description: "Organize by Sale, Rent, Commercial, Plots, and city/area. Easy navigation for different buyer types." },
  { title: "Agent Profile", description: "Build trust with your photo, experience, contact info, and specialty areas you cover." },
  { title: "Google Maps Integration", description: "Show exact property locations on Google Maps. Helps buyers visualize neighborhood and accessibility." },
];

const benefits = [
  "Professional appearance builds buyer trust in serious transactions",
  "Search filters help buyers find properties faster than scrolling",
  "WhatsApp integration matches Pakistani buyer preferences",
  "SEO helps you rank for property in [city] searches",
  "Showcase properties 24/7 even when you are not available",
  "Better than OLX/Zameen — your own branded platform",
  "Mobile-friendly for clients browsing on phones",
  "Photo galleries sell properties better than text descriptions",
];

const whatsIncluded = [
  "Custom real estate website (no templates)",
  "Up to 20 property listings pre-loaded",
  "Search and filter functionality",
  "Property categories (Sale/Rent/Plot)",
  "WhatsApp inquiry integration",
  "Agent profile section",
  "Google Maps integration",
  "Mobile responsive design",
  "Google Business Profile setup",
  "Free 1-year hosting",
  "3 months management included",
];

const faq = [
  { q: "How many properties can I list on the website?", a: "The package includes up to 20 properties pre-loaded with photos, descriptions, and details. Additional properties cost PKR 150 each, including SEO optimization and a social media post." },
  { q: "Can I add properties myself or do you handle it?", a: "With our 3-month management package, we add new properties for you — just send us photos and details via WhatsApp. After 3 months, you can extend management or learn to update yourself." },
  { q: "Can buyers filter properties by city, price, and type?", a: "Yes! We include search filters for city, area, price range, property type (house/apartment/plot/commercial), and number of bedrooms. This is essential for a good real estate website." },
  { q: "Will the website compete with OLX and Zameen?", a: "Your website is YOUR own branded platform — buyers come directly to you instead of competing with hundreds of other listings. Plus, you can advertise your website on OLX and Zameen to send traffic to your professional site." },
  { q: "Can I show properties on Google Maps?", a: "Yes! Each property listing includes Google Maps integration showing the exact location, helping buyers visualize the neighborhood. We also set up your Google Business Profile." },
];

export default function RealEstateWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Real Estate Websites"
        badgeColor="#f59e0b"
        emoji="🏘️"
        heroHeading="Professional Real Estate Websites for Pakistan"
        heroSubheading="Modern websites for property dealers, real estate agents, and brokers in Pakistan. Property listings, search filters, and WhatsApp inquiries included."
        industryName="Real Estate"
        slug="real-estate-website-pakistan"
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