import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Textile Business Website Pakistan | Fabric Website Design | Devnix Studios",
  description:
    "Professional textile and fabric business website design in Pakistan starting at PKR 5,000. Product catalog, fabric gallery, wholesale pricing, WhatsApp ordering. Grow your textile business online!",
  keywords: [
    "textile website pakistan",
    "textile business website pakistan",
    "fabric website pakistan",
    "clothing website pakistan",
    "garment website pakistan",
    "textile website faisalabad",
    "textile website karachi",
    "wholesale fabric website pakistan",
    "kapra website pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/textile-business-website",
  },
  openGraph: {
    title: "Textile Business Website Pakistan | Devnix Studios",
    description:
      "Custom textile and fabric websites in Pakistan starting at PKR 5,000. Product catalog, gallery, WhatsApp ordering.",
    url: "https://devnixstudios.tech/textile-business-website",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function TextilePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Textile Websites"
        badgeColor="#8b5cf6"
        emoji="🧵"
        heroHeading="Textile Business Website Design in Pakistan"
        heroSubheading="Showcase your fabrics and garments online. Professional product catalog with photos, colors, pricing, and WhatsApp ordering — starting at PKR 5,000."
        industryName="Textile"
        features={[
          {
            title: "Fabric Product Catalog",
            description:
              "Display all fabrics with high-quality photos showing colors, patterns, and textures clearly.",
          },
          {
            title: "Color and Design Variants",
            description:
              "Show multiple color options and designs for each fabric type so buyers see all choices.",
          },
          {
            title: "Wholesale Pricing",
            description:
              "Display per-meter or per-piece pricing with minimum order quantities for wholesale buyers.",
          },
          {
            title: "WhatsApp Ordering",
            description:
              "Buyers place orders directly via WhatsApp. Send fabric samples and confirm orders easily.",
          },
          {
            title: "Category Organization",
            description:
              "Organize by fabric type — lawn, cotton, silk, chiffon, ready-made — for easy browsing.",
          },
          {
            title: "Pakistan-Wide Delivery Info",
            description:
              "Display delivery options, shipping rates, and areas you serve across Pakistan.",
          },
        ]}
        whatsIncluded={[
          "Custom textile website design",
          "Fabric product catalog",
          "Color variant display",
          "Wholesale pricing section",
          "WhatsApp order button",
          "1 year free hosting",
          "Google Business listing",
          "3 months support",
          "SEO optimization",
          "Mobile responsive design",
          "Category organization",
          "Fast loading speed",
        ]}
        benefits={[
          "Buyers find your fabrics on Google",
          "Show entire catalog online",
          "WhatsApp orders from across Pakistan",
          "Reach wholesale buyers digitally",
          "Professional brand image",
          "Social media posts for new designs",
        ]}
        faq={[
          {
            q: "Can I show fabric colors and variants?",
            a: "Yes! We display multiple color options and design variants for each fabric so buyers can choose what they want.",
          },
          {
            q: "Can I take orders from other cities?",
            a: "Absolutely! Your website reaches buyers across Pakistan. WhatsApp ordering makes it easy to sell anywhere.",
          },
          {
            q: "Can I add new fabric designs regularly?",
            a: "Yes! Monthly management includes 2 new products per week. New designs are added quickly when you send us photos.",
          },
          {
            q: "Is this good for a small fabric shop?",
            a: "Yes! Even small fabric shops benefit massively from going online. Buyers increasingly search for fabrics on Google and Instagram.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}