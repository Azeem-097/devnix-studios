import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceSchema from "@/components/ServiceSchema";
import ServicePageContent from "@/components/ServicePageContent";

export const metadata: Metadata = {
  title: "Ecommerce Website Development Pakistan | Online Store | Devnix Studios",
  description:
    "Professional ecommerce website development in Pakistan starting at PKR 5,000. Custom online stores with product catalog, categories, WhatsApp ordering. No templates!",
  keywords: [
    "ecommerce website pakistan",
    "online store pakistan",
    "ecommerce development pakistan",
    "online shop pakistan",
    "product catalog website pakistan",
    "ecommerce karachi",
    "ecommerce lahore",
    "online store development pakistan",
    "custom ecommerce pakistan",
    "whatsapp ordering website pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/ecommerce-development-pakistan",
  },
  openGraph: {
    title: "Ecommerce Development Pakistan | Devnix Studios",
    description:
      "Custom online stores for Pakistan businesses starting at PKR 5,000. Product catalog, WhatsApp ordering, SEO included.",
    url: "https://devnixstudios.tech/ecommerce-development-pakistan",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <ServiceSchema
        name="Ecommerce Website Development Pakistan"
        description="Custom ecommerce website development for Pakistan businesses. Product catalog, categories, WhatsApp ordering, SEO optimization, and mobile responsive design."
        price="5000"
        slug="ecommerce-development-pakistan"
      />
      <Navbar />
      <ServicePageContent
        badge="Ecommerce"
        badgeColor="#6366f1"
        heroHeading="Ecommerce Website Development in Pakistan"
        heroSubheading="Get a professional online store for your business. Custom-built product catalog with WhatsApp ordering, SEO, and mobile-friendly design. Starting at PKR 5,000."
        price="5,000 PKR"
        pricePeriod="one-time"
        priceNote="Includes 3 months support and management"
        slug="ecommerce-development-pakistan"
        whatWeDoTitle="What Your Online Store Includes"
        whatWeDo={[
          {
            title: "Custom Product Catalog",
            description:
              "Beautiful product pages with images, descriptions, prices, and categories — all custom built.",
          },
          {
            title: "WhatsApp Ordering",
            description:
              "Customers click a button and instantly message you on WhatsApp to place orders. No payment gateway needed.",
          },
          {
            title: "Category Management",
            description:
              "Organize your products into categories so customers can easily find what they are looking for.",
          },
          {
            title: "Mobile Responsive",
            description:
              "Your online store looks perfect on phones, tablets, and computers. Most Pakistani customers shop on mobile.",
          },
          {
            title: "SEO Optimized",
            description:
              "Every product page is SEO optimized so customers find your products on Google.",
          },
          {
            title: "Fast Loading",
            description:
              "Optimized images and clean code ensure your store loads in under 2 seconds on any connection.",
          },
        ]}
        benefits={[
          "Sell products 24/7 without being online",
          "Customers find you on Google",
          "WhatsApp orders — no complex payment setup",
          "Mobile-first design for Pakistani customers",
          "Add unlimited products over time",
          "Free hosting for first year",
        ]}
        faq={[
          {
            q: "Do I need a payment gateway?",
            a: "No! Our stores use WhatsApp ordering. Customers click a button and message you directly. Simple and effective for Pakistan market.",
          },
          {
            q: "How many products can my store have?",
            a: "Unlimited! We start with 6 products and add 2 per week. You can add as many as you need over time.",
          },
          {
            q: "Can I update products myself?",
            a: "We handle all product updates for you as part of the monthly management package. Just send us the details and we upload them.",
          },
          {
            q: "Is this different from Daraz or OLX?",
            a: "Yes! This is YOUR own website with YOUR brand. You own it completely, no commission fees, and full control over how it looks.",
          },
          {
            q: "Can you add new categories later?",
            a: "Yes! 1 new category is included every 2 weeks. Additional categories cost just 200 PKR each.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}