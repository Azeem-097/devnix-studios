import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Restaurant Website Pakistan | Food Business Website | Devnix Studios",
  description:
    "Professional restaurant website design in Pakistan starting at PKR 5,000. Online menu, food gallery, WhatsApp ordering, Google Maps integration. Get more customers today!",
  keywords: [
    "restaurant website pakistan",
    "food business website pakistan",
    "restaurant website design pakistan",
    "online menu pakistan",
    "restaurant website karachi",
    "restaurant website lahore",
    "food delivery website pakistan",
    "cafe website pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/restaurant-website-pakistan",
  },
  openGraph: {
    title: "Restaurant Website Pakistan | Devnix Studios",
    description:
      "Custom restaurant websites in Pakistan starting at PKR 5,000. Online menu, food gallery, WhatsApp ordering.",
    url: "https://devnixstudios.tech/restaurant-website-pakistan",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function RestaurantPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Restaurant Websites"
        badgeColor="#f97316"
        emoji="🍽️"
        heroHeading="Restaurant Website Design in Pakistan"
        heroSubheading="Get more customers with a professional restaurant website. Beautiful food gallery, online menu, WhatsApp ordering, and Google Maps integration — starting at PKR 5,000."
        industryName="Restaurant"
        features={[
          {
            title: "Digital Food Menu",
            description:
              "Full menu with categories, photos, prices, and descriptions. Customers browse your menu online before visiting.",
          },
          {
            title: "Food Gallery",
            description:
              "Beautiful photo gallery of your dishes. High-quality images that make customers hungry and want to visit.",
          },
          {
            title: "WhatsApp Ordering",
            description:
              "Customers click one button to order via WhatsApp. No complicated apps or payment gateways needed.",
          },
          {
            title: "Google Maps Integration",
            description:
              "Your restaurant location embedded on the website so customers can find you easily.",
          },
          {
            title: "Opening Hours",
            description:
              "Display your opening hours, special hours, and holidays so customers always know when you are open.",
          },
          {
            title: "Mobile Optimized",
            description:
              "Most food searches happen on phones. Your restaurant website looks perfect on all mobile devices.",
          },
        ]}
        whatsIncluded={[
          "Custom designed restaurant website",
          "Digital menu with categories",
          "Food photo gallery",
          "WhatsApp order button",
          "Google Maps location",
          "1 year free hosting",
          "Google Business listing",
          "3 months support",
          "SEO for local searches",
          "Mobile responsive design",
          "Social media posts for dishes",
          "Fast loading speed",
        ]}
        benefits={[
          "Customers find your restaurant on Google",
          "Show your menu before they visit",
          "WhatsApp orders without a delivery app",
          "Look more professional than competitors",
          "Get found on Google Maps",
          "Social media posts for every new dish",
        ]}
        faq={[
          {
            q: "Can customers order food through the website?",
            a: "Yes! We integrate a WhatsApp order button so customers can place orders directly via WhatsApp. No complicated payment setup needed.",
          },
          {
            q: "Can I update my menu later?",
            a: "Absolutely. Updating menu items is included in the monthly management. Just send us the new items and we update them.",
          },
          {
            q: "Do you add the restaurant on Google Maps?",
            a: "Yes! Google Business listing and Maps integration is included free with every restaurant website package.",
          },
          {
            q: "How many menu items can I have?",
            a: "We start with 6 items. Monthly management includes 2 new items per week. Additional items cost 150 PKR each.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}