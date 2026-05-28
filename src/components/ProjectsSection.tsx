"use client";

import { useState } from "react";
import {
  ArrowRight,
  Globe,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#06b6d4]/4 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 mb-6">
              <Sparkles size={12} className="text-[#8b5cf6]" />
              <span className="text-xs font-medium text-[#8b5cf6] tracking-wide uppercase">
                Our Work
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Projects We Have{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                Delivered
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              Real projects built for real businesses. Take a look at what we
              have crafted.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.15}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
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
      className="group relative h-full flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#6366f1]/25 overflow-hidden transition-all duration-500 hover:-translate-y-1"
    >
      {/* Gradient Header Bar */}
      <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

      {/* Browser Mockup */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 ml-2 px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <Globe size={10} className="text-gray-600" />
              <span className="text-[10px] text-gray-500 truncate">
                {project.url.replace("https://", "")}
              </span>
            </div>
          </div>
        </div>

        {/* Screenshot Preview */}
        <div className="relative h-48 rounded-xl overflow-hidden bg-[#1a1a24] border border-white/[0.04]">
          {project.screenshot && !imgError ? (
            <picture>
              {/* AVIF first (smaller, faster) */}
              <source
                srcSet={`${project.screenshot}.avif`}
                type="image/avif"
              />
              {/* PNG fallback */}
              <img
                src={`${project.screenshot}.png`}
                alt={`${project.title} preview`}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            </picture>
          ) : (
            // Fallback gradient if both images fail
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
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

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* External Link Badge on Hover */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-1 shadow-lg">
            <ExternalLink size={14} className="text-gray-800" />
          </div>

          {/* Live Indicator */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-medium text-white">LIVE</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#6366f1] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-medium text-gray-400 bg-white/[0.04] border border-white/[0.06] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#6366f1] group-hover:text-[#8b5cf6] transition-colors duration-200">
          <ExternalLink size={14} />
          View Live Site
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366f1]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </a>
  );
}