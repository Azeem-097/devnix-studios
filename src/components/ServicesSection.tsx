"use client";

import {
  Globe,
  Search,
  Share2,
  Package,
  MapPin,
  Settings,
} from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={24} />,
  Search: <Search size={24} />,
  Share2: <Share2 size={24} />,
  Package: <Package size={24} />,
  MapPin: <MapPin size={24} />,
  Settings: <Settings size={24} />,
};

const gradients = [
  "from-[#6366f1] to-[#8b5cf6]",
  "from-[#8b5cf6] to-[#a78bfa]",
  "from-[#06b6d4] to-[#22d3ee]",
  "from-[#6366f1] to-[#06b6d4]",
  "from-[#8b5cf6] to-[#06b6d4]",
  "from-[#06b6d4] to-[#6366f1]",
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#6366f1]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 mb-6">
              <span className="text-xs font-medium text-[#6366f1] tracking-wide uppercase">
                What We Offer
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Everything Your Business{" "}
              <span className="bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                Needs Online
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              From custom website development to ongoing management, SEO, and
              social media — we handle it all.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="group relative p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#6366f1]/20 hover:bg-white/[0.04] transition-all duration-500 h-full">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white mb-5 group-hover:shadow-lg group-hover:shadow-[#6366f1]/15 transition-shadow duration-500`}
                >
                  {iconMap[service.icon]}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#6366f1] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366f1]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}