import LegalLayout from "@/components/LegalLayout";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Shield, Eye, Lock, Globe, Cookie, UserCheck, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Devnix Studios",
  description: "Privacy Policy for Devnix Studios web development services.",
};

const sections = [
  {
    id: "information-we-collect",
    icon: Eye,
    title: "Information We Collect",
    content:
      "When you engage our services, we may collect personal information such as your name, email address, phone number, business name, and website content you provide. We also collect technical information when you visit our website, including IP addresses, browser type, and pages visited.",
  },
  {
    id: "how-we-use",
    icon: Shield,
    title: "How We Use Your Information",
    content:
      "We use the information we collect to provide our web development, SEO, and social media management services. This includes building your website, managing your online presence, communicating with you about your project, and improving our services.",
  },
  {
    id: "data-protection",
    icon: Lock,
    title: "Data Protection",
    content:
      "We implement appropriate security measures to protect your personal information. Your data is stored securely and is only accessible to authorized team members who need it to perform their duties.",
  },
  {
    id: "third-party",
    icon: Globe,
    title: "Third-Party Services",
    content:
      "We may use third-party services such as hosting providers, analytics tools, and social media platforms. These services have their own privacy policies, and we encourage you to review them. We do not sell your personal information to third parties.",
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies",
    content:
      "Our website may use cookies to enhance your browsing experience. These may include essential cookies for site functionality and analytics cookies to help us understand how visitors use our site.",
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You may also request that we stop processing your data. To exercise any of these rights, please contact us at Info@devnixstudios.tech.",
  },
  {
    id: "contact-us",
    icon: Mail,
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at Info@devnixstudios.tech or via WhatsApp at +92 318 4632828.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <LegalLayout
        title="Privacy Policy"
        badge="Legal Document"
        badgeColor="#6366f1"
        lastUpdated="January 2025"
        tocItems={sections.map((s) => ({ id: s.id, title: s.title }))}
      >
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <section
              key={section.id}
              id={section.id}
              className="group p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#6366f1]/20 hover:bg-white/[0.04] transition-all duration-300 scroll-mt-28"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white shrink-0 group-hover:shadow-lg group-hover:shadow-[#6366f1]/20 transition-shadow">
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