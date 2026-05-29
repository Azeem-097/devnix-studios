"use client";

import {
  CheckCircle,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import FAQSchema from "./FAQSchema";

interface WhatWeDoItem {
  title: string;
  description: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface ServicePageContentProps {
  badge: string;
  badgeColor: string;
  heroHeading: string;
  heroSubheading: string;
  price: string;
  pricePeriod: string;
  priceNote: string;
  slug: string;
  whatWeDoTitle: string;
  whatWeDo: WhatWeDoItem[];
  benefits: string[];
  faq: FAQItem[];
}

export default function ServicePageContent({
  badge,
  badgeColor,
  heroHeading,
  heroSubheading,
  price,
  pricePeriod,
  priceNote,
  slug,
  whatWeDoTitle,
  whatWeDo,
  benefits,
  faq,
}: ServicePageContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqsForSchema = faq.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  return (
    <div className="pt-20 lg:pt-24">
      {/* FAQ SCHEMA */}
      <FAQSchema
        faqs={faqsForSchema}
        pageUrl={`https://devnixstudios.tech/${slug}`}
      />

      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10"
          style={{ backgroundColor: badgeColor }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <div>
                <span className="text-4xl font-bold bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                  {price}
                </span>
                <span className="text-gray-400 ml-2 text-sm">{pricePeriod}</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10" />
              <p className="text-sm text-gray-500">{priceNote}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {whatWeDoTitle}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDo.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
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
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 lg:py-28 bg-white/[0.01] border-y border-white/4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose This Service
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/2 border border-white/4">
                  <CheckCircle
                    size={18}
                    className="shrink-0"
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
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {faq.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    openFaq === index
                      ? "bg-white/3 border-[#6366f1]/20"
                      : "bg-white/[0.01] border-white/6"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span
                      className={`text-sm font-medium pr-4 ${
                        openFaq === index ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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