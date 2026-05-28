"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle } from "lucide-react";
import { siteData } from "@/lib/data";
import { trackWhatsAppClick } from "./GoogleAnalytics";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleStartChat = () => {
    trackWhatsAppClick("Floating Button");
    const message =
      "Hi Devnix Studios! 👋 I am interested in your digital catalog services. Can we chat?";
    const encoded = encodeURIComponent(message);
    window.open(`${siteData.contactInfo.whatsapp}?text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        >
          {/* Chat Popup */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute bottom-16 sm:bottom-20 right-0 w-[calc(100vw-2rem)] max-w-[340px] sm:w-[340px] rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
              >
                {/* Outer gradient border wrapper */}
                <div className="p-px rounded-2xl bg-linear-to-br from-[#6366f1]/30 via-white/[0.04] to-[#06b6d4]/30">
                  <div className="bg-[#0c0c14] rounded-2xl overflow-hidden">
                    {/* Header */}
                    <div className="p-5 border-b border-white/6">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center gap-3">
                          {/* Avatar - Green Circle with WhatsApp icon */}
                          <div className="relative">
                            <div className="w-11 h-11 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg shadow-[#25d366]/30">
                              <MessageCircle
                                size={20}
                                className="text-white fill-white"
                              />
                            </div>
                            {/* Online dot */}
                            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25d366] border-2 border-[#0c0c14]" />
                          </div>

                          <div>
                            <div className="text-white font-semibold text-sm">
                              Devnix Studios
                            </div>
                            <div className="text-gray-400 text-xs flex items-center gap-1.5 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] inline-block" />
                              Online
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => setIsOpen(false)}
                          className="w-7 h-7 rounded-full hover:bg-white/5 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Message Body */}
                    <div className="p-5">
                      {/* Bot Message */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#1a1a24] border border-white/6 rounded-2xl rounded-tl-sm p-4 mb-1"
                      >
                        <p className="text-sm text-gray-200 leading-relaxed">
                          👋 Hey! Want a{" "}
                          <span className="text-[#6366f1] font-medium">
                            digital catalog
                          </span>{" "}
                          for your business?
                        </p>
                        <p className="text-sm text-gray-200 leading-relaxed mt-2">
                          Starting at just{" "}
                          <span className="bg-linear-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent font-bold">
                            PKR 5,000
                          </span>
                          — let&apos;s chat!
                        </p>
                        <div className="text-right mt-2">
                          <span className="text-[10px] text-gray-600">Now</span>
                        </div>
                      </motion.div>

                      {/* Phone Number */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-2 mt-4 px-1"
                      >
                        <Phone size={12} className="text-gray-500" />
                        <span className="text-xs text-gray-400">
                          {siteData.contactInfo.whatsappNumber}
                        </span>
                      </motion.div>
                    </div>

                    {/* CTA Button */}
                    <div className="p-5 pt-0">
                      <motion.button
                        onClick={handleStartChat}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25d366] hover:bg-[#22c55e] text-white font-semibold text-sm rounded-xl shadow-lg shadow-[#25d366]/20 transition-colors duration-200"
                      >
                        <MessageCircle size={18} className="fill-white" />
                        Start Chat
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#22c55e] flex items-center justify-center shadow-2xl shadow-[#25d366]/40 group"
          >
            {/* Outer Ring Pulse */}
            <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-25" />

            {/* Inner highlight */}
            <span className="absolute inset-1 rounded-full bg-linear-to-br from-white/10 to-transparent" />

            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <X size={24} className="text-white" strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Notification Badge */}
            {!isOpen && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-[#0a0a0f] flex items-center justify-center"
              >
                <span className="text-[10px] font-bold text-white">1</span>
              </motion.span>
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
