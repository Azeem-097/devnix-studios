import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServicePageContent from "@/components/ServicePageContent";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Landing Page Design Pakistan — High-Converting Pages | Devnix Studios",
  description:
    "Professional landing page design in Pakistan for Facebook ads, Google ads, and product launches. High-converting, mobile-optimized. Starting at PKR 3,000.",
  keywords: [
    "landing page design Pakistan",
    "landing page Pakistan",
    "Facebook ad landing page Pakistan",
    "conversion landing page Pakistan",
    "product page design Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/landing-page-design" },
  openGraph: {
    title: "Landing Page Design Pakistan | Devnix Studios",
    description: "High-converting landing pages for Pakistan businesses. For ads, products, and campaigns.",
    url: "https://devnixstudios.tech/landing-page-design",
    type: "website",
  },
};

const whatWeDo = [
  { title: "Facebook Ad Landing Pages", description: "Dedicated landing pages designed to convert Facebook and Instagram ad traffic into leads and WhatsApp inquiries." },
  { title: "Product Launch Pages", description: "Single-product pages built to maximize conversions for new product launches and promotional campaigns." },
  { title: "Lead Generation Pages", description: "Pages designed specifically to capture contact information from interested customers for follow-up." },
  { title: "WhatsApp CTA Integration", description: "Every landing page includes a prominent WhatsApp button that pre-fills a message to make contact effortless." },
  { title: "Mobile-First Design", description: "Since most Pakistani ad traffic comes from mobile, our landing pages are built mobile-first for maximum conversions." },
  { title: "A/B Testing Ready", description: "We build landing pages ready for A/B testing so you can optimize your conversion rate over time." },
];

const benefits = [
  "Faster to build than full websites — ready in 3-5 days",
  "Designed specifically to convert visitors into customers",
  "Includes Meta Pixel setup for Facebook ads tracking",
  "Mobile-optimized for Pakistani mobile traffic",
  "WhatsApp integration built in",
  "SEO-optimized even for single pages",
  "Affordable starting price for small businesses",
  "Revisions included until you are satisfied",
];

const faq = [
  { q: "What is a landing page and why do I need one?", a: "A landing page is a focused single page designed for one specific goal — usually to get a visitor to contact you or buy something. It works much better than sending ad traffic to your homepage or Facebook page." },
  { q: "How is a landing page different from a regular website?", a: "A landing page is focused on one action. No navigation menu, no distractions. Just your offer and a clear call-to-action. This focus dramatically increases conversion rates." },
  { q: "Can I use a landing page without a full website?", a: "Yes! A landing page is perfect if you are just starting out or running a specific campaign. You can always expand to a full website later." },
  { q: "Do you install Meta Pixel on the landing page?", a: "Yes! We install Meta Pixel on every landing page so your Facebook ads can track conversions and optimize automatically. First installation is included free." },
  { q: "How much does a landing page cost in Pakistan?", a: "Our landing pages start at PKR 3,000 for a basic single-page design. More complex pages with forms, animations, and integrations cost more. Contact us for a custom quote." },
];

export default function LandingPageDesignPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <ServiceSchema
        name="Landing Page Design Pakistan"
        description="High-converting landing page design in Pakistan for Facebook ads, product launches, and lead generation. Starting at PKR 3,000."
        price="3000"
        slug="landing-page-design"
      />
      <Navbar />
      <ServicePageContent
        badge="Landing Pages"
        badgeColor="#8b5cf6"
        heroHeading="High-Converting Landing Page Design in Pakistan"
        heroSubheading="Stop wasting ad money on pages that do not convert. We build dedicated landing pages that turn your Facebook and Google ad traffic into real customers."
        price="3,000 PKR"
        pricePeriod="starting price"
        priceNote="Price varies based on complexity and features required"
        slug="landing-page-design"
        whatWeDoTitle="What Our Landing Pages Include"
        whatWeDo={whatWeDo}
        benefits={benefits}
        faq={faq}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}