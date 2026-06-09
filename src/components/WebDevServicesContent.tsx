"use client";

import { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Sparkles,
  X,
  Layout,
  Zap,
  Headphones,
  Calendar,
  Plus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { webPackages, WebPackage } from "@/lib/webPackagesData";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

export default function WebDevServicesContent() {
  const [selectedPackage, setSelectedPackage] = useState<WebPackage | null>(
    null
  );

  return (
    <div className="pt-20 lg:pt-24">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-[#6366f1]/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 mb-6">
              <Sparkles size={12} className="text-[#6366f1]" />
              <span className="text-xs font-medium text-[#6366f1] tracking-wide uppercase">
                12 Website Packages
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Web Development{" "}
              <span className="bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                Services in Pakistan
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Choose from 12 specialized website packages — all at{" "}
              <span className="text-white font-semibold">PKR 20,000</span>. From
              online stores to restaurants, hotels to gyms — we build it all.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/30 transition-all duration-300"
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

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8 border-t border-white/6">
              <div>
                <div className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                  12
                </div>
                <div className="text-xs text-gray-500 mt-1">Packages</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                  20K
                </div>
                <div className="text-xs text-gray-500 mt-1">PKR Starting</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-[#06b6d4] to-[#6366f1] bg-clip-text text-transparent">
                  5K
                </div>
                <div className="text-xs text-gray-500 mt-1">PKR / Month</div>
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
                Choose Your Package
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Click any package to see complete details, included pages, and
                features.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {webPackages.map((pkg, index) => (
              <AnimatedSection key={pkg.slug} delay={index * 0.05}>
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="group relative w-full text-left p-6 rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/30 hover:bg-white/4 transition-all duration-300 h-full flex flex-col"
                >
                  {pkg.popular && (
                    <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white text-[10px] font-bold tracking-wider uppercase shadow-lg shadow-[#6366f1]/30">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="text-4xl mb-4">{pkg.emoji}</div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#6366f1] transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {pkg.shortDesc}
                  </p>

                  <div className="pt-4 border-t border-white/6 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500">Starting at</div>
                      <div
                        className="text-lg font-bold"
                        style={{ color: pkg.badgeColor }}
                      >
                        {pkg.price}
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-gray-600 group-hover:text-[#6366f1] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY ALL PKR 20,000 ─── */}
      <section className="py-20 lg:py-28 bg-white/1 border-y border-white/4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why is everything PKR 20,000?
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              We believe every Pakistani business deserves a professional
              website at an affordable price. No hidden fees, no surprise costs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/2 border border-white/6">
                <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center mb-4 mx-auto">
                  <Layout size={20} className="text-[#6366f1]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Same Quality
                </h3>
                <p className="text-sm text-gray-500">
                  Every package gets the same custom-built quality. No
                  templates, ever.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/2 border border-white/6">
                <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center mb-4 mx-auto">
                  <Zap size={20} className="text-[#8b5cf6]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Same Speed
                </h3>
                <p className="text-sm text-gray-500">
                  All websites delivered in 5-10 days regardless of type.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/2 border border-white/6">
                <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/10 flex items-center justify-center mb-4 mx-auto">
                  <Headphones size={20} className="text-[#06b6d4]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  Optional Support
                </h3>
                <p className="text-sm text-gray-500">
                  Add monthly support at PKR 5,000/mo when you need it.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Not Sure Which Package Fits Your Business?
            </h2>
            <p className="text-gray-400 mb-8">
              Send us a message on WhatsApp and we will recommend the perfect
              package for your business — completely free.
            </p>
            <a
              href={siteData.contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/30 transition-all duration-300"
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
                  background: `linear-gradient(to right, ${selectedPackage.badgeColor}10, transparent)`,
                }}
              >
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>

                <div className="flex items-start gap-4 mb-5">
                  <div className="text-5xl">{selectedPackage.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {selectedPackage.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {selectedPackage.shortDesc}
                    </p>
                  </div>
                </div>

                {/* PRICING - Two-tier */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* One-time */}
                  <div
                    className="p-4 rounded-xl border"
                    style={{
                      borderColor: `${selectedPackage.badgeColor}30`,
                      backgroundColor: `${selectedPackage.badgeColor}08`,
                    }}
                  >
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Website Build
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: selectedPackage.badgeColor }}
                    >
                      {selectedPackage.price}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      one-time payment
                    </div>

                  </div>

                  {/* Monthly */}
                  <div className="p-4 rounded-xl border border-[#06b6d4]/20 bg-[#06b6d4]/5">
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Support & Maintenance
                    </div>
                    <div className="text-2xl font-bold text-[#06b6d4]">
                      {selectedPackage.monthlyPrice}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      per month (optional)
                    </div>
                    <div className="text-[10px] text-gray-600 mt-1 leading-tight">
                      Domain under $15 — premium domains cost extra
                    </div>
                    <div className="text-[10px] text-gray-600 mt-1 leading-tight">
                      May increase with traffic, hosting usage, or workload
                    </div>

                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
                {/* For Who */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Perfect For
                  </h4>
                  <p className="text-sm text-gray-300">
                    {selectedPackage.forWho}
                  </p>
                </div>

                {/* What's Included (One-time) */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    What is Included (One-time Build)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedPackage.whatsIncluded.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="shrink-0 mt-0.5"
                          style={{ color: selectedPackage.badgeColor }}
                        />
                        <span className="text-xs text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pages */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Pages Included ({selectedPackage.pages.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPackage.pages.map((page) => (
                      <span
                        key={page}
                        className="px-3 py-1.5 text-xs rounded-full bg-white/3 border border-white/6 text-gray-300"
                      >
                        {page}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
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
                            backgroundColor: selectedPackage.badgeColor,
                          }}
                        />
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Monthly Support Includes */}
                <div className="p-5 rounded-xl bg-linear-to-br from-[#8b5cf6]/10 via-[#6366f1]/5 to-[#06b6d4]/10 border border-[#8b5cf6]/20">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={14} className="text-[#8b5cf6]" />
                    <h4 className="text-sm font-semibold text-white">
                      Monthly Support Includes
                    </h4>
                    <span className="ml-auto text-[10px] text-[#8b5cf6] px-2 py-0.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 font-semibold">
                      {selectedPackage.monthlyPrice}/mo
                    </span>
                  </div>
                  <div className="space-y-2">
                    {selectedPackage.monthlySupport.map((item) => (
                      <div
                        key={item.text}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-white/2 border border-white/4"
                      >
                        <Plus
                          size={12}
                          className="text-[#6366f1] mt-0.5 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-white">
                            {item.text}
                          </div>
                          <div className="text-[11px] text-gray-500 mt-0.5">
                            {item.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-white/6 bg-white/2">
                <a
                  href={`${siteData.contactInfo.whatsapp}?text=${encodeURIComponent(
                    `Hi! I am interested in the ${selectedPackage.title} package (${selectedPackage.price} one-time + ${selectedPackage.monthlyPrice}/month support). Please share more details.`
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
