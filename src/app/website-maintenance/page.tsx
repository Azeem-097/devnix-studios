import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServicePageContent from "@/components/ServicePageContent";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Website Maintenance Pakistan — Ongoing Support & Updates | Devnix Studios",
  description:
    "Professional website maintenance services in Pakistan. Bug fixes, updates, content changes, performance monitoring, and ongoing support. Starting at PKR 2,500/month.",
  keywords: [
    "website maintenance Pakistan",
    "website support Pakistan",
    "website updates Pakistan",
    "website management Pakistan",
    "website care plan Pakistan",
    "ongoing website support Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/website-maintenance" },
  openGraph: {
    title: "Website Maintenance Pakistan | Devnix Studios",
    description: "Professional website maintenance and support services in Pakistan. Starting at PKR 2,500/month.",
    url: "https://devnixstudios.tech/website-maintenance",
    type: "website",
  },
};

const whatWeDo = [
  { title: "Bug Fixes & Error Resolution", description: "We monitor and fix any bugs, broken links, or errors that appear on your website — keeping everything running smoothly." },
  { title: "Content Updates", description: "Need to update prices, add new information, change photos, or update business hours? We handle all content changes quickly." },
  { title: "Product & Category Management", description: "Regular product uploads, category updates, image optimization, and SEO meta tags for new items added to your catalog." },
  { title: "Performance Monitoring", description: "We monitor your website loading speed and performance, making adjustments to keep your Core Web Vitals scores high." },
  { title: "Security Monitoring", description: "We monitor your website for security issues and ensure your hosting environment remains secure and up-to-date." },
  { title: "Social Media Management", description: "Facebook and Instagram posts for each new product or update — with professional captions and relevant hashtags." },
];

const benefits = [
  "No need to learn how to update your own website",
  "Fast turnaround — most updates done within 24-48 hours",
  "2 product uploads per week included",
  "Basic SEO added to every new product",
  "Social media posts with every product added",
  "Monthly performance report",
  "Direct WhatsApp communication for requests",
  "No long-term contracts — month by month",
];

const faq = [
  { q: "What is included in the monthly maintenance?", a: "Our standard maintenance package includes 2 product uploads per week, basic SEO for each product, 1 new category every 2 weeks, 2 product revisions per month, and Facebook/Instagram posts for each product." },
  { q: "How do I submit update requests?", a: "Simply send us a WhatsApp message with your update request. We will confirm receipt and let you know the expected completion time — usually within 24-48 hours." },
  { q: "Can I add more products than the included amount?", a: "Yes! Extra products cost PKR 150 each, including SEO optimization and a social media post. Extra categories cost PKR 200 each." },
  { q: "What if I want to change my website theme or add a new page?", a: "Theme customizations cost PKR 500-1000+ depending on complexity. New page additions cost PKR 300 per page. These are billed separately from the monthly fee." },
  { q: "Do you offer maintenance for websites not built by you?", a: "Yes, we can maintain websites we did not build. We will review your website first and provide a custom maintenance quote based on what is needed." },
];

export default function WebsiteMaintenancePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <ServiceSchema
        name="Website Maintenance Pakistan"
        description="Professional website maintenance services in Pakistan. Bug fixes, content updates, product management, and ongoing support starting at PKR 2,500/month."
        price="2500"
        slug="website-maintenance"
      />
      <Navbar />
      <ServicePageContent
        badge="Website Maintenance"
        badgeColor="#06b6d4"
        heroHeading="Professional Website Maintenance Services in Pakistan"
        heroSubheading="Keep your website fresh, fast, and fully managed without lifting a finger. We handle all updates, products, SEO, and social media so you can focus on your business."
        price="2,500 PKR"
        pricePeriod="per month"
        priceNote="Includes 2 products/week, SEO, social media posts, and ongoing support"
        slug="website-maintenance"
        whatWeDoTitle="What Our Maintenance Service Includes"
        whatWeDo={whatWeDo}
        benefits={benefits}
        faq={faq}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}