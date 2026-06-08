"use client";

import {
  CheckCircle,
  ArrowRight,
  MapPin,
  Globe,
  Search,
  Share2,
  Star,
  MessageCircle,
  Zap,
} from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

interface CityPageContentProps {
  city: string;
  slug: string;
  heroHeading: string;
  heroSubheading: string;
  localKeywords: string[];
  nearbyAreas: string[];
}

const services = [
  {
    icon: <Globe size={20} />,
    title: "Custom Website Development",
    description: `Fully custom-built websites for ${"{city}"} businesses. No templates. Fast, modern, and mobile-friendly.`,
    color: "#6366f1",
  },
  {
    icon: <Search size={20} />,
    title: "SEO Optimization",
    description: `Rank higher on Google for ${"{city}"}-based searches. Local SEO that drives real customers to your business.`,
    color: "#8b5cf6",
  },
  {
    icon: <Share2 size={20} />,
    title: "Social Media Management",
    description: `Facebook & Instagram management for your ${"{city}"} business. Professional posts, captions, and hashtags.`,
    color: "#06b6d4",
  },
];

const stats = [
  { value: "5,000", label: "PKR Starting Price", suffix: "" },
  { value: "5", label: "Days Delivery", suffix: "-10" },
  { value: "24", label: "Hour Response", suffix: "h" },
  { value: "100", label: "Custom Built", suffix: "%" },
];

export default function CityPageContent({
  city,
  slug,
  heroHeading,
  heroSubheading,
  nearbyAreas,
}: CityPageContentProps) {
  return (
    <div className="pt-20 lg:pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 mb-6">
              <MapPin size={12} className="text-[#6366f1]" />
              <span className="text-xs font-medium text-[#6366f1] tracking-wide uppercase">
                {city}, Pakistan
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              {heroHeading}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              {heroSubheading}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/30 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 border border-white/10 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                View Services
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
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Services for {city} Businesses
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Everything your {city} business needs to succeed online — under
                one affordable package.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/20 transition-all duration-300 h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white"
                    style={{ backgroundColor: `${service.color}20`, color: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.description.replace("{city}", city)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US FOR THIS CITY */}
      <section className="py-20 lg:py-28 bg-white/[0.01] border-y border-white/4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Why {city} Businesses Choose Devnix Studios
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              `Serving ${city} businesses with 100% custom websites — no templates`,
              `Local SEO targeting ${city} customers and nearby areas`,
              `WhatsApp support — talk directly with your developer`,
              `Affordable pricing designed for Pakistani businesses`,
              `Fast delivery — your ${city} business online in 5-10 days`,
              `Free 1-year hosting + Google Business setup included`,
            ].map((point, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/2 border border-white/4">
                  <CheckCircle size={18} className="text-[#06b6d4] mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-300">{point}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Areas We Serve in {city}
              </h2>
              <p className="text-gray-400">
                We provide website design services to businesses across all
                areas of {city}.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area, index) => (
              <AnimatedSection key={area} delay={index * 0.05}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/3 border border-white/6 hover:border-[#6366f1]/20 transition-all duration-300">
                  <MapPin size={12} className="text-[#6366f1]" />
                  <span className="text-sm text-gray-300">{area}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 lg:py-28 bg-white/[0.01] border-y border-white/4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Website Pricing for {city} Businesses
            </h2>
            <p className="text-gray-400 mb-8">
              Transparent pricing. No hidden fees. Everything included.
            </p>

            <div className="p-px rounded-2xl bg-gradient-to-br from-[#6366f1]/40 to-[#06b6d4]/40">
              <div className="bg-[#0c0c14] rounded-2xl p-8">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent mb-2">
                  20,000 PKR
                </div>
                <div className="text-gray-500 mb-6">Complete website package</div>

                <div className="space-y-3 text-left mb-8">
                  {[
                    "Custom-built website (no templates)",
                    "1 year free hosting",
                    "Google Business listing",
                    "3 months support & management",
                    "SEO optimization",
                    "Social media management",
                    "Mobile responsive design",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#06b6d4] shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={siteData.contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/20 transition-all duration-300"
                >
                  <MessageCircle size={16} />
                  Get Started via WhatsApp
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* REVIEWS PLACEHOLDER */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Pakistan Businesses
            </h2>
            <p className="text-gray-400 mb-8">
              Join growing businesses across Pakistan who trust Devnix Studios.
            </p>

            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/3 border border-white/6">
              <Zap size={16} className="text-[#6366f1]" />
              <span className="text-sm text-gray-300">
                Currently accepting new {city} clients
              </span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-white/4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Your {city} Business Online?
            </h2>
            <p className="text-gray-400 mb-8">
              Contact us today. We will get back to you within 24 hours.
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
