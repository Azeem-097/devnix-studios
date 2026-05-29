import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Restaurant Website Design Pakistan — Menu, Online Order | Devnix Studios",
  description:
    "Custom restaurant website design in Pakistan. Online menu, food ordering, WhatsApp integration, table reservations. Starting at PKR 5,000.",
  keywords: [
    "restaurant website Pakistan",
    "restaurant website design Pakistan",
    "food website Pakistan",
    "online menu Pakistan",
    "restaurant online ordering Pakistan",
    "cafe website Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/restaurant-website-pakistan" },
  openGraph: {
    title: "Restaurant Website Design Pakistan | Devnix Studios",
    description: "Custom restaurant websites with online menu and ordering. Starting at PKR 5,000.",
    url: "https://devnixstudios.tech/restaurant-website-pakistan",
    type: "website",
  },
};

const features = [
  { title: "Beautiful Menu Display", description: "Photo-rich menu with categories, prices, and descriptions. Easy for hungry customers to browse and decide." },
  { title: "WhatsApp Ordering", description: "One-click WhatsApp button on every menu item. Customer's order pre-fills the message — fastest way to take orders." },
  { title: "Table Reservation System", description: "Online table booking with confirmation. Reduces no-shows and helps you manage capacity better." },
  { title: "Photo Gallery", description: "Showcase your dishes, ambiance, and happy customers. Great food photos sell themselves." },
  { title: "Location & Hours", description: "Google Maps integration, business hours, contact info. Customers find you instantly." },
  { title: "Reviews Section", description: "Display Google reviews and customer testimonials. Build trust before they even visit." },
];

const benefits = [
  "Online presence helps you compete with FoodPanda restaurants",
  "Direct customer relationship without commission fees",
  "Photo gallery sells your food better than text descriptions",
  "WhatsApp integration matches Pakistani customer behavior",
  "Mobile-friendly for customers ordering on the go",
  "SEO-optimized to appear when locals search for food",
  "Builds trust for new customers who research online",
  "Reduces phone call volume with self-service info",
];

const whatsIncluded = [
  "Custom restaurant website (no templates)",
  "Up to 50 menu items pre-loaded",
  "Photo gallery section",
  "WhatsApp ordering integration",
  "Google Maps location",
  "Table reservation form",
  "Mobile responsive design",
  "Google Business Profile setup",
  "Free 1-year hosting",
  "3 months management included",
];

const faq = [
  { q: "Can customers place orders directly on the website?", a: "Yes! We integrate WhatsApp ordering — when customers click 'Order Now' on any menu item, it opens WhatsApp with the order pre-filled. This is faster and more convenient than complex checkout systems for Pakistani customers." },
  { q: "Can I update my menu prices myself?", a: "Yes! With our 3-month management package, we update menu items, prices, and add new dishes for you. After 3 months, you can extend management or learn to update yourself." },
  { q: "Will my restaurant appear on Google Maps?", a: "Yes! We set up your Google Business Profile so your restaurant appears in Google Maps and 'restaurants near me' searches. This is included in the package." },
  { q: "How many menu items can I add?", a: "The package includes up to 50 menu items pre-loaded with photos and descriptions. Additional items cost PKR 150 each, including SEO optimization." },
  { q: "Do you handle food photography?", a: "We do not provide photography but we optimize and arrange your photos beautifully. If you do not have photos, we can recommend affordable Pakistani food photographers in your city." },
];

export default function RestaurantWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Restaurant Websites"
        badgeColor="#ef4444"
        emoji="🍽️"
        heroHeading="Professional Restaurant Websites for Pakistan"
        heroSubheading="Beautiful, mobile-friendly websites for restaurants, cafes, and food businesses in Pakistan. Online menu, WhatsApp ordering, and table reservations included."
        industryName="Restaurant"
        slug="restaurant-website-pakistan"
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