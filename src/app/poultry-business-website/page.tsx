import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Poultry Business Website Pakistan | Farm Website Design | Devnix Studios",
  description:
    "Professional poultry and farm business website design in Pakistan starting at PKR 5,000. Product catalog, pricing, WhatsApp ordering, Google Business listing. Grow your poultry business online!",
  keywords: [
    "poultry website pakistan",
    "poultry business website pakistan",
    "chicken farm website pakistan",
    "poultry farm website pakistan",
    "murgi farm website pakistan",
    "poultry products website pakistan",
    "farm website pakistan",
    "poultry dealer website pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/poultry-business-website",
  },
  openGraph: {
    title: "Poultry Business Website Pakistan | Devnix Studios",
    description:
      "Custom poultry and farm websites in Pakistan starting at PKR 5,000. Products, pricing, WhatsApp ordering.",
    url: "https://devnixstudios.tech/poultry-business-website",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function PoultryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Poultry Websites"
        badgeColor="#eab308"
        emoji="🐔"
        heroHeading="Poultry Business Website Design in Pakistan"
        heroSubheading="Grow your poultry business online. Professional product catalog with live rates, WhatsApp ordering, and Google Business listing — starting at PKR 5,000."
        industryName="Poultry"
        features={[
          {
            title: "Product Catalog",
            description:
              "List all your poultry products — live chickens, meat, eggs, chicks — with photos and current prices.",
          },
          {
            title: "Live Rate Display",
            description:
              "Update chicken and product rates daily so buyers always see current market prices.",
          },
          {
            title: "WhatsApp Ordering",
            description:
              "Buyers order directly via WhatsApp. Fast, simple, and no complicated payment needed.",
          },
          {
            title: "Wholesale Section",
            description:
              "Separate section for wholesale buyers with bulk pricing and minimum order details.",
          },
          {
            title: "Farm Location",
            description:
              "Google Maps integration so buyers can find your farm or shop location easily.",
          },
          {
            title: "Google Business",
            description:
              "Get listed on Google Maps so local buyers searching for poultry find your business first.",
          },
        ]}
        whatsIncluded={[
          "Custom poultry business website",
          "Product and rate catalog",
          "Daily rate update option",
          "WhatsApp order button",
          "Google Maps location",
          "1 year free hosting",
          "Google Business listing",
          "3 months support",
          "Local SEO optimization",
          "Mobile responsive design",
          "Wholesale info section",
          "Fast loading speed",
        ]}
        benefits={[
          "Buyers find your farm on Google",
          "Show live rates online",
          "WhatsApp orders without middlemen",
          "Look professional to wholesale buyers",
          "Get listed on Google Maps",
          "Reach more customers across Pakistan",
        ]}
        faq={[
          {
            q: "Can I update chicken rates daily?",
            a: "Yes! Daily rate updates are simple and included in monthly management. Just send us the new rates and we update within hours.",
          },
          {
            q: "Can I sell to both retail and wholesale buyers?",
            a: "Yes! We create separate sections for retail and wholesale with different pricing and minimum orders.",
          },
          {
            q: "Is this good for a small poultry shop?",
            a: "Absolutely! Even small poultry shops benefit from online presence. Buyers search for poultry products near them on Google.",
          },
          {
            q: "Can I add farm photos?",
            a: "Yes! We add a photo gallery of your farm, products, and facilities to build trust with buyers.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}