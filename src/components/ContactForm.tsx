"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
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
import { trackFormSubmit } from "./GoogleAnalytics";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
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

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("❌ EmailJS environment variables not set!");
      setStatus("error");
      setErrorMessage(
        "Form not configured. Please contact us directly via WhatsApp."
      );
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          phone: formData.phone || "Not provided",
          service:
            siteData.serviceOptions.find((s) => s.value === formData.service)
              ?.label || formData.service,
          message: formData.message,
        },
        publicKey
      );

      console.log("✅ Email sent successfully!", result);
      trackFormSubmit("Contact Form");
      setStatus("success");
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        service: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (error) {
      const err = error as { text?: string; message?: string };
      console.error("❌ EmailJS error:", err);
      setStatus("error");
      setErrorMessage(
        err.text ||
          err.message ||
          "Failed to send message. Please try WhatsApp instead."
      );
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label="Contact form"
    >
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          icon={<User size={16} />}
          label="Your Name"
          htmlFor="from_name"
          required
        >
          <input
            id="from_name"
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            placeholder="Azeem Ahmed"
            aria-required="true"
            autoComplete="name"
            className="w-full bg-transparent text-white text-sm placeholder-gray-600 focus:outline-none"
          />
        </FormField>

        <FormField
          icon={<Mail size={16} />}
          label="Email"
          htmlFor="from_email"
          required
        >
          <input
            id="from_email"
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            aria-required="true"
            autoComplete="email"
            className="w-full bg-transparent text-white text-sm placeholder-gray-600 focus:outline-none"
          />
        </FormField>
      </div>

      {/* Phone & Service Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          icon={<Phone size={16} />}
          label="Phone / WhatsApp"
          htmlFor="phone"
        >
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+92 300 0000000"
            autoComplete="tel"
            className="w-full bg-transparent text-white text-sm placeholder-gray-600 focus:outline-none"
          />
        </FormField>

        <FormField
          icon={<Briefcase size={16} />}
          label="Interested In"
          htmlFor="service"
          required
        >
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Select a service you are interested in"
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
      <FormField
        icon={<MessageSquare size={16} />}
        label="Your Message"
        htmlFor="message"
        required
      >
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project, business, or any questions..."
          aria-required="true"
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
            role="status"
            aria-live="polite"
            className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3"
          >
            <CheckCircle size={20} className="text-green-400 shrink-0" aria-hidden="true" />
            <div>
              <div className="text-sm font-semibold text-green-400">
                Message sent successfully! 🎉
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
            role="alert"
            aria-live="assertive"
            className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3"
          >
            <AlertCircle size={20} className="text-red-400 shrink-0" aria-hidden="true" />
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
        aria-label={status === "sending" ? "Sending your message" : "Send message"}
        className="group relative w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#6366f1]/30 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader size={16} className="animate-spin" aria-hidden="true" />
            Sending Message...
          </>
        ) : (
          <>
            <Send
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
            Send Message
          </>
        )}
      </motion.button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-600 text-center">
        By submitting, you agree to our{" "}
        <a
          href="/privacy-policy"
          className="text-[#6366f1] hover:text-[#8b5cf6] transition-colors underline"
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
  htmlFor,
  required,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="group">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-2"
      >
        <span className="text-[#6366f1]" aria-hidden="true">
          {icon}
        </span>
        {label}
        {required && (
          <>
            <span className="text-red-400" aria-hidden="true">
              *
            </span>
            <span className="sr-only">(required)</span>
          </>
        )}
      </label>
      <div className="px-4 py-3 rounded-xl bg-white/2 border border-white/6 focus-within:border-[#6366f1]/40 focus-within:bg-white/4 transition-all duration-200">
        {children}
      </div>
    </div>
  );
}
