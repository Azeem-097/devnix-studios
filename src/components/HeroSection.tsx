"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Globe,
  Search,
  Share2,
  Sparkles,
  Code2,
  Zap,
  TrendingUp,
  CheckCircle,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

interface Particle {
  id: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on the client to avoid hydration mismatch
  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* === BACKGROUND LAYERS === */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#6366f1]/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#06b6d4]/15 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8b5cf6]/10 rounded-full blur-[150px]"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,15,0.6) 70%, rgba(10,10,15,1) 100%)",
        }}
      />

      {/* Floating Particles - Client Only (avoids hydration mismatch) */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT - Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 backdrop-blur-sm mb-6"
            >
              <Sparkles size={12} className="text-[#06b6d4]" />
              <span className="text-xs font-medium text-[#06b6d4] tracking-wide uppercase">
                Premium Web Development Studio
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span className="text-xs text-gray-400">Est. 2024</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              We{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                  Build
                </span>
                <motion.span
                  animate={{ scaleX: [0, 1, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    times: [0, 0.3, 0.7, 1],
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] origin-left"
                />
              </span>
              .
              <br />
              We{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                Manage
              </span>
              . We{" "}
              <span className="bg-gradient-to-r from-[#06b6d4] to-[#6366f1] bg-clip-text text-transparent">
                Grow
              </span>
              .
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Custom websites, SEO optimization, and social media management —
              all in one package. Starting at just{" "}
              <span className="text-white font-semibold">PKR 5,000</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-8"
            >
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <button
                onClick={() => handleScroll("#projects")}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-gray-300 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                <Code2
                  size={16}
                  className="text-[#06b6d4] group-hover:rotate-12 transition-transform"
                />
                View Our Work
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6 border-t border-white/[0.06]"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-400">5.0 Rating</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#06b6d4]" />
                <span className="text-xs text-gray-400">
                  3+ Projects Delivered
                </span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-[#8b5cf6]" />
                <span className="text-xs text-gray-400">5-10 Day Delivery</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - Visual Element (Code/Browser Preview) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Floating Stats Card - Top */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-8 z-20 p-4 rounded-2xl bg-[#0c0c14]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-[#6366f1]/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Avg. Load Time</div>
                  <div className="text-lg font-bold text-white">{"<"}1.5s</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Card - Bottom */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -right-4 z-20 p-4 rounded-2xl bg-[#0c0c14]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-[#06b6d4]/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#22d3ee] flex items-center justify-center">
                  <Zap size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">SEO Score</div>
                  <div className="text-lg font-bold text-white">95/100</div>
                </div>
              </div>
            </motion.div>

            {/* Main Code/Browser Card */}
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[#6366f1]/50 via-[#8b5cf6]/30 to-[#06b6d4]/50">
              <div className="bg-[#0c0c14] rounded-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0a0a0f]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 ml-3 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <Globe size={10} className="text-gray-600" />
                      <span className="text-[10px] text-gray-400">
                        devnixstudios.tech
                      </span>
                    </div>
                  </div>
                </div>

                {/* Code Editor Style Content */}
                <div className="p-5 font-mono text-xs space-y-2 min-h-[320px]">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-600"
                  >
                    {"// Your business, online in days"}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-2"
                  >
                    <span className="text-[#8b5cf6]">const</span>
                    <span className="text-[#06b6d4]">yourWebsite</span>
                    <span className="text-gray-500">=</span>
                    <span className="text-gray-300">{"{"}</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="pl-4 flex flex-wrap gap-x-2"
                  >
                    <span className="text-[#6366f1]">design:</span>
                    <span className="text-green-400">
                      {"'Custom & Modern'"}
                    </span>
                    <span className="text-gray-500">,</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="pl-4 flex flex-wrap gap-x-2"
                  >
                    <span className="text-[#6366f1]">performance:</span>
                    <span className="text-green-400">{"'Lightning Fast'"}</span>
                    <span className="text-gray-500">,</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="pl-4 flex flex-wrap gap-x-2"
                  >
                    <span className="text-[#6366f1]">seo:</span>
                    <span className="text-green-400">{"'Optimized'"}</span>
                    <span className="text-gray-500">,</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className="pl-4 flex flex-wrap gap-x-2"
                  >
                    <span className="text-[#6366f1]">socialMedia:</span>
                    <span className="text-green-400">{"'Managed'"}</span>
                    <span className="text-gray-500">,</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                    className="pl-4 flex flex-wrap gap-x-2"
                  >
                    <span className="text-[#6366f1]">support:</span>
                    <span className="text-green-400">{"'3 Months Free'"}</span>
                    <span className="text-gray-500">,</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                    className="pl-4 flex flex-wrap gap-x-2"
                  >
                    <span className="text-[#6366f1]">price:</span>
                    <span className="text-yellow-400">{"'PKR 5,000'"}</span>
                    <span className="text-gray-500">,</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-gray-300"
                  >
                    {"};"}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4 }}
                    className="pt-3 flex items-center gap-2"
                  >
                    <span className="text-[#8b5cf6]">{"=>"}</span>
                    <span className="text-gray-400">deploy(</span>
                    <span className="text-[#06b6d4]">yourWebsite</span>
                    <span className="text-gray-400">);</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-[#06b6d4]"
                    />
                  </motion.div>

                  {/* Success Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8 }}
                    className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-2"
                  >
                    <CheckCircle size={14} className="text-green-400" />
                    <span className="text-xs text-green-400">
                      Website deployed successfully! 🚀
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#6366f1]/20 to-[#06b6d4]/20 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>

        {/* Bottom Feature Pills + Price - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 lg:mt-16 flex flex-col items-center gap-6"
        >
          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <FeaturePill
              icon={<Globe size={14} />}
              text="Custom Code"
              color="#6366f1"
            />
            <FeaturePill
              icon={<Search size={14} />}
              text="SEO Optimized"
              color="#8b5cf6"
            />
            <FeaturePill
              icon={<Share2 size={14} />}
              text="Social Media"
              color="#06b6d4"
            />
            <FeaturePill
              icon={<Zap size={14} />}
              text="Fast Delivery"
              color="#a78bfa"
            />
          </div>

          {/* Price Badge */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-[#0c0c14] border border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#06b6d4]" />
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  Limited Time
                </span>
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-gray-500">Starting from</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                  5,000
                </span>
                <span className="text-sm text-gray-400">PKR</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  );
}

function FeaturePill({
  icon,
  text,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  color: string;
}) {
  return (
    <div
      className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-all duration-300"
      style={{ boxShadow: `0 0 0 transparent` }}
    >
      <span style={{ color }}>{icon}</span>
      <span className="text-sm text-gray-300 font-medium">{text}</span>
    </div>
  );
}