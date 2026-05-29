import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Poultry Business Website Pakistan — Farm Website Design | Devnix Studios",
  description:
    "Professional poultry farm and business website design in Pakistan. Product catalog, wholesale inquiries, WhatsApp orders. Starting at PKR 5,000.",
  keywords: [
    "poultry website Pakistan",
    "poultry business website Pakistan",
    "poultry farm website Pakistan",
    "chicken business website Pakistan",
    "poultry website design Pakistan",
    "egg farm website Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/poultry-business-website" },
  openGraph: {
    title: "Poultry Business Website Pakistan | Devnix Studios",
    description: "Professional poultry farm and business websites. Starting at PKR 5,000.",
    url: "https://devnixstudios.tech/poultry-business-website",
    type: "website",
  },
};

const features = [
  { title: "Product Catalog", description: "Display all your poultry products — broilers, layers, eggs, chicks, feed — with photos, prices, and specifications." },
  { title: "Wholesale Pricing", description: "Separate sections for retail and wholesale customers with bulk pricing tiers and minimum order quantities." },
  { title: "WhatsApp Ordering", description: "Buyers place orders directly via WhatsApp with quantity, product, and delivery location pre-filled." },
  { title: "Farm Photo Gallery", description: "Showcase your farm facilities, cleanliness, and quality standards. Builds trust with serious buyers." },
  { title: "Service Areas", description: "Clearly list delivery areas and cities you serve. Helps qualify leads quickly." },
  { title: "Daily Rate Updates", description: "Easy to update daily/weekly rates as poultry prices fluctuate. Keeps customers informed." },
];

const benefits = [
  "Reach buyers across Pakistan, not just your local area",
  "Wholesale buyers research online before placing big orders",
  "WhatsApp integration matches Pakistani B2B buying behavior",
  "Showcase your farm cleanliness and quality online",
  "SEO helps you rank for poultry supplier [city] searches",
  "Professional image builds trust for large orders",
  "Reduces phone calls with self-service product info",
  "Compete with established poultry brands",
];

const whatsIncluded = [
  "Custom poultry website (no templates)",
  "Complete product catalog",
  "Wholesale and retail sections",
  "Farm photo gallery",
  "WhatsApp ordering integration",
  "Service area listings",
  "Daily rate update capability",
  "Mobile responsive design",
  "Google Business Profile setup",
  "Free 1-year hosting",
  "3 months management included",
];

const faq = [
  { q: "Is this website suitable for poultry farms or poultry dealers?", a: "Both! Whether you run a poultry farm (broilers, layers, eggs), a poultry dealer business, or a poultry feed supplier — we customize the website for your specific operation. Just let us know your business type." },
  { q: "Can buyers place bulk orders through the website?", a: "Yes! We integrate WhatsApp for orders where buyers specify product, quantity, delivery location, and any special requirements. You confirm pricing and delivery via WhatsApp — perfect for wholesale orders." },
  { q: "Can I update poultry rates daily?", a: "Yes! Poultry rates fluctuate daily. We can either update rates for you (included in 3-month management) or train you to update them yourself in 5 minutes." },
  { q: "Will I get customers from other cities?", a: "Yes! Your website is visible across Pakistan. With proper SEO and Google Business Profile, you will get inquiries from cities you have never served before. We have built poultry websites that get inquiries from Karachi to Peshawar." },
  { q: "Do you have experience with poultry businesses?", a: "Yes! We have built websites for poultry businesses including Ali Poultry Enterprises (you can see it live in our portfolio). We understand the specific needs of Pakistani poultry industry." },
];

export default function PoultryBusinessWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Poultry Business"
        badgeColor="#f97316"
        emoji="🐔"
        heroHeading="Professional Poultry Business Websites for Pakistan"
        heroSubheading="Custom websites for poultry farms, dealers, and suppliers in Pakistan. Product catalog, wholesale pricing, and WhatsApp ordering included."
        industryName="Poultry Business"
        slug="poultry-business-website"
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