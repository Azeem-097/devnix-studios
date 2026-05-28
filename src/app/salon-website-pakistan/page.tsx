import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Salon Website Pakistan | Beauty Parlor Website Design | Devnix Studios",
  description:
    "Professional salon and beauty parlor website design in Pakistan starting at PKR 5,000. Services menu, price list, before and after gallery, WhatsApp booking. Get more clients today!",
  keywords: [
    "salon website pakistan",
    "beauty parlor website pakistan",
    "salon website design pakistan",
    "beauty salon website pakistan",
    "parlor website pakistan",
    "salon website karachi",
    "salon website lahore",
    "hair salon website pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/salon-website-pakistan",
  },
  openGraph: {
    title: "Salon Website Pakistan | Devnix Studios",
    description:
      "Custom salon and beauty parlor websites in Pakistan starting at PKR 5,000. Services, price list, gallery, booking.",
    url: "https://devnixstudios.tech/salon-website-pakistan",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function SalonPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Salon Websites"
        badgeColor="#ec4899"
        emoji="💅"
        heroHeading="Salon & Beauty Parlor Website in Pakistan"
        heroSubheading="Attract more clients with a stunning salon website. Services menu, price list, before and after gallery, and WhatsApp booking — starting at PKR 5,000."
        industryName="Salon"
        features={[
          {
            title: "Services Menu",
            description:
              "Complete list of all salon services with descriptions and prices so clients know what to expect.",
          },
          {
            title: "Before and After Gallery",
            description:
              "Showcase your work with before and after photos. Let your results speak for themselves.",
          },
          {
            title: "WhatsApp Booking",
            description:
              "Clients book appointments directly via WhatsApp. No booking apps or software needed.",
          },
          {
            title: "Price List",
            description:
              "Transparent pricing displayed on the website so clients know costs before coming in.",
          },
          {
            title: "Location and Hours",
            description:
              "Google Maps and opening hours so clients can easily find you and know when you are open.",
          },
          {
            title: "Instagram Feed",
            description:
              "Connect your Instagram so your latest work automatically appears on the website.",
          },
        ]}
        whatsIncluded={[
          "Custom salon website design",
          "Services and price list",
          "Before and after gallery",
          "WhatsApp booking button",
          "Google Maps location",
          "1 year free hosting",
          "Google Business listing",
          "3 months support",
          "Local SEO optimization",
          "Mobile responsive design",
          "Social media posts for work",
          "Fast loading speed",
        ]}
        benefits={[
          "New clients find you on Google",
          "Show your work before they visit",
          "WhatsApp bookings without apps",
          "Look more professional than competitors",
          "Get found on Google Maps",
          "Social media posts for every service",
        ]}
        faq={[
          {
            q: "Can clients book appointments through the website?",
            a: "Yes! We add a WhatsApp booking button. Clients tap it and message you directly to book. Simple and effective.",
          },
          {
            q: "Can I show before and after photos?",
            a: "Absolutely! A before and after gallery is included. Just send us your photos and we upload them professionally.",
          },
          {
            q: "Can I update services and prices later?",
            a: "Yes! Service and price updates are included in monthly management at no extra cost.",
          },
          {
            q: "Is this good for a home-based salon?",
            a: "Yes! Home-based salons especially benefit from a website. Clients search for salons near them and a website makes you look professional.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}