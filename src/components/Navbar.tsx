"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { siteData } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "#home", type: "scroll" },
  { label: "Services", href: "/services", type: "page" },
  { label: "Projects", href: "/projects", type: "page" },
  { label: "FAQs", href: "/faqs", type: "page" },
  { label: "Blog", href: "/blog", type: "page" },
  { label: "Contact", href: "#contact", type: "scroll" },
];

const serviceDropdown = [
  { label: "Web Development", href: "/web-development-services" },
  { label: "SEO Services", href: "/seo-services-pakistan" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: (typeof navLinks)[0]) => {
    setIsOpen(false);
    setServicesOpen(false);
    if (link.type === "page") {
      router.push(link.href);
      return;
    }
    if (isHomePage) {
      const element = document.querySelector(link.href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${link.href}`);
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
                handleLinkClick({ label: "Home", href: "#home", type: "scroll" });
              }
            }}
            className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
          >
            <Image
              src="/logo/DevnixlogoWeb.avif"
              alt="Devnix Studios - Website Design Pakistan"
              width={32}
              height={32}
              style={{ width: "auto", height: "32px" }}
              className="rounded-lg group-hover:shadow-lg group-hover:shadow-[#6366f1]/30 transition-shadow duration-300 sm:h-9! lg:h-10!"
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
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
                      Services
                      <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 w-52 pt-2">
                        <div className="bg-[#0c0c14] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                          {serviceDropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                          <div className="border-t border-white/6 px-4 py-2.5">
                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="text-xs text-[#6366f1] hover:text-[#8b5cf6] transition-colors font-medium"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.type === "page" ? link.href : isHomePage ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    if (link.type === "page") { e.preventDefault(); handleLinkClick(link); }
                    else if (isHomePage) { e.preventDefault(); handleLinkClick(link); }
                  }}
                  className="px-3 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              );
            })}
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
          isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.type === "page" ? link.href : isHomePage ? link.href : `/${link.href}`}
              onClick={(e) => {
                if (link.type === "page") { e.preventDefault(); handleLinkClick(link); }
                else if (isHomePage) { e.preventDefault(); handleLinkClick(link); }
              }}
              className="block px-4 py-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          {/* Mobile Service Sub-links */}
          <div className="pl-4 space-y-1 border-l border-white/6 ml-4">
            {serviceDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-xs text-gray-500 hover:text-gray-300 rounded-lg hover:bg-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
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