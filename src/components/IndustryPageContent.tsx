"use client";

import {
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

interface IndustryFeature {
  title: string;
  description: string;
}

interface IndustryFAQ {
  q: string;
  a: string;
}

interface IndustryPageContentProps {
  badge: string;
  badgeColor: string;
  emoji: string;
  heroHeading: string;
  heroSubheading: string;
  industryName: string;
  features: IndustryFeature[];
  benefits: string[];
  faq: IndustryFAQ[];
  whatsIncluded: string[];
}

export default function IndustryPageContent({
  badge,
  badgeColor,
  emoji,
  heroHeading,
  heroSubheading,
  industryName,
  features,
  benefits,
  faq,
  whatsIncluded,
}: IndustryPageContentProps) {
  return (
    <div className="pt-20 lg:pt-24">

      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10"
          style={{ backgroundColor: badgeColor }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            {/* Emoji Icon */}
            <div className="text-6xl mb-6">{emoji}</div>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
              style={{
                borderColor: `${badgeColor}33`,
                backgroundColor: `${badgeColor}11`,
              }}
            >
              <Sparkles size={12} style={{ color: badgeColor }} />
              <span
                className="text-xs font-medium tracking-wide uppercase"
                style={{ color: badgeColor }}
              >
                {badge}
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
                <MessageCircle size={16} />
                Get Free Quote
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

      {/* PRICE BANNER */}
      <section className="py-8 border-y border-white/4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
              <div>
                <span className="text-4xl font-bold bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                  5,000 PKR
                </span>
                <span className="text-gray-400 ml-2 text-sm">one-time</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-[#06b6d4]" />
                <p className="text-sm text-gray-400">
                  Complete {industryName} website with 3 months support
                </p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm text-gray-400">Currently accepting new clients</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                What Your {industryName} Website Includes
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every feature built specifically for {industryName.toLowerCase()} businesses in Pakistan.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/20 transition-all duration-300 h-full">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 font-bold text-sm"
                    style={{
                      backgroundColor: `${badgeColor}22`,
                      color: badgeColor,
                    }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHATS INCLUDED */}
      <section className="py-20 lg:py-28 bg-white/[0.01] border-y border-white/4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Package Includes
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whatsIncluded.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.06}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/2 border border-white/4">
                  <CheckCircle
                    size={16}
                    className="shrink-0"
                    style={{ color: badgeColor }}
                  />
                  <p className="text-sm text-gray-300">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Why {industryName} Businesses Choose Us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/2 border border-white/4">
                  <CheckCircle
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: badgeColor }}
                  />
                  <p className="text-sm text-gray-300">{benefit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white/[0.01] border-y border-white/4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Common Questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="p-5 rounded-2xl bg-white/2 border border-white/6">
                  <p
                    className="font-semibold text-sm mb-2"
                    style={{ color: badgeColor }}
                  >
                    {item.q}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.a}
                  </p>
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
              Get Your {industryName} Website Today
            </h2>
            <p className="text-gray-400 mb-8">
              Starting at PKR 5,000. Contact us and we will get back within 24
              hours.
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