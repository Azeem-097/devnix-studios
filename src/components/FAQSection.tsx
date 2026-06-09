"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import FAQSchema from "./FAQSchema";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* FAQ Schema - ONLY on homepage */}
      <FAQSchema
        faqs={siteData.faqs}
        pageUrl="https://devnixstudios.tech/"
      />

      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#06b6d4]/4 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06b6d4]/20 bg-[#06b6d4]/5 mb-6">
              <span className="text-xs font-medium text-[#06b6d4] tracking-wide uppercase">
                Got Questions?
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Frequently Asked{" "}
              <span className="bg-linear-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl mx-auto">
              Everything you need to know about our services and how we work.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {siteData.faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-white/3 border-[#6366f1]/20"
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
                      openIndex === index ? "rotate-180 text-[#6366f1]" : ""
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
      </div>
    </section>
  );
}