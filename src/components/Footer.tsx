"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { siteData } from "@/lib/data";

export default function Footer() {
  const currentYear = 2026;
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollLink = (href: string) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { label: "Home", href: "#home", type: "scroll" },
    { label: "Projects", href: "/projects", type: "page" },
    { label: "FAQs", href: "/faqs", type: "page" },
    { label: "Blog", href: "/blog", type: "page" },
    { label: "Contact", href: "#contact", type: "scroll" },
  ];

  const serviceLinks = [
    { label: "Web Development", href: "/web-development-services" },
    { label: "SEO Services", href: "/seo-services-pakistan" },
    { label: "All Services", href: "/services" },
  ];

  return (
    <footer className="relative border-t border-white/4">
      <div className="absolute inset-0 bg-[#070710]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN FOOTER GRID - 4 COLUMNS */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* COLUMN 1: Brand */}
          <div>
            <a
              href={isHomePage ? "#home" : "/"}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  handleScrollLink("#home");
                }
              }}
              className="flex items-center gap-2 group mb-4"
            >
              <Image
                src="/logo/DevnixlogoWeb.avif"
                alt="Devnix Studios"
                width={36}
                height={36}
                className="rounded-lg group-hover:shadow-lg group-hover:shadow-[#6366f1]/30 transition-shadow"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold tracking-wider text-white uppercase">
                  Devnix Studios
                </span>
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                  Digital Solutions
                </span>
              </div>
            </a>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Custom websites, SEO, and digital solutions for Pakistan
              businesses. Starting at PKR 20,000.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-500">
                Accepting new clients
              </span>
            </div>
          </div>

          {/* COLUMN 2: Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <div className="space-y-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 3: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={
                    link.type === "page"
                      ? link.href
                      : isHomePage
                      ? link.href
                      : `/${link.href}`
                  }
                  onClick={(e) => {
                    if (link.type === "page") {
                      return;
                    }
                    if (isHomePage) {
                      e.preventDefault();
                      handleScrollLink(link.href);
                    }
                  }}
                  className="block text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 4: Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${siteData.contactInfo.email}`}
                className="flex items-start gap-2 text-xs text-gray-500 hover:text-white transition-colors group"
              >
                <Mail
                  size={14}
                  className="text-[#6366f1] mt-0.5 shrink-0 group-hover:text-[#8b5cf6] transition-colors"
                />
                <span className="break-all">
                  {siteData.contactInfo.email}
                </span>
              </a>
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-xs text-gray-500 hover:text-white transition-colors group"
              >
                <Phone
                  size={14}
                  className="text-[#06b6d4] mt-0.5 shrink-0 group-hover:text-[#22d3ee] transition-colors"
                />
                <span>{siteData.contactInfo.phone}</span>
              </a>
              <div className="pt-2">
                <a
                  href={siteData.contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25d366]/10 border border-[#25d366]/20 text-xs text-[#25d366] hover:bg-[#25d366]/15 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        {/* BOTTOM ROW */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${siteData.contactInfo.email}`}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5 transition-all duration-300"
              title="Email"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            {siteData.socialLinks
              .filter((s) => s.platform !== "WhatsApp")
              .map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5 transition-all duration-300"
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

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} {siteData.siteName}. All rights reserved.
            </p>
          </div>

          {/* Scroll Top */}
          <button
            onClick={scrollToTop}
            className={`w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 ${
              showScrollTop ? "opacity-100" : "opacity-50"
            }`}
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* LEGAL LINKS */}
        <div className="pb-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs border-t border-white/4 pt-4">
          <Link
            href="/privacy-policy"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-700">&bull;</span>
          <Link
            href="/terms-of-service"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            Terms of Service
          </Link>
          <span className="text-gray-700">&bull;</span>
          <Link
            href="/refund-policy"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            Refund Policy
          </Link>
          <span className="text-gray-700">&bull;</span>
          <a
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleScrollLink("#home");
              }
            }}
            className="bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent font-medium"
          >
            devnixstudios.tech
          </a>
        </div>
      </div>
    </footer>
  );
}