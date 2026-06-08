import LegalLayout from "@/components/LegalLayout";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  FileText,
  CreditCard,
  Calendar,
  Globe,
  Package,
  Award,
  AlertCircle,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service — Devnix Studios",
  description: "Terms of Service for Devnix Studios web development services.",
};

const sections = [
  {
    id: "service-agreement",
    icon: FileText,
    title: "Service Agreement",
    content:
      "By engaging Devnix Studios for web development, SEO, or social media management services, you agree to these terms. Our services include custom website development, monthly support and management, basic SEO optimization, and social media posting as outlined in our package.",
  },
  {
    id: "payment-terms",
    icon: CreditCard,
    title: "Payment Terms",
    content:
      "The initial website build costs 20,000 PKR (one-time payment). Monthly support and management is charged at 2,500 PKR for the first month and 20,000 PKR for subsequent months. Payment is due at the beginning of each month. Add-on services are charged separately as outlined in our package details.",
  },
  {
    id: "contract-duration",
    icon: Calendar,
    title: "Contract Duration",
    content:
      "The initial contract covers a 3-month period including website development and monthly support. After the 3-month period, a new contract will be signed with updated pricing based on your requirements. You are not locked in and may choose to continue, modify, or end the service.",
  },
  {
    id: "domain-hosting",
    icon: Globe,
    title: "Domain & Hosting",
    content:
      "The domain name is to be purchased by the client. If you wish for Devnix Studios to manage your domain, an annual fee of 500 PKR applies. First-year hosting is provided free of charge. After the first year, minimal hosting charges will apply.",
  },
  {
    id: "scope-of-work",
    icon: Package,
    title: "Scope of Work",
    content:
      "Monthly support includes: 2 product uploads per week, basic SEO for each product, 1 new category every 2 weeks, 2 product revisions per month, image optimization, and social media posts with captions and hashtags. Additional work beyond the included scope is charged at the add-on rates specified in our package.",
  },
  {
    id: "intellectual-property",
    icon: Award,
    title: "Intellectual Property",
    content:
      "Upon full payment, you own the content and design of your website. However, any custom code, frameworks, or tools developed by Devnix Studios remain our intellectual property and may be reused in other projects.",
  },
  {
    id: "limitation-liability",
    icon: AlertCircle,
    title: "Limitation of Liability",
    content:
      "Devnix Studios is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.",
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact",
    content:
      "For any questions regarding these terms, contact us at Info@devnixstudios.tech or via WhatsApp at +92 318 4632828.",
  },
];

export default function TermsOfService() {
  return (
    <>
      <LegalLayout
        title="Terms of Service"
        badge="Legal Document"
        badgeColor="#8b5cf6"
        lastUpdated="May 2026"
        tocItems={sections.map((s) => ({ id: s.id, title: s.title }))}
      >
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <section
              key={section.id}
              id={section.id}
              className="group p-6 lg:p-8 rounded-2xl bg-white/2 border border-white/6 hover:border-[#8b5cf6]/20 hover:bg-white/4 transition-all duration-300 scroll-mt-28"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center text-white shrink-0 group-hover:shadow-lg group-hover:shadow-[#8b5cf6]/20 transition-shadow">
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