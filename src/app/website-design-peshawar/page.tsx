import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CTASection from "@/components/CTASection";
import { siteData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Website Design in Peshawar | Devnix Studios — Starting 5,000 PKR",
  description: "Professional website design services in Peshawar, Pakistan. Custom-coded websites starting at PKR 5,000. Includes SEO, social media management & 3 months support. Serving Peshawar businesses since 2024.",
  keywords: ["website design Peshawar, web developer Peshawar, IT services KPK", "Devnix Studios Peshawar", "website maker Peshawar", "affordable website Peshawar"],
  alternates: {
    canonical: "/website-design-peshawar",
  },
  openGraph: {
    title: "Website Design in Peshawar | Devnix Studios",
    description: "Affordable custom website design in Peshawar, Pakistan starting at PKR 5,000.",
    url: "https://devnixstudios.tech/website-design-peshawar",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 mb-6">
              <span className="text-xs font-medium text-[#6366f1] tracking-wide uppercase">
                Serving Peshawar, KPK
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Website Design in{" "}
              <span className="bg-linear-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                Peshawar
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Professional custom website design services for businesses in Peshawar, Pakistan. Starting at just{" "}
              <span className="text-white font-semibold">PKR 5,000</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="p-6 rounded-2xl bg-white/2 border border-white/6">
              <div className="text-3xl font-bold text-[#6366f1] mb-2">5,000 PKR</div>
              <div className="text-sm text-gray-400">Starting Price</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/2 border border-white/6">
              <div className="text-3xl font-bold text-[#8b5cf6] mb-2">5-10 Days</div>
              <div className="text-sm text-gray-400">Delivery Time</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/2 border border-white/6">
              <div className="text-3xl font-bold text-[#06b6d4] mb-2">100%</div>
              <div className="text-sm text-gray-400">Custom Code</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Web Development Services in Peshawar
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Peshawar is the gateway to Central Asia and a growing market. Devnix Studios provides affordable, professional web development services to businesses in Peshawar, KPK. Whether you are a small business, startup, or established company, we build custom websites that help you stand out online.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 mt-8">
              Why Peshawar Businesses Choose Devnix Studios
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>✅ Affordable pricing starting at PKR 5,000</li>
              <li>✅ Custom-coded websites (no templates)</li>
              <li>✅ SEO optimization included for Peshawar searches</li>
              <li>✅ Mobile-responsive design</li>
              <li>✅ 1 year free hosting</li>
              <li>✅ Google Business Profile setup</li>
              <li>✅ Social media management (Facebook & Instagram)</li>
              <li>✅ 3 months free support and management</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 mt-8">
              Services We Offer in Peshawar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              <div className="p-4 rounded-xl bg-white/2 border border-white/6">
                <h4 className="text-white font-semibold mb-1">Business Website Design</h4>
                <p className="text-sm text-gray-500">Professional websites for Peshawar businesses</p>
              </div>
              <div className="p-4 rounded-xl bg-white/2 border border-white/6">
                <h4 className="text-white font-semibold mb-1">Ecommerce Development</h4>
                <p className="text-sm text-gray-500">Online stores with product catalogs</p>
              </div>
              <div className="p-4 rounded-xl bg-white/2 border border-white/6">
                <h4 className="text-white font-semibold mb-1">Landing Pages for Ads</h4>
                <p className="text-sm text-gray-500">High-converting pages for Facebook/Google Ads</p>
              </div>
              <div className="p-4 rounded-xl bg-white/2 border border-white/6">
                <h4 className="text-white font-semibold mb-1">SEO Optimization</h4>
                <p className="text-sm text-gray-500">Rank higher on Google in Peshawar</p>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 mt-8">
              Get Your Website in Peshawar Today
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Ready to grow your business in Peshawar? Contact Devnix Studios for a free consultation. We work with clients across Peshawar, KPK, and all of Pakistan. Get a professional website that brings real customers to your business.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
