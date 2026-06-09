"use client";

import { useState } from "react";
import {
  ArrowRight,
  Globe,
  ExternalLink,
  Sparkles,
  MessageCircle,
  Code2,
  Zap,
} from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "3+", label: "Live Projects" },
  { value: "100%", label: "Custom Built" },
  { value: "5.0", label: "Client Rating" },
  { value: "24h", label: "Avg Response" },
];

export default function ProjectsPageContent() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#8b5cf6]/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 mb-6">
              <Sparkles size={12} className="text-[#8b5cf6]" />
              <span className="text-xs font-medium text-[#8b5cf6] tracking-wide uppercase">
                Our Portfolio
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Projects We Have{" "}
              <span className="bg-linear-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                Delivered
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Real, live websites built for real businesses. Every project is
              100% custom-coded — no templates, no shortcuts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/30 transition-all duration-300"
              >
                <MessageCircle size={16} />
                Start Your Project
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#projects-grid"
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 border border-white/10 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <Code2 size={16} />
                View Projects
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 border-y border-white/4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section id="projects-grid" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Live Websites
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Click any project to visit the live website.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.15}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR PROJECTS */}
      <section className="py-20 lg:py-28 bg-white/1 border-y border-white/4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Our Projects Stand Out
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every website we deliver follows the same standard of excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Code2 size={20} />,
                title: "100% Custom Code",
                desc: "No templates. No drag-and-drop builders. Every line of code is written specifically for your business.",
                color: "#6366f1",
              },
              {
                icon: <Zap size={20} />,
                title: "Lightning Fast",
                desc: "Sub-2 second load times on average. Built with Next.js for optimal performance.",
                color: "#8b5cf6",
              },
              {
                icon: <Globe size={20} />,
                title: "SEO Optimized",
                desc: "Built-in SEO from day one. Schema markup, meta tags, and clean URLs ready for Google.",
                color: "#06b6d4",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white/2 border border-white/6 h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-gray-400 mb-8">
              Let us build something amazing for your business. Starting at just
              PKR 20,000.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/30 transition-all duration-300"
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

function ProjectCard({
  project,
}: {
  project: (typeof siteData.projects)[0];
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full flex flex-col rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/25 overflow-hidden transition-all duration-500 hover:-translate-y-1"
    >
      <div className={`h-1.5 bg-linear-to-r ${project.gradient}`} />

      <div className="px-5 pt-5 pb-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 ml-2 px-3 py-1.5 rounded-md bg-white/4 border border-white/6">
            <div className="flex items-center gap-1.5">
              <Globe size={10} className="text-gray-600" />
              <span className="text-[10px] text-gray-500 truncate">
                {project.url.replace("https://", "")}
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-48 rounded-xl overflow-hidden bg-[#1a1a24] border border-white/4">
          {project.screenshot && !imgError ? (
            <picture>
              <source
                srcSet={`${project.screenshot}.avif 600w`}
                type="image/avif"
                sizes="(max-width: 640px) 345px, (max-width: 1024px) 400px, 400px"
              />
              <img
                src={`${project.screenshot}.png`}
                alt={`${project.title} preview`}
                width={600}
                height={375}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={() => setImgError(true)}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </picture>
          ) : (
            <div
              className={`absolute inset-0 bg-linear-to-br ${project.gradient} flex items-center justify-center`}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="text-center relative z-10">
                <div className="text-2xl font-black text-white drop-shadow-lg">
                  {project.title}
                </div>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-1 shadow-lg">
            <ExternalLink size={14} className="text-gray-800" />
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-medium text-white">LIVE</span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#6366f1] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-medium text-gray-400 bg-white/4 border border-white/6 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#6366f1] group-hover:text-[#8b5cf6] transition-colors duration-200">
          <ExternalLink size={14} />
          View Live Site
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#6366f1]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </a>
  );
}