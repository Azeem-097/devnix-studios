"use client";

import { CheckCircle, Star, MessageCircle, ArrowRight } from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

const iconMap: Record<string, React.ReactNode> = {
  CheckCircle: <CheckCircle size={24} />,
  Star: <Star size={24} />,
  MessageCircle: <MessageCircle size={24} />,
  ArrowRight: <ArrowRight size={24} />,
};

const accentColors = ["#6366f1", "#8b5cf6", "#06b6d4", "#6366f1"];
const gradients = [
  "from-[#6366f1] to-[#8b5cf6]",
  "from-[#8b5cf6] to-[#a78bfa]",
  "from-[#06b6d4] to-[#22d3ee]",
  "from-[#6366f1] to-[#06b6d4]",
];

export default function WhyUsSection() {
  return (
    <section id="whyus" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#8b5cf6]/4 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#6366f1]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 mb-6">
              <span className="text-xs font-medium text-[#6366f1] tracking-wide uppercase">
                Why Devnix
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Why Businesses{" "}
              <span className="bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              We are not just another web agency. Here is what makes Devnix
              Studios different.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteData.whyUsPoints.map((point, index) => (
            <AnimatedSection
              key={point.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="group relative p-8 lg:p-10 rounded-2xl bg-white/2 border border-white/6 hover:border-white/12 transition-all duration-500 h-full overflow-hidden">
                {/* Top Row: Icon + Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradients[index]} flex items-center justify-center text-white group-hover:shadow-lg transition-shadow duration-500`}
                    style={{
                      boxShadow: `0 0 0 transparent`,
                    }}
                  >
                    {iconMap[point.icon]}
                  </div>

                  {/* Clean Number Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600 font-medium tracking-widest uppercase">
                      Reason
                    </span>
                    <span
                      className="text-sm font-bold px-2.5 py-1 rounded-md border"
                      style={{
                        color: accentColors[index],
                        borderColor: `${accentColors[index]}30`,
                        backgroundColor: `${accentColors[index]}08`,
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {point.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${accentColors[index]}80, transparent)`,
                  }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}