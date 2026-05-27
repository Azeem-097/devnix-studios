import LegalLayout from "@/components/LegalLayout";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  Globe,
  Calendar,
  Package,
  Settings,
  Send,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Refund Policy — Devnix Studios",
  description: "Refund Policy for Devnix Studios web development services.",
};

const sections = [
  {
    id: "website-refund",
    icon: Globe,
    title: "Website Development Refund",
    content:
      "If you are not satisfied with the initial website design, you may request revisions before the website goes live. Once the website has been approved and launched, the development fee of 5,000 PKR is non-refundable. If we fail to deliver the website as agreed, a full refund will be issued.",
  },
  {
    id: "monthly-refund",
    icon: Calendar,
    title: "Monthly Support Refund",
    content:
      "Monthly support and management fees are non-refundable once the month has started and work has begun. If you wish to cancel, you must notify us before the start of the next billing period. No refund will be issued for partial months.",
  },
  {
    id: "addons",
    icon: Package,
    title: "Add-on Services",
    content:
      "Fees for add-on services (extra products, categories, page additions, theme changes, etc.) are non-refundable once the work has been completed and delivered.",
  },
  {
    id: "domain-hosting",
    icon: Settings,
    title: "Domain & Hosting",
    content:
      "Domain registration fees are non-refundable as they are processed through third-party registrars. Hosting fees, if applicable after the first free year, are non-refundable for the period already paid.",
  },
  {
    id: "request-refund",
    icon: Send,
    title: "How to Request a Refund",
    content:
      "To request a refund, please contact us at Info@devnixstudios.tech or via WhatsApp at +92 318 4632828 with your project details and reason for the refund request. We will review and respond within 3-5 business days.",
  },
  {
    id: "disputes",
    icon: MessageCircle,
    title: "Disputes",
    content:
      "In case of any disputes, both parties agree to attempt to resolve the matter through direct communication first. If a resolution cannot be reached, the matter will be handled under the laws of Pakistan.",
  },
];

export default function RefundPolicy() {
  return (
    <>
      <LegalLayout
        title="Refund Policy"
        badge="Legal Document"
        badgeColor="#06b6d4"
        lastUpdated="January 2025"
        tocItems={sections.map((s) => ({ id: s.id, title: s.title }))}
      >
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <section
              key={section.id}
              id={section.id}
              className="group p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#06b6d4]/20 hover:bg-white/[0.04] transition-all duration-300 scroll-mt-28"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#6366f1] flex items-center justify-center text-white shrink-0 group-hover:shadow-lg group-hover:shadow-[#06b6d4]/20 transition-shadow">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg lg:text-xl font-semibold text-white mb-3">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </section>
          );
        })}
      </LegalLayout>
      <FloatingWhatsApp />
    </>
  );
}