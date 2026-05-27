"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { siteData } from "@/lib/data";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formPayload = new FormData(e.currentTarget);
    formPayload.append("access_key", "YOUR_WEB3FORMS_KEY_HERE");
    formPayload.append("from_name", "Devnix Studios Website");
    formPayload.append("subject", `New Inquiry from ${formData.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        // Reset success state after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Failed to send message. Please try again or contact us on WhatsApp."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot Field for Spam Protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
      />

      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          icon={<User size={16} />}
          label="Your Name"
          required
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full bg-transparent text-white text-sm placeholder-gray-600 focus:outline-none"
          />
        </FormField>

        <FormField icon={<Mail size={16} />} label="Email" required>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full bg-transparent text-white text-sm placeholder-gray-600 focus:outline-none"
          />
        </FormField>
      </div>

      {/* Phone & Service Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField icon={<Phone size={16} />} label="Phone / WhatsApp">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+92 300 0000000"
            className="w-full bg-transparent text-white text-sm placeholder-gray-600 focus:outline-none"
          />
        </FormField>

        <FormField
          icon={<Briefcase size={16} />}
          label="Interested In"
          required
        >
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-transparent text-white text-sm focus:outline-none cursor-pointer appearance-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
              backgroundPosition: "right 0 center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.25em 1.25em",
              paddingRight: "1.5rem",
            }}
          >
            <option value="" className="bg-[#0c0c14] text-gray-500">
              Select a service
            </option>
            {siteData.serviceOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-[#0c0c14] text-white"
              >
                {option.label}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      {/* Message */}
      <FormField icon={<MessageSquare size={16} />} label="Your Message" required>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project, business, or any questions..."
          className="w-full bg-transparent text-white text-sm placeholder-gray-600 focus:outline-none resize-none"
        />
      </FormField>

      {/* Status Messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3"
          >
            <CheckCircle size={20} className="text-green-400 shrink-0" />
            <div>
              <div className="text-sm font-semibold text-green-400">
                Message sent successfully!
              </div>
              <div className="text-xs text-green-400/70 mt-0.5">
                We will get back to you within 24 hours.
              </div>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3"
          >
            <AlertCircle size={20} className="text-red-400 shrink-0" />
            <div>
              <div className="text-sm font-semibold text-red-400">
                Failed to send message
              </div>
              <div className="text-xs text-red-400/70 mt-0.5">
                {errorMessage}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ scale: status === "sending" ? 1 : 1.01 }}
        whileTap={{ scale: status === "sending" ? 1 : 0.99 }}
        className="group relative w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#6366f1]/30 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader size={16} className="animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            Send Message
          </>
        )}

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </motion.button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-600 text-center">
        By submitting, you agree to our{" "}
        <a
          href="/privacy-policy"
          className="text-[#6366f1] hover:text-[#8b5cf6] transition-colors"
        >
          Privacy Policy
        </a>
        . We will never share your information.
      </p>
    </form>
  );
}

function FormField({
  icon,
  label,
  required,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="group">
      <label className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-2">
        <span className="text-[#6366f1]">{icon}</span>
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>
      <div className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] focus-within:border-[#6366f1]/40 focus-within:bg-white/[0.04] transition-all duration-200">
        {children}
      </div>
    </div>
  );
}