import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServicePageContent from "@/components/ServicePageContent";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Facebook Ads Setup Pakistan — Meta Pixel & Campaign Setup | Devnix Studios",
  description:
    "Professional Facebook and Instagram ads setup in Pakistan. Meta Pixel installation, campaign creation, and audience targeting. Get more customers from social media.",
  keywords: [
    "Facebook ads Pakistan",
    "Facebook ads setup Pakistan",
    "Meta Pixel installation Pakistan",
    "Instagram ads Pakistan",
    "social media advertising Pakistan",
    "Facebook marketing Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/facebook-ads-setup" },
  openGraph: {
    title: "Facebook Ads Setup Pakistan | Devnix Studios",
    description: "Professional Facebook and Instagram ads setup for Pakistan businesses. Meta Pixel, campaigns, and targeting.",
    url: "https://devnixstudios.tech/facebook-ads-setup",
    type: "website",
  },
};

const whatWeDo = [
  { title: "Meta Pixel Installation", description: "We install and configure Meta Pixel on your website so Facebook can track visitors, measure conversions, and optimize your ads automatically." },
  { title: "Facebook Business Manager Setup", description: "Complete setup of your Facebook Business Manager account, ad account, and payment method — ready to run ads from day one." },
  { title: "Audience Research & Targeting", description: "We research your ideal Pakistani customers — their interests, demographics, and behaviors — to build laser-targeted audiences for your ads." },
  { title: "Campaign Structure Setup", description: "We create properly structured campaigns with the right objectives — awareness, leads, messages, or conversions — based on your business goal." },
  { title: "Ad Creative Guidance", description: "We advise on the best ad formats, copy strategies, and visual guidelines that work for Pakistani audiences." },
  { title: "WhatsApp Click Ads", description: "Setup click-to-WhatsApp ads that send interested customers directly to your WhatsApp — the most effective ad format for Pakistani businesses." },
];

const benefits = [
  "Meta Pixel installed and verified correctly",
  "Proper campaign structure for maximum efficiency",
  "Pakistan-specific audience targeting",
  "WhatsApp click ads — highest converting format for Pakistan",
  "Avoid the most common ad mistakes that waste money",
  "Full handover with training on how to manage ads",
  "24-hour WhatsApp support during setup",
  "Works alongside your existing website",
];

const faq = [
  { q: "What is Meta Pixel and why do I need it?", a: "Meta Pixel is a tracking code you add to your website. It tells Facebook which visitors came from your ads, what they did on your website, and lets Facebook optimize your ads to find more customers like them. Without it, your ads are blind." },
  { q: "Do I need a website to run Facebook ads?", a: "For most ad types, a website significantly improves results. We recommend running ads to a proper landing page or website rather than your Facebook page. We can build both for you." },
  { q: "How much should I spend on Facebook ads in Pakistan?", a: "For Pakistani businesses starting out, PKR 3,000 to 8,000 per month is a reasonable test budget. We recommend starting small, measuring results, and scaling what works." },
  { q: "What type of Facebook ads work best in Pakistan?", a: "Click-to-WhatsApp ads are the highest converting for most Pakistani businesses. Pakistani customers prefer to inquire via WhatsApp before buying. We specialize in setting these up correctly." },
  { q: "Can you manage my Facebook ads ongoing?", a: "Our current service covers setup and configuration. For ongoing ad management, contact us on WhatsApp to discuss a custom arrangement." },
];

export default function FacebookAdsSetupPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <ServiceSchema
        name="Facebook Ads Setup Pakistan"
        description="Professional Facebook and Instagram ads setup in Pakistan. Meta Pixel installation, campaign creation, and audience targeting for Pakistani businesses."
        price="2000"
        slug="facebook-ads-setup"
      />
      <Navbar />
      <ServicePageContent
        badge="Facebook Ads"
        badgeColor="#f59e0b"
        heroHeading="Facebook & Instagram Ads Setup for Pakistan Businesses"
        heroSubheading="Stop wasting money on poorly setup Facebook ads. We configure your Meta Pixel, campaigns, and audience targeting correctly so every rupee you spend works harder."
        price="2,000 PKR"
        pricePeriod="one-time setup"
        priceNote="Includes Meta Pixel installation, Business Manager setup, and campaign creation"
        slug="facebook-ads-setup"
        whatWeDoTitle="What Our Facebook Ads Setup Includes"
        whatWeDo={whatWeDo}
        benefits={benefits}
        faq={faq}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}