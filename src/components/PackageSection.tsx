"use client";

import {
  CheckCircle,
  Plus,
  ArrowRight,
  Info,
  Layout,
  FileText,
  Package,
} from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

const breakdownIconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={18} />,
  FileText: <FileText size={18} />,
  Package: <Package size={18} />,
};

const breakdownGradients = [
  "from-[#6366f1] to-[#8b5cf6]",
  "from-[#8b5cf6] to-[#06b6d4]",
  "from-[#06b6d4] to-[#6366f1]",
];

export default function PackageSection() {
  return (
    <section
      id="package"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-1/3 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#06b6d4]/4 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 mb-5 sm:mb-6">
              <span className="text-[10px] sm:text-xs font-medium text-[#8b5cf6] tracking-wide uppercase">
                Our Package
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight px-2">
              One Package.{" "}
              <span className="bg-linear-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                Everything Included.
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              No confusion, no hidden fees. One complete package that covers
              your website, management, SEO, and social media.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Package Card */}
          <AnimatedSection className="lg:col-span-7" direction="left">
            <div className="relative p-px rounded-2xl bg-linear-to-br from-[#6366f1]/40 via-[#8b5cf6]/20 to-[#06b6d4]/40">
              <div className="bg-[#0c0c14] rounded-2xl p-5 sm:p-8 lg:p-10 h-full">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-5 sm:pb-0 border-b sm:border-b-0 border-white/6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Business Starter
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Complete website + 3 months management
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                      5,000 PKR
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      / website
                    </div>
                  </div>
                </div>

                {/* Package Features */}
                <div className="space-y-3 mb-6 sm:mb-8">
                  {siteData.packageFeatures.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="text-[#06b6d4] mt-0.5 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs sm:text-sm text-white">
                          {feature.text}
                        </span>
                        {feature.note && (
                          <span className="block sm:inline text-[10px] sm:text-xs text-gray-500 sm:ml-2 mt-0.5 sm:mt-0">
                            — {feature.note}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Website Breakdown - NEW! */}
                <div className="border-t border-white/6 pt-5 sm:pt-6 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-4 rounded-full bg-linear-to-b from-[#6366f1] to-[#06b6d4]" />
                    <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                      What&apos;s Inside Your Website
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {siteData.websiteBreakdown.map((category, index) => (
                      <div
                        key={category.title}
                        className="p-3 sm:p-4 rounded-xl bg-white/2 border border-white/4 hover:border-white/8 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <div
                            className={`w-8 h-8 rounded-lg bg-linear-to-br ${breakdownGradients[index]} flex items-center justify-center text-white shrink-0`}
                          >
                            {breakdownIconMap[category.icon]}
                          </div>
                          <h5 className="text-xs sm:text-sm font-semibold text-white">
                            {category.title}
                          </h5>
                          <span className="ml-auto text-[10px] sm:text-xs text-gray-500 px-2 py-0.5 rounded-full bg-white/4 border border-white/6">
                            {category.items.length} included
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 pl-1">
                          {category.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-400"
                            >
                              <div className="w-1 h-1 rounded-full bg-[#06b6d4] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Monthly Support */}
                <div className="border-t border-white/6 pt-5 sm:pt-6 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-4 rounded-full bg-linear-to-b from-[#8b5cf6] to-[#06b6d4]" />
                    <h4 className="text-xs sm:text-sm font-semibold text-[#8b5cf6] uppercase tracking-wider">
                      Monthly Support Includes
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {siteData.supportFeatures.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-start gap-2 p-2.5 sm:p-3 rounded-xl bg-white/2 border border-white/4"
                      >
                        <Plus
                          size={12}
                          className="text-[#6366f1] mt-0.5 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] sm:text-xs font-medium text-white">
                            {feature.text}
                          </div>
                          {feature.detail && (
                            <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
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
                  className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 sm:py-4 text-sm font-semibold text-white bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/20 transition-all duration-300"
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

          {/* Right Side - Pricing + Addons */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection direction="right" delay={0.1}>
              <div className="p-5 sm:p-6 rounded-2xl bg-white/2 border border-white/6">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-5 flex items-center gap-2">
                  <Info size={16} className="text-[#06b6d4]" />
                  Pricing Breakdown
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {siteData.pricingBreakdown.map((item, index) => (
                    <div
                      key={item.item}
                      className={`flex items-start justify-between gap-3 py-2.5 sm:py-3 ${
                        index !== siteData.pricingBreakdown.length - 1
                          ? "border-b border-white/4"
                          : ""
                      } ${
                        index === siteData.pricingBreakdown.length - 1
                          ? "pt-3 sm:pt-4"
                          : ""
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-xs sm:text-sm ${
                            index === siteData.pricingBreakdown.length - 1
                              ? "font-bold text-white"
                              : "text-gray-400"
                          }`}
                        >
                          {item.item}
                        </div>
                        {item.note && (
                          <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5">
                            {item.note}
                          </div>
                        )}
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-semibold whitespace-nowrap ${
                          index === siteData.pricingBreakdown.length - 1
                            ? "text-base sm:text-lg bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent"
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
              <div className="p-5 sm:p-6 rounded-2xl bg-white/2 border border-white/6">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-5 flex items-center gap-2">
                  <Plus size={16} className="text-[#8b5cf6]" />
                  Add-ons
                </h4>
                <div className="space-y-2 sm:space-y-2.5">
                  {siteData.packageAddons.map((addon) => (
                    <div
                      key={addon.item}
                      className="flex items-center justify-between gap-3 py-1.5 sm:py-2"
                    >
                      <span className="text-xs sm:text-sm text-gray-400">
                        {addon.item}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#06b6d4] whitespace-nowrap">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Stats Card */}
            <AnimatedSection direction="right" delay={0.3}>
              <div className="p-5 sm:p-6 rounded-2xl bg-linear-to-br from-[#6366f1]/10 via-[#8b5cf6]/5 to-[#06b6d4]/10 border border-[#6366f1]/20">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#06b6d4]" />
                  What You Get Initially
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded-xl bg-white/3 border border-white/5">
                    <div className="text-2xl font-bold bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                      6
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
                      Products
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/3 border border-white/5">
                    <div className="text-2xl font-bold bg-linear-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                      2
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
                      Categories
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/3 border border-white/5">
                    <div className="text-2xl font-bold bg-linear-to-r from-[#06b6d4] to-[#6366f1] bg-clip-text text-transparent">
                      5+
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
                      Pages
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/3 border border-white/5">
                    <div className="text-2xl font-bold bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                      6
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
                      Sections
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}