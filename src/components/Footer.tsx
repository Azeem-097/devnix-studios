"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { siteData } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Compact nav for footer
  const compactLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Package", href: "#package" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-[#070710]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP ROW: Logo (left) | Nav (center) | Scroll Top (right) */}
        <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleLinkClick("#home");
              }
            }}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/logo/DevnixlogoWeb.png"
              alt="Devnix Studios Logo"
              width={40}
              height={40}
              className="rounded-lg group-hover:shadow-lg group-hover:shadow-[#6366f1]/30 transition-shadow"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-wider text-white uppercase">
                Devnix Studios
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            {compactLinks.map((link) => (
              <a
                key={link.label}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }
                }}
                className="px-3 py-1.5 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className={`w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 ${
              showScrollTop
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* SOCIAL ICONS - Centered */}
        <div className="py-8 flex justify-center">
          <div className="flex items-center gap-3">
            {/* Email */}
            <a
              href={`mailto:${siteData.contactInfo.email}`}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5 transition-all duration-300"
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

            {/* Social Links */}
            {siteData.socialLinks
              .filter((s) => s.platform !== "WhatsApp")
              .map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5 transition-all duration-300"
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

        {/* COPYRIGHT - Centered */}
        <div className="pb-8 text-center space-y-1">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {siteData.siteName}. All rights reserved.
          </p>
          <a
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleLinkClick("#home");
              }
            }}
            className="text-sm bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent font-medium hover:opacity-80 transition-opacity"
          >
            devnixstudios.tech
          </a>
        </div>

        {/* HIDDEN LEGAL LINKS (kept accessible but visually minimal) */}
        <div className="pb-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
          <a
            href="/privacy-policy"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-gray-700">•</span>
          <a
            href="/terms-of-service"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            Terms of Service
          </a>
          <span className="text-gray-700">•</span>
          <a
            href="/refund-policy"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
}