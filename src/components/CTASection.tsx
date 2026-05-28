"use client";

import { Phone, Mail, MapPin, Sparkles, MessageCircle } from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";
import ContactForm from "./ContactForm";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#6366f1]/6 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 mb-5 sm:mb-6">
              <Sparkles size={10} className="text-[#06b6d4]" />
              <span className="text-[10px] sm:text-xs font-medium text-[#06b6d4] tracking-wide uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight px-2">
              Let&apos;s Build Your{" "}
              <span className="bg-linear-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                Online Presence
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Have a project in mind? Send us a message and we will get back to
              you within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Contact Info */}
          <AnimatedSection direction="left" className="lg:col-span-5">
            <div className="space-y-5 sm:space-y-6 h-full">
              <div className="relative p-px rounded-2xl bg-linear-to-br from-[#6366f1]/30 via-transparent to-[#06b6d4]/30">
                <div className="bg-[#0c0c14] rounded-2xl p-5 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Talk to Us Directly
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6">
                    Prefer a quick chat? Reach out via:
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href={siteData.contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl bg-white/2 border border-white/4 hover:border-[#25d366]/30 hover:bg-[#25d366]/5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#25d366]/10 flex items-center justify-center shrink-0">
                        <MessageCircle size={16} className="text-[#25d366]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs text-gray-500">
                          WhatsApp
                        </div>
                        <div className="text-xs sm:text-sm text-white font-medium truncate">
                          {siteData.contactInfo.whatsappNumber}
                        </div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${siteData.contactInfo.email}`}
                      className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl bg-white/2 border border-white/4 hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-[#8b5cf6]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs text-gray-500">
                          Email
                        </div>
                        <div className="text-xs sm:text-sm text-white font-medium truncate">
                          {siteData.contactInfo.email}
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl bg-white/2 border border-white/4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#06b6d4]/10 flex items-center justify-center shrink-0">
                        <Phone size={16} className="text-[#06b6d4]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs text-gray-500">
                          Phone
                        </div>
                        <div className="text-xs sm:text-sm text-white font-medium truncate">
                          {siteData.contactInfo.phone}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl bg-white/2 border border-white/4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#6366f1]/10 flex items-center justify-center shrink-0">
                        <MapPin size={16} className="text-[#6366f1]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs text-gray-500">
                          Location
                        </div>
                        <div className="text-xs sm:text-sm text-white font-medium">
                          {siteData.contactInfo.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 p-3 sm:p-4 rounded-xl bg-[#06b6d4]/5 border border-[#06b6d4]/10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
                      <span className="text-xs sm:text-sm text-[#06b6d4] font-semibold">
                        Currently Available
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Accepting new projects • Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="p-3 sm:p-4 rounded-xl bg-white/2 border border-white/6 text-center">
                  <div className="text-lg sm:text-2xl font-bold bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                    24h
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                    Response
                  </div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-white/2 border border-white/6 text-center">
                  <div className="text-lg sm:text-2xl font-bold bg-linear-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                    5-10
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                    Days
                  </div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-white/2 border border-white/6 text-center">
                  <div className="text-lg sm:text-2xl font-bold bg-linear-to-r from-[#06b6d4] to-[#6366f1] bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                    Custom
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection
            direction="right"
            delay={0.2}
            className="lg:col-span-7"
          >
            <div className="relative p-px rounded-2xl bg-linear-to-br from-[#6366f1]/40 via-[#8b5cf6]/20 to-[#06b6d4]/40">
              <div className="bg-[#0c0c14] rounded-2xl p-5 sm:p-6 lg:p-8">
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Fill out the form and we will reach out shortly.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}