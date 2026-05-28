import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServicePageContent from "@/components/ServicePageContent";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Google Business Profile Setup Pakistan — Google Maps Listing | Devnix Studios",
  description:
    "Get your Pakistan business listed on Google Maps and Google Search. Professional Google Business Profile setup for local businesses. Included free in our website package.",
  keywords: [
    "Google Business Profile Pakistan",
    "Google My Business Pakistan",
    "Google Maps listing Pakistan",
    "local SEO Pakistan",
    "Google Business setup Pakistan",
    "get business on Google Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/google-business-setup" },
  openGraph: {
    title: "Google Business Profile Setup Pakistan | Devnix Studios",
    description: "Get your Pakistan business on Google Maps. Professional Google Business Profile setup.",
    url: "https://devnixstudios.tech/google-business-setup",
    type: "website",
  },
};

const whatWeDo = [
  { title: "Google Business Profile Creation", description: "We create and fully configure your Google Business Profile so your business appears in Google Search and Google Maps." },
  { title: "Business Information Optimization", description: "We write an SEO-optimized business description, add all your services, set accurate business hours, and configure your service area." },
  { title: "Photo Upload & Optimization", description: "We upload and optimize your business photos — logo, storefront, products, and team — with proper titles and descriptions." },
  { title: "Service & Product Listing", description: "We add all your services and products to your GBP profile with descriptions and pricing so customers know exactly what you offer." },
  { title: "Verification Assistance", description: "We guide you through Google verification process to ensure your listing is verified and fully active." },
  { title: "Review Strategy Setup", description: "We set up your review request process and provide templates to help you collect positive Google reviews from happy customers." },
];

const benefits = [
  "Appear in Google Maps when customers search nearby",
  "Show up in Google Search for local queries",
  "Get calls and WhatsApp messages directly from Google",
  "Build trust with star ratings and reviews",
  "Free traffic from Google without paying for ads",
  "Included free with all Devnix Studios website packages",
  "Full optimization — not just basic setup",
  "Ongoing guidance on how to maintain your profile",
];

const faq = [
  { q: "What is Google Business Profile?", a: "Google Business Profile (formerly Google My Business) is a free tool from Google that lets you manage how your business appears in Google Search and Google Maps. It is essential for any local Pakistan business." },
  { q: "How long does it take to appear on Google Maps?", a: "After verification, your business typically appears on Google Maps within 3-7 days. Full ranking in local search results takes 2-4 weeks of profile optimization." },
  { q: "Is Google Business Profile free?", a: "Yes! Creating and maintaining a Google Business Profile is completely free. There are no charges from Google. Our setup service has a one-time fee." },
  { q: "Do I need a physical address to get listed on Google Maps?", a: "You can get listed even without a physical storefront. For service-area businesses (like web designers or plumbers), you can set a service area instead of a specific address." },
  { q: "Is this included in your website package?", a: "Yes! Google Business Profile setup is included free with all our website packages at PKR 5,000. You do not need to pay extra for this service." },
];

export default function GoogleBusinessSetupPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <ServiceSchema
        name="Google Business Profile Setup Pakistan"
        description="Professional Google Business Profile setup for Pakistan businesses. Get listed on Google Maps and Google Search. Free with all website packages."
        slug="google-business-setup"
      />
      <Navbar />
      <ServicePageContent
        badge="Google Business"
        badgeColor="#10b981"
        heroHeading="Get Your Pakistan Business on Google Maps"
        heroSubheading="When customers in your city search for your service, your business should appear. We set up and optimize your Google Business Profile so local customers can find you instantly."
        price="Included Free"
        pricePeriod="with website package"
        priceNote="Or PKR 1,500 standalone setup for businesses that already have a website"
        slug="google-business-setup"
        whatWeDoTitle="What Our Google Business Setup Includes"
        whatWeDo={whatWeDo}
        benefits={benefits}
        faq={faq}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}