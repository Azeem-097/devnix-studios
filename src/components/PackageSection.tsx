"use client";

import { CheckCircle, Plus, ArrowRight, Info } from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

export default function PackageSection() {
  return (
    <section id="package" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#06b6d4]/4 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 mb-6">
              <span className="text-xs font-medium text-[#8b5cf6] tracking-wide uppercase">
                Our Package
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              One Package.{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                Everything Included.
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No confusion, no hidden fees. One complete package that covers your
              website, management, SEO, and social media.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Package Card */}
          <AnimatedSection className="lg:col-span-7" direction="left">
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#6366f1]/40 via-[#8b5cf6]/20 to-[#06b6d4]/40">
              <div className="bg-[#0c0c14] rounded-2xl p-8 lg:p-10 h-full">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Business Starter
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Complete website + 3 months management
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                      5,000
                    </div>
                    <div className="text-xs text-gray-500">PKR / website</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {siteData.packageFeatures.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-[#06b6d4] mt-0.5 shrink-0"
                      />
                      <div>
                        <span className="text-sm text-white">{feature.text}</span>
                        {feature.note && (
                          <span className="text-xs text-gray-500 ml-2">
                            — {feature.note}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/[0.06] pt-6 mb-8">
                  <h4 className="text-sm font-semibold text-[#8b5cf6] uppercase tracking-wider mb-4">
                    Monthly Support Includes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {siteData.supportFeatures.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                      >
                        <Plus
                          size={14}
                          className="text-[#6366f1] mt-0.5 shrink-0"
                        />
                        <div>
                          <div className="text-xs font-medium text-white">
                            {feature.text}
                          </div>
                          {feature.detail && (
                            <div className="text-xs text-gray-500 mt-0.5">
                              {feature.detail}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={siteData.contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/20 transition-all duration-300"
                >
                  Get Started Now
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection direction="right" delay={0.1}>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <Info size={16} className="text-[#06b6d4]" />
                  Pricing Breakdown
                </h4>
                <div className="space-y-3">
                  {siteData.pricingBreakdown.map((item, index) => (
                    <div
                      key={item.item}
                      className={`flex items-center justify-between py-3 ${
                        index !== siteData.pricingBreakdown.length - 1
                          ? "border-b border-white/[0.04]"
                          : ""
                      } ${
                        index === siteData.pricingBreakdown.length - 1
                          ? "pt-4"
                          : ""
                      }`}
                    >
                      <div>
                        <div
                          className={`text-sm ${
                            index === siteData.pricingBreakdown.length - 1
                              ? "font-bold text-white"
                              : "text-gray-400"
                          }`}
                        >
                          {item.item}
                        </div>
                        {item.note && (
                          <div className="text-xs text-gray-600 mt-0.5">
                            {item.note}
                          </div>
                        )}
                      </div>
                      <span
                        className={`text-sm font-semibold ${
                          index === siteData.pricingBreakdown.length - 1
                            ? "text-lg bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent"
                            : "text-white"
                        }`}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <Plus size={16} className="text-[#8b5cf6]" />
                  Add-ons
                </h4>
                <div className="space-y-2.5">
                  {siteData.packageAddons.map((addon) => (
                    <div
                      key={addon.item}
                      className="flex items-center justify-between py-2"
                    >
                      <span className="text-sm text-gray-400">{addon.item}</span>
                      <span className="text-sm font-medium text-[#06b6d4]">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}