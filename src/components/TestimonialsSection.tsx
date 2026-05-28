"use client";

import { Star, Quote } from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#6366f1]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 mb-6">
              <Star size={12} className="text-[#6366f1] fill-[#6366f1]" />
              <span className="text-xs font-medium text-[#6366f1] tracking-wide uppercase">
                Client Reviews
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              What Our Clients{" "}
              <span className="bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              Real reviews from real Pakistan business owners who grew their
              online presence with Devnix Studios.
            </p>

            {/* Overall Rating */}
            <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-full bg-white/3 border border-white/6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-white font-bold">5.0</span>
              <span className="text-gray-500 text-sm">
                ({siteData.testimonials.length} reviews)
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.1}>
              <div className="group relative p-6 rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/20 hover:bg-white/4 transition-all duration-500 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={32} style={{ color: testimonial.color }} />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-5">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                {/* Service Badge */}
                <div className="mb-4">
                  <span
                    className="px-2.5 py-1 text-[10px] font-semibold rounded-full uppercase tracking-wider"
                    style={{
                      color: testimonial.color,
                      backgroundColor: `${testimonial.color}15`,
                    }}
                  >
                    {testimonial.service}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: `${testimonial.color}30` }}
                  >
                    <span style={{ color: testimonial.color }}>
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.business}
                    </div>
                    <div className="text-xs text-gray-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Join our growing list of satisfied clients across Pakistan
            </p>
            <a
              href={`https://wa.me/923184632828`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/20 transition-all duration-300"
            >
              Get Your Website Today
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}