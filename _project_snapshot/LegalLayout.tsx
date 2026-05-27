"use client";

import { Mail, Phone } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TableOfContents from "./TableOfContents";
import { siteData } from "@/lib/data";

interface TOCItem {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  title: string;
  badge: string;
  badgeColor: string;
  lastUpdated: string;
  tocItems: TOCItem[];
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  badge,
  badgeColor,
  lastUpdated,
  tocItems,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0a0a0f] flex flex-col">
      {/* Same Navbar as Home */}
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.04] pt-16 lg:pt-20">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-30"
          style={{ background: badgeColor }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
            style={{
              borderColor: `${badgeColor}33`,
              backgroundColor: `${badgeColor}0d`,
            }}
          >
            <span
              className="text-xs font-medium tracking-wide uppercase"
              style={{ color: badgeColor }}
            >
              {badge}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-gray-500">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* CONTENT WITH TOC SIDEBAR */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Table of Contents (Desktop only) */}
          <aside className="hidden lg:block lg:col-span-3">
            <TableOfContents items={tocItems} accentColor={badgeColor} />
          </aside>

          {/* Right: Content */}
          <div className="lg:col-span-9">
            {/* Mobile TOC */}
            <div className="lg:hidden mb-8">
              <details className="rounded-2xl bg-white/[0.02] border border-white/[0.06] overflow-hidden">
                <summary
                  className="cursor-pointer p-4 text-sm font-semibold text-white flex items-center justify-between hover:bg-white/[0.02]"
                  style={{ listStyle: "none" }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-1 h-4 rounded-full"
                      style={{ backgroundColor: badgeColor }}
                    />
                    Table of Contents
                  </span>
                  <span className="text-xs text-gray-500">
                    {tocItems.length} sections
                  </span>
                </summary>
                <div className="p-4 pt-0 space-y-1">
                  {tocItems.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/[0.02] rounded-lg transition-colors"
                    >
                      {index + 1}. {item.title}
                    </a>
                  ))}
                </div>
              </details>
            </div>

            {/* Sections */}
            <div className="space-y-6">{children}</div>

            {/* Contact CTA Card */}
            <div className="mt-12 p-1 rounded-2xl bg-gradient-to-br from-[#6366f1]/30 via-[#8b5cf6]/20 to-[#06b6d4]/30">
              <div className="bg-[#0c0c14] rounded-2xl p-8 lg:p-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Have Questions?
                </h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  We are here to help. Reach out to us anytime via email or
                  WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`mailto:${siteData.contactInfo.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/20 transition-all duration-300"
                  >
                    <Mail size={16} />
                    Email Us
                  </a>
                  <a
                    href={siteData.contactInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-300 border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    <Phone size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Same Footer as Home */}
      <Footer />
    </main>
  );
}