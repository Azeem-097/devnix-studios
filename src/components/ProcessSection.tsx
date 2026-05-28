"use client";

import { Phone, Settings, Globe, Package } from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

const iconMap: Record<string, React.ReactNode> = {
  Phone: <Phone size={22} />,
  Settings: <Settings size={22} />,
  Globe: <Globe size={22} />,
  Package: <Package size={22} />,
};

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06b6d4]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06b6d4]/20 bg-[#06b6d4]/5 mb-6">
              <span className="text-xs font-medium text-[#06b6d4] tracking-wide uppercase">
                How It Works
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Simple{" "}
              <span className="bg-gradient-to-r from-[#06b6d4] to-[#6366f1] bg-clip-text text-transparent">
                4-Step Process
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              From our first call to your website going live and beyond — here
              is how we work together.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.processSteps.map((step, index) => (
            <AnimatedSection key={step.step} delay={index * 0.15}>
              <div className="relative group h-full">
                {/* Connector Line - Desktop */}
                {index < siteData.processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-[calc(100%-40px)] h-[2px] z-0">
                    <div className="h-full bg-gradient-to-r from-[#6366f1]/40 via-[#8b5cf6]/30 to-transparent" />
                  </div>
                )}

                <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#6366f1]/20 hover:bg-white/[0.04] transition-all duration-500 h-full">
                  {/* Step Badge - Top Left */}
                  <div className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a0a0f] border border-[#6366f1]/30">
                    <span className="text-[10px] font-medium text-gray-500 tracking-widest uppercase">
                      Step
                    </span>
                    <span className="text-xs font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                      0{step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white mb-5 mt-3 group-hover:shadow-lg group-hover:shadow-[#6366f1]/20 transition-shadow duration-500">
                    {iconMap[step.icon]}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}