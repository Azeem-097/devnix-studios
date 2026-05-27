"use client";

import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6366f1]/6 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <AnimatedSection direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
                <span className="text-xs font-medium text-[#06b6d4] tracking-wide uppercase">
                  Ready to Start?
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Let&apos;s Build Your{" "}
                <span className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                  Online Presence
                </span>
              </h2>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Get a custom website, SEO, social media management, and ongoing
                support — all in one affordable package. Message us on WhatsApp to
                get started today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href={`${siteData.contactInfo.whatsapp}?text=Hi%20Devnix%20Studios!%20I%20am%20interested%20in%20your%20web%20development%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href={`mailto:${siteData.contactInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <Mail size={16} />
                  Send Email
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                    5,000
                  </div>
                  <div className="text-xs text-gray-500 mt-1">PKR Starting</div>
                </div>
                <div className="w-[1px] bg-white/[0.06]" />
                <div>
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-xs text-gray-500 mt-1">Months Support</div>
                </div>
                <div className="w-[1px] bg-white/[0.06]" />
                <div>
                  <div className="text-2xl font-bold text-white">1 Year</div>
                  <div className="text-xs text-gray-500 mt-1">Free Hosting</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#6366f1]/30 via-transparent to-[#06b6d4]/30">
              <div className="bg-[#0c0c14] rounded-2xl p-8 lg:p-10">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 flex items-center justify-center">
                      <Phone size={18} className="text-[#6366f1]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Phone / WhatsApp</div>
                      <div className="text-sm text-white">
                        {siteData.contactInfo.whatsappNumber}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center">
                      <Mail size={18} className="text-[#8b5cf6]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Email</div>
                      <div className="text-sm text-white">
                        {siteData.contactInfo.email}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/10 flex items-center justify-center">
                      <MapPin size={18} className="text-[#06b6d4]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Location</div>
                      <div className="text-sm text-white">
                        {siteData.contactInfo.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <div className="text-xs text-gray-500 mb-4">Follow Us</div>
                  <div className="flex gap-3">
                    {siteData.socialLinks.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                        title={social.platform}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={social.svgPath} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-[#06b6d4]/5 border border-[#06b6d4]/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
                    <span className="text-sm text-[#06b6d4] font-medium">
                      Currently accepting new projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}