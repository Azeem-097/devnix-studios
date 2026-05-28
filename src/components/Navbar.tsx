"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { siteData } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);

    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-[#0a0a0f]/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <a
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleLinkClick("#home");
              }
            }}
            className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
          >
            <Image
              src="/logo/DevnixlogoWeb.png"
              alt="Devnix Studios - Website Design Pakistan"
              width={32}
              height={32}
              style={{ width: "auto", height: "32px" }}
              className="rounded-lg group-hover:shadow-lg group-hover:shadow-[#6366f1]/30 transition-shadow duration-300 sm:!h-9 lg:!h-10"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs sm:text-sm lg:text-base font-bold tracking-wider text-white uppercase">
                Devnix Studios
              </span>
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {siteData.navLinks.map((link) => (
              <a
                key={link.label}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }
                }}
                className="px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteData.contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium text-white bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg hover:shadow-lg hover:shadow-[#6366f1]/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {siteData.navLinks.map((link) => (
            <a
              key={link.label}
              href={isHomePage ? link.href : `/${link.href}`}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }
              }}
              className="block px-4 py-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 px-4">
            <a
              href={siteData.contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 text-sm font-medium text-white bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
