import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Salon & Spa Website Design Pakistan — Beauty Parlor Sites | Devnix Studios",
  description:
    "Beautiful salon and spa website design in Pakistan. Service menu, online booking, before/after gallery. Starting at PKR 5,000.",
  keywords: [
    "salon website Pakistan",
    "beauty parlor website Pakistan",
    "spa website Pakistan",
    "salon website design Pakistan",
    "barber shop website Pakistan",
    "beauty salon Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/salon-website-pakistan" },
  openGraph: {
    title: "Salon Website Design Pakistan | Devnix Studios",
    description: "Beautiful salon and spa websites with online booking. Starting at PKR 5,000.",
    url: "https://devnixstudios.tech/salon-website-pakistan",
    type: "website",
  },
};

const features = [
  { title: "Service Menu with Prices", description: "Beautiful display of all services — hair, makeup, facial, manicure, etc. — with clear pricing." },
  { title: "Before & After Gallery", description: "Showcase your best transformations. Before/after photos are the most powerful selling tool for salons." },
  { title: "Online Appointment Booking", description: "Clients book appointments via WhatsApp with service, date, and time pre-filled. Most popular Pakistani booking method." },
  { title: "Photo Gallery", description: "Show your salon interior, equipment, products, and work portfolio. Build trust and credibility." },
  { title: "Stylist Profiles", description: "Introduce your beauty experts with photos, specialties, and experience. Clients book confidently." },
  { title: "Promotions Section", description: "Highlight special offers, package deals, and seasonal discounts to attract new clients." },
];

const benefits = [
  "Beautiful design attracts upscale clientele",
  "Before/after gallery sells services better than descriptions",
  "WhatsApp booking matches how Pakistani clients prefer to book",
  "Mobile-optimized — clients browse on Instagram, then book on web",
  "Helps you rank for salon near me searches",
  "Increases foot traffic with Google Maps integration",
  "Showcases your work portfolio professionally",
  "Builds trust with new clients before they visit",
];

const whatsIncluded = [
  "Custom salon website (no templates)",
  "Complete service menu with prices",
  "Before/after gallery section",
  "Up to 5 stylist profiles",
  "WhatsApp booking integration",
  "Photo gallery section",
  "Promotions/offers section",
  "Mobile responsive design",
  "Google Business Profile setup",
  "Free 1-year hosting",
  "3 months management included",
];

const faq = [
  { q: "Can clients book appointments online?", a: "Yes! Clients select the service they want, choose preferred date and time, and click 'Book Now' which opens WhatsApp with everything pre-filled. You confirm via WhatsApp. This is the most popular booking method in Pakistan." },
  { q: "How many services can I add to the menu?", a: "The package includes your complete service menu with all categories (hair, makeup, facial, etc.) and pricing. We typically include 30-50 services. If you have more, we can include them — usually no extra cost." },
  { q: "Can I add before and after photos?", a: "Absolutely! Before/after galleries are essential for salon websites — they sell better than any description. We include a dedicated section and help organize your transformation photos beautifully." },
  { q: "Will my salon show up in Google Maps searches?", a: "Yes! We set up your Google Business Profile so your salon appears in 'salon near me', 'beauty parlor [city]', and similar searches. This brings walk-in clients." },
  { q: "Do you handle the photography of my work?", a: "We do not provide photography services but help you organize photos beautifully. Most salons take their own before/after photos with phone cameras — we just need clear, well-lit images." },
];

export default function SalonWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Salon Websites"
        badgeColor="#ec4899"
        emoji="💇"
        heroHeading="Beautiful Salon & Spa Websites for Pakistan"
        heroSubheading="Modern, elegant websites for beauty salons, spas, and barber shops. Online booking, service menu, and before/after gallery included."
        industryName="Salon"
        slug="salon-website-pakistan"
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