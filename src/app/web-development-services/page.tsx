import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ServicePageContent from "@/components/ServicePageContent";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Web Development Services Pakistan — Custom Websites | Devnix Studios",
  description:
    "Professional web development services in Pakistan. Custom-coded websites built from scratch. Fast, SEO-optimized, mobile-responsive. Starting at PKR 5,000.",
  keywords: [
    "web development services Pakistan",
    "custom web development Pakistan",
    "website development company Pakistan",
    "professional web developer Pakistan",
    "Next.js developer Pakistan",
    "React developer Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/web-development-services" },
  openGraph: {
    title: "Web Development Services Pakistan | Devnix Studios",
    description: "Custom web development services in Pakistan starting at PKR 5,000.",
    url: "https://devnixstudios.tech/web-development-services",
    type: "website",
  },
};

const whatWeDo = [
  { title: "Custom Frontend Development", description: "Built with Next.js and React — the same technology used by Netflix, Airbnb, and major Pakistani companies. Fast, modern, and SEO-friendly." },
  { title: "Responsive Mobile Design", description: "Over 70% of Pakistani internet users browse on mobile. Every website we build looks and works perfectly on all screen sizes." },
  { title: "Performance Optimization", description: "We optimize images, minimize code, and use CDN delivery to ensure your website loads in under 2 seconds anywhere in Pakistan." },
  { title: "API Integration", description: "Connect your website to WhatsApp Business API, Google Maps, payment gateways, and third-party services." },
  { title: "Database & Backend", description: "From simple contact forms to complex product catalogs — we build the backend infrastructure your business needs." },
  { title: "Deployment & Hosting", description: "We deploy on enterprise-grade platforms like Vercel and Cloudflare for maximum uptime and speed. First year free." },
];

const benefits = [
  "100% custom code — no templates or page builders",
  "Built with Next.js 15 — the fastest web framework available",
  "SEO-optimized from line one of code",
  "Mobile-first development for Pakistani users",
  "Free 1-year hosting on enterprise platforms",
  "Source code ownership — it is yours completely",
  "5-10 day delivery for most projects",
  "Direct WhatsApp communication with your developer",
];

const faq = [
  { q: "What technology do you use to build websites?", a: "We build all websites using Next.js 15 and React — the same technology stack used by major global companies. This gives you unmatched performance, SEO, and scalability." },
  { q: "Can you rebuild my existing website?", a: "Yes! We can rebuild your existing website from scratch with better performance, modern design, and proper SEO optimization." },
  { q: "Will I own the code after it is built?", a: "Absolutely. You own 100% of the code and website once payment is complete. We do not hold your website hostage." },
  { q: "Do you build e-commerce websites?", a: "Yes — we build product catalog websites with WhatsApp ordering and also full e-commerce with payment gateway integration." },
  { q: "How do you ensure my website is fast?", a: "We use Next.js server-side rendering, image optimization (WebP/AVIF), CDN delivery via Cloudflare, and code splitting to achieve load times under 2 seconds." },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <ServiceSchema
        name="Web Development Services Pakistan"
        description="Custom web development services in Pakistan. Built with Next.js and React. Fast, SEO-optimized, mobile-responsive websites starting at PKR 5,000."
        price="5000"
        slug="web-development-services"
      />
      <Navbar />
      <ServicePageContent
        badge="Web Development"
        badgeColor="#6366f1"
        heroHeading="Custom Web Development Services in Pakistan"
        heroSubheading="We build fast, SEO-optimized, custom websites using Next.js and React. No templates. No shortcuts. Just clean, professional code that works."
        price="5,000 PKR"
        pricePeriod="one-time"
        priceNote="Complete website with hosting, SEO, and 3 months support"
        slug="web-development-services"
        whatWeDoTitle="What Our Web Development Includes"
        whatWeDo={whatWeDo}
        benefits={benefits}
        faq={faq}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}