"use client";

import {
  Globe,
  Search,
  Share2,
  Package,
  MapPin,
  Settings,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: <Globe size={24} />,
    title: "Custom Website Development",
    description:
      "Fully custom-built websites with admin panel. No templates, no drag-and-drop. Clean code, fast performance, and unique design.",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    link: "/web-development-services",
    linkText: "Learn More",
  },
  {
    icon: <Search size={24} />,
    title: "SEO Optimization",
    description:
      "On-page SEO for every product and page. Meta tags, image alt texts, structured data, keyword optimization, and local SEO targeting.",
    gradient: "from-[#8b5cf6] to-[#a78bfa]",
    link: "/seo-services-pakistan",
    linkText: "Learn More",
  },
  {
    icon: <Share2 size={24} />,
    title: "Admin Panel Access",
    description:
      "Easy-to-use admin panel included with every website. Manage your content, products, and orders without technical knowledge.",
    gradient: "from-[#06b6d4] to-[#22d3ee]",
    link: null,
    linkText: null,
  },
  {
    icon: <Package size={24} />,
    title: "E-commerce Development",
    description:
      "Online stores with product catalog, WhatsApp ordering, payment integration, and inventory management — perfect for Pakistani businesses.",
    gradient: "from-[#6366f1] to-[#06b6d4]",
    link: null,
    linkText: null,
  },
  {
    icon: <MapPin size={24} />,
    title: "Landing Page Design",
    description:
      "High-converting landing pages for Facebook ads, Google ads, and product launches. Optimized to turn visitors into customers.",
    gradient: "from-[#8b5cf6] to-[#06b6d4]",
    link: null,
    linkText: null,
  },
  {
    icon: <Settings size={24} />,
    title: "Complete Package",
    description:
      "Everything you need in one affordable package — website, SEO, admin panel, Google Business, hosting, and 3 months of management.",
    gradient: "from-[#06b6d4] to-[#6366f1]",
    link: null,
    linkText: null,
  },
];

const stats = [
  { value: "20,000", label: "PKR Starting Price" },
  { value: "6", label: "Core Services" },
  { value: "3", label: "Months Support" },
  { value: "100%", label: "Custom Built" },
];

export default function ServicesPageContent() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 mb-6">
              <Sparkles size={12} className="text-[#6366f1]" />
              <span className="text-xs font-medium text-[#6366f1] tracking-wide uppercase">
                Our Services
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Everything Your Business{" "}
              <span className="bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                Needs Online
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              From custom website development with admin panel to SEO and ongoing
              management — we handle everything so you can focus on your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/30 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Get Free Quote
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 border-y border-white/4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Complete Service List
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                All services are included in our PKR 20,000 starter package. No
                hidden fees.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="group relative p-6 lg:p-8 rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/20 hover:bg-white/4 transition-all duration-500 h-full flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 group-hover:shadow-lg group-hover:shadow-[#6366f1]/15 transition-shadow duration-500`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#6366f1] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {service.link && (
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-[#6366f1] hover:text-[#8b5cf6] transition-colors group/link"
                    >
                      {service.linkText}
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  )}

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366f1]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-white/4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-8">
              All services included in one premium package. Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/30 transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp Us Now
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href={`mailto:${siteData.contactInfo.email}`}
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 border border-white/10 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
