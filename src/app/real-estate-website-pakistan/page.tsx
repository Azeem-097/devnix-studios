import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Real Estate Website Pakistan | Property Website Design | Devnix Studios",
  description:
    "Professional real estate and property website design in Pakistan starting at PKR 5,000. Property listings, photo gallery, WhatsApp contact, Google Maps. Get more property buyers online!",
  keywords: [
    "real estate website pakistan",
    "property website pakistan",
    "real estate website design pakistan",
    "property listing website pakistan",
    "property dealer website pakistan",
    "real estate website karachi",
    "real estate website lahore",
    "plot website pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/real-estate-website-pakistan",
  },
  openGraph: {
    title: "Real Estate Website Pakistan | Devnix Studios",
    description:
      "Custom real estate and property websites in Pakistan starting at PKR 5,000. Property listings, gallery, WhatsApp contact.",
    url: "https://devnixstudios.tech/real-estate-website-pakistan",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Real Estate Websites"
        badgeColor="#0ea5e9"
        emoji="🏠"
        heroHeading="Real Estate Website Design in Pakistan"
        heroSubheading="Sell more properties with a professional real estate website. Property listings with photos, prices, location maps, and WhatsApp contact — starting at PKR 5,000."
        industryName="Real Estate"
        features={[
          {
            title: "Property Listings",
            description:
              "Each property gets its own page with photos, price, location, size, and full description.",
          },
          {
            title: "Property Gallery",
            description:
              "Beautiful photo galleries for each property so buyers can view before contacting you.",
          },
          {
            title: "WhatsApp Inquiry",
            description:
              "Interested buyers contact you directly via WhatsApp with one tap. No forms or delays.",
          },
          {
            title: "Location Maps",
            description:
              "Google Maps integration for each property so buyers know exactly where it is located.",
          },
          {
            title: "Category Filters",
            description:
              "Organize properties by type — plots, houses, apartments, commercial — for easy browsing.",
          },
          {
            title: "Price Display",
            description:
              "Clear pricing for each property with options to mark as sold, available, or negotiable.",
          },
        ]}
        whatsIncluded={[
          "Custom real estate website",
          "Property listing pages",
          "Photo gallery per property",
          "WhatsApp inquiry button",
          "Google Maps per property",
          "1 year free hosting",
          "Google Business listing",
          "3 months support",
          "Local SEO optimization",
          "Mobile responsive design",
          "Category organization",
          "Fast loading speed",
        ]}
        benefits={[
          "Buyers find your properties on Google",
          "Show all properties in one place",
          "WhatsApp inquiries without agents",
          "Look professional to buyers",
          "Get found on Google Maps",
          "Social media posts for new listings",
        ]}
        faq={[
          {
            q: "Can I add new properties myself?",
            a: "We handle property uploads for you. Just send us the photos and details and we add them within 24 hours.",
          },
          {
            q: "Can I mark properties as sold?",
            a: "Yes! We can mark properties as sold, available, or under negotiation and update this whenever needed.",
          },
          {
            q: "How many properties can I list?",
            a: "We start with 6 properties. Monthly management includes 2 new listings per week. Additional listings are 150 PKR each.",
          },
          {
            q: "Can buyers search by location or price?",
            a: "Yes! We organize properties into categories and areas so buyers can easily browse what they are looking for.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}