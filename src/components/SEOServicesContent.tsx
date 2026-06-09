"use client";

import { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Sparkles,
  X,
  TrendingUp,
  Target,
  Award,
  Clock,
  Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { seoPackages, SEOPackage } from "@/lib/seoPackagesData";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

export default function SEOServicesContent() {
  const [selectedPackage, setSelectedPackage] = useState<SEOPackage | null>(
    null
  );

  return (
    <div className="pt-20 lg:pt-24">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-[#8b5cf6]/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 mb-6">
              <Sparkles size={12} className="text-[#8b5cf6]" />
              <span className="text-xs font-medium text-[#8b5cf6] tracking-wide uppercase">
                6 SEO Packages
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              SEO Services{" "}
              <span className="bg-linear-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                in Pakistan
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Rank higher on Google. Get more customers. From{" "}
              <span className="text-white font-semibold">PKR 3,000</span> for
              basic setup to monthly plans. Choose what fits your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-linear-to-r from-[#8b5cf6] to-[#6366f1] rounded-xl hover:shadow-xl hover:shadow-[#8b5cf6]/30 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Get Started
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#packages"
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 border border-white/10 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                Browse Packages
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8 border-t border-white/6">
              <div>
                <div className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                  6
                </div>
                <div className="text-xs text-gray-500 mt-1">Packages</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#06b6d4] to-[#6366f1] bg-clip-text text-transparent">
                  5K
                </div>
                <div className="text-xs text-gray-500 mt-1">PKR Starting</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                  90
                </div>
                <div className="text-xs text-gray-500 mt-1">Day Results</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PACKAGES GRID ─── */}
      <section id="packages" className="py-16 lg:py-24 border-t border-white/4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Choose Your SEO Package
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Click any package to see complete details, deliverables, and
                features.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {seoPackages.map((pkg, index) => (
              <AnimatedSection key={pkg.slug} delay={index * 0.05}>
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className={`group relative w-full text-left p-6 rounded-2xl bg-white/2 border border-white/6 hover:border-[#8b5cf6]/30 hover:bg-white/4 transition-all duration-300 h-full flex flex-col ${
                    pkg.unavailable ? "opacity-75" : ""
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && !pkg.unavailable && (
                    <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white text-[10px] font-bold tracking-wider uppercase shadow-lg shadow-[#6366f1]/30">
                      {pkg.badge}
                    </div>
                  )}

                  {/* Unavailable Badge */}
                  {pkg.unavailable && (
                    <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-linear-to-r from-gray-600 to-gray-700 text-white text-[10px] font-bold tracking-wider uppercase shadow-lg flex items-center gap-1">
                      <Lock size={10} />
                      Unavailable
                    </div>
                  )}

                  {/* Emoji Icon */}
                  <div className={`text-4xl mb-4 ${pkg.unavailable ? "grayscale" : ""}`}>
                    {pkg.emoji}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#8b5cf6] transition-colors">
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {pkg.shortDesc}
                  </p>

                  {/* Price */}
                  <div className="pt-4 border-t border-white/6 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">
                        {pkg.unavailable ? "Currently" : pkg.pricePeriod}
                      </div>
                      <div
                        className="text-lg font-bold"
                        style={{ color: pkg.unavailable ? "#6b7280" : pkg.badgeColor }}
                      >
                        {pkg.unavailable ? "Unavailable" : pkg.price}
                      </div>
                    </div>
                    {pkg.unavailable ? (
                      <Lock
                        size={16}
                        className="text-gray-600"
                      />
                    ) : (
                      <ArrowRight
                        size={16}
                        className="text-gray-600 group-hover:text-[#8b5cf6] group-hover:translate-x-1 transition-all"
                      />
                    )}
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SEO MATTERS ─── */}
      <section className="py-20 lg:py-28 bg-white/1 border-y border-white/4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Why SEO is the Best Investment
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Unlike ads, SEO brings free traffic forever once you rank.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <TrendingUp size={20} />,
                title: "Free Traffic",
                desc: "Once you rank, customers find you without paying for ads.",
                color: "#8b5cf6",
              },
              {
                icon: <Target size={20} />,
                title: "Targeted Visitors",
                desc: "Get people who are actively searching for your products.",
                color: "#06b6d4",
              },
              {
                icon: <Award size={20} />,
                title: "Build Trust",
                desc: "Top Google results are seen as more trustworthy.",
                color: "#6366f1",
              },
              {
                icon: <Clock size={20} />,
                title: "Long-term Results",
                desc: "SEO results compound over time, ads stop when you pause.",
                color: "#ec4899",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white/2 border border-white/6 h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Not Sure Which SEO Package You Need?
            </h2>
            <p className="text-gray-400 mb-8">
              Tell us about your business and we will recommend the perfect SEO
              strategy — completely free consultation.
            </p>
            <a
              href={siteData.contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-linear-to-r from-[#8b5cf6] to-[#6366f1] rounded-xl hover:shadow-xl hover:shadow-[#8b5cf6]/30 transition-all duration-300"
            >
              <MessageCircle size={16} />
              Talk to Us on WhatsApp
              <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PACKAGE MODAL ─── */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPackage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#0c0c14] border border-white/10 overflow-hidden"
            >
              {/* Header */}
              <div
                className="relative p-6 sm:p-8 border-b border-white/6"
                style={{
                  background: selectedPackage.unavailable
                    ? "linear-gradient(to right, #6b728010, transparent)"
                    : `linear-gradient(to right, ${selectedPackage.badgeColor}10, transparent)`,
                }}
              >
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>

                {/* Unavailable Banner */}
                {selectedPackage.unavailable && (
                  <div className="mb-4 p-3 rounded-xl bg-gray-500/10 border border-gray-500/20 flex items-center gap-2">
                    <Lock size={14} className="text-gray-400" />
                    <span className="text-xs font-semibold text-gray-300">
                      This package is currently unavailable
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className={`text-5xl ${selectedPackage.unavailable ? "grayscale" : ""}`}>
                    {selectedPackage.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {selectedPackage.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">
                      {selectedPackage.shortDesc}
                    </p>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-2xl font-bold"
                        style={{
                          color: selectedPackage.unavailable
                            ? "#6b7280"
                            : selectedPackage.badgeColor,
                        }}
                      >
                        {selectedPackage.price}
                      </span>
                      <span className="text-xs text-gray-500">
                        {selectedPackage.pricePeriod}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* For Who */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Perfect For
                  </h4>
                  <p className="text-sm text-gray-300">
                    {selectedPackage.forWho}
                  </p>
                </div>

                {/* What's Included */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    What is Included
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedPackage.whatsIncluded.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="shrink-0 mt-0.5"
                          style={{
                            color: selectedPackage.unavailable
                              ? "#6b7280"
                              : selectedPackage.badgeColor,
                          }}
                        />
                        <span className="text-xs text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPackage.deliverables.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs rounded-full bg-white/3 border border-white/6 text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedPackage.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <span
                          className="shrink-0 mt-1.5 w-1 h-1 rounded-full"
                          style={{
                            backgroundColor: selectedPackage.unavailable
                              ? "#6b7280"
                              : selectedPackage.badgeColor,
                          }}
                        />
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="p-4 rounded-xl bg-[#06b6d4]/5 border border-[#06b6d4]/15">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#06b6d4]" />
                    <span className="text-xs font-semibold text-[#06b6d4]">
                      {selectedPackage.timeline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-white/6 bg-white/2">
                {selectedPackage.unavailable ? (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold text-gray-400 rounded-xl bg-gray-700/30 border border-gray-600/30 cursor-not-allowed"
                  >
                    <Lock size={16} />
                    Currently Unavailable
                  </button>
                ) : (
                  <a
                    href={`${siteData.contactInfo.whatsapp}?text=${encodeURIComponent(
                      `Hi! I am interested in the ${selectedPackage.title} (${selectedPackage.price} ${selectedPackage.pricePeriod}). Please share more details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 hover:shadow-xl"
                    style={{
                      background: `linear-gradient(to right, ${selectedPackage.badgeColor}, ${selectedPackage.badgeColor}cc)`,
                    }}
                  >
                    <MessageCircle size={16} />
                    Get This Package
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}