"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import FAQSchema from "./FAQSchema";

export default function FAQsPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = siteData.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 lg:pt-24">
      <FAQSchema
        faqs={siteData.faqs}
        pageUrl="https://devnixstudios.tech/faqs"
      />

      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#06b6d4]/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06b6d4]/20 bg-[#06b6d4]/5 mb-6">
              <Sparkles size={12} className="text-[#06b6d4]" />
              <span className="text-xs font-medium text-[#06b6d4] tracking-wide uppercase">
                Help Center
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Frequently Asked{" "}
              <span className="bg-linear-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Everything you need to know about our web development, SEO, and
              digital services in Pakistan.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Search for a question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/3 border border-white/6 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#06b6d4]/40 focus:bg-white/5 transition-all"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs LIST */}
      <section className="py-16 lg:py-24 border-t border-white/4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-12">
                <HelpCircle size={48} className="text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 mb-2">
                  No questions found matching &quot;{searchTerm}&quot;
                </p>
                <p className="text-sm text-gray-500">
                  Try a different keyword or contact us directly.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <div
                    className={`rounded-2xl border transition-all duration-300 ${
                      openIndex === index
                        ? "bg-white/3 border-[#06b6d4]/20"
                        : "bg-white/[0.01] border-white/6 hover:border-white/10"
                    }`}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                    >
                      <span
                        className={`text-sm lg:text-base font-medium pr-4 transition-colors duration-300 ${
                          openIndex === index ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-gray-500 transition-transform duration-300 ${
                          openIndex === index
                            ? "rotate-180 text-[#06b6d4]"
                            : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                            <p className="text-sm text-gray-500 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS CTA */}
      <section className="py-20 lg:py-28 bg-white/1 border-y border-white/4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-[#06b6d4] to-[#6366f1] mb-6">
              <HelpCircle size={24} className="text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              our team and we will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/30 transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp Us
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