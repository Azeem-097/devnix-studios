"use client";

import { useState, useEffect } from "react";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
  accentColor: string;
}

export default function TableOfContents({
  items,
  accentColor,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentActive = items[0]?.id || "";

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentActive = item.id;
        }
      }

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-28 p-5 rounded-2xl bg-white/2 border border-white/6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/6">
        <List size={16} style={{ color: accentColor }} />
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
          On This Page
        </h3>
      </div>

      {/* Items */}
      <nav className="space-y-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`group w-full text-left flex items-start gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                isActive
                  ? "bg-white/4 text-white"
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/2"
              }`}
            >
              {/* Active Indicator Bar */}
              <div
                className={`w-0.5 self-stretch rounded-full mt-0.5 transition-all duration-200 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-30"
                }`}
                style={{ backgroundColor: accentColor }}
              />
              <span className="flex-1 leading-snug">{item.title}</span>
            </button>
          );
        })}
      </nav>

      {/* Progress Indicator */}
      <div className="mt-5 pt-4 border-t border-white/6">
        <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-2">
          Reading Progress
        </div>
        <div className="h-1 rounded-full bg-white/4 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${
                ((items.findIndex((i) => i.id === activeId) + 1) /
                  items.length) *
                100
              }%`,
              background: `linear-gradient(90deg, ${accentColor}, ${accentColor}80)`,
            }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Section {items.findIndex((i) => i.id === activeId) + 1} of{" "}
          {items.length}
        </div>
      </div>
    </div>
  );
}