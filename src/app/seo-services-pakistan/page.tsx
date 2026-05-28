import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceSchema from "@/components/ServiceSchema";
import ServicePageContent from "@/components/ServicePageContent";

export const metadata: Metadata = {
  title: "SEO Services Pakistan | Rank on Google | Devnix Studios",
  description:
    "Professional SEO services in Pakistan starting at PKR 2,500/month. On-page SEO, keyword optimization, meta tags, structured data. Rank higher on Google today!",
  keywords: [
    "seo services pakistan",
    "seo optimization pakistan",
    "google ranking pakistan",
    "local seo pakistan",
    "on page seo pakistan",
    "seo expert pakistan",
    "affordable seo pakistan",
    "seo karachi",
    "seo lahore",
    "seo islamabad",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/seo-services-pakistan",
  },
  openGraph: {
    title: "SEO Services Pakistan | Devnix Studios",
    description:
      "Rank higher on Google with our affordable SEO services in Pakistan. Starting at PKR 2,500/month.",
    url: "https://devnixstudios.tech/seo-services-pakistan",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function SEOServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <ServiceSchema
        name="SEO Services Pakistan"
        description="Professional SEO optimization services in Pakistan. On-page SEO, keyword research, meta tags, structured data, and Google ranking improvement."
        price="2500"
        slug="seo-services-pakistan"
      />
      <Navbar />
      <ServicePageContent
        badge="SEO Services"
        badgeColor="#8b5cf6"
        heroHeading="SEO Services in Pakistan"
        heroSubheading="Rank higher on Google and get more customers finding your business online. Professional SEO optimization starting at PKR 2,500/month."
        price="2,500 PKR"
        pricePeriod="/ month"
        priceNote="Included free with website package"
        slug="seo-services-pakistan"
        whatWeDoTitle="What Our SEO Service Includes"
        whatWeDo={[
          {
            title: "Keyword Research",
            description:
              "We find the exact keywords your customers are searching for in Pakistan and target them strategically.",
          },
          {
            title: "On-Page SEO",
            description:
              "Optimize every page with proper title tags, meta descriptions, headings, and keyword placement.",
          },
          {
            title: "Image Optimization",
            description:
              "Compress images, add descriptive alt texts, and convert to WebP format for faster loading.",
          },
          {
            title: "Structured Data",
            description:
              "Add schema markup so Google understands your business, products, and services better.",
          },
          {
            title: "Local SEO",
            description:
              "Target city-specific keywords so customers in your area find you on Google Maps and search.",
          },
          {
            title: "SEO Reports",
            description:
              "Monthly reports showing your rankings, traffic growth, and what we improved.",
          },
        ]}
        benefits={[
          "More customers finding you on Google",
          "Higher ranking than your competitors",
          "Free SEO included with every website",
          "Local Pakistan city targeting",
          "Product-level SEO for every item",
          "Monthly performance tracking",
        ]}
        faq={[
          {
            q: "How long does SEO take to show results?",
            a: "SEO typically shows results in 3-6 months. Local SEO for Pakistan can show results faster, sometimes within 4-8 weeks.",
          },
          {
            q: "Is SEO included in the website package?",
            a: "Yes! Basic on-page SEO is included free with every website package. This includes meta tags, alt texts, and structured data for all pages.",
          },
          {
            q: "Do you do SEO for e-commerce products?",
            a: "Absolutely. Every product we upload gets basic SEO including title, description, meta tags, and image alt texts.",
          },
          {
            q: "What is Local SEO?",
            a: "Local SEO helps your business rank when people search for services in their city, like website designer Karachi or web development Lahore.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}