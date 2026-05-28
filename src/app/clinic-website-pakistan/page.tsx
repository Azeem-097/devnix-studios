import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Clinic Website Pakistan | Doctor Website Design | Devnix Studios",
  description:
    "Professional clinic and doctor website design in Pakistan starting at PKR 5,000. Online appointment booking, doctor profiles, services, and Google Maps. Grow your practice online!",
  keywords: [
    "clinic website pakistan",
    "doctor website pakistan",
    "medical website pakistan",
    "hospital website pakistan",
    "online appointment booking pakistan",
    "clinic website karachi",
    "clinic website lahore",
    "doctor website design pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/clinic-website-pakistan",
  },
  openGraph: {
    title: "Clinic Website Pakistan | Devnix Studios",
    description:
      "Custom clinic and doctor websites in Pakistan starting at PKR 5,000. Appointment booking, doctor profiles, services list.",
    url: "https://devnixstudios.tech/clinic-website-pakistan",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function ClinicPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Clinic Websites"
        badgeColor="#10b981"
        emoji="🏥"
        heroHeading="Clinic & Doctor Website Design in Pakistan"
        heroSubheading="Build trust with patients online. Professional clinic website with doctor profiles, services list, WhatsApp appointment booking, and Google Maps — starting at PKR 5,000."
        industryName="Clinic"
        features={[
          {
            title: "Doctor Profiles",
            description:
              "Professional profiles for each doctor with qualifications, specializations, and experience.",
          },
          {
            title: "Services List",
            description:
              "Complete list of medical services offered with descriptions and pricing if applicable.",
          },
          {
            title: "WhatsApp Appointments",
            description:
              "Patients book appointments directly via WhatsApp. Simple, fast, and no software needed.",
          },
          {
            title: "Clinic Location",
            description:
              "Google Maps integration so patients can easily find your clinic and get directions.",
          },
          {
            title: "Timing & Hours",
            description:
              "Display clinic timings, appointment hours, and emergency contact information clearly.",
          },
          {
            title: "Trust Building",
            description:
              "Professional design that builds patient confidence and sets your clinic apart from others.",
          },
        ]}
        whatsIncluded={[
          "Custom clinic website design",
          "Doctor profiles section",
          "Services and treatments list",
          "WhatsApp appointment button",
          "Google Maps integration",
          "1 year free hosting",
          "Google Business listing",
          "3 months support",
          "Local SEO optimization",
          "Mobile responsive design",
          "Contact and timing info",
          "Fast loading speed",
        ]}
        benefits={[
          "Patients find your clinic on Google",
          "Book appointments via WhatsApp",
          "Build trust with professional design",
          "Show doctor qualifications online",
          "Get found on Google Maps",
          "Stand out from other clinics",
        ]}
        faq={[
          {
            q: "Can patients book appointments through the website?",
            a: "Yes! We add a WhatsApp appointment button so patients can book directly. No complicated booking software needed.",
          },
          {
            q: "Can I add multiple doctors?",
            a: "Yes! We start with profiles for your main doctors. Adding more doctor profiles costs 300 PKR each.",
          },
          {
            q: "Is this good for a small clinic?",
            a: "Absolutely. Even a single-doctor clinic benefits greatly from an online presence. Patients search for doctors online before visiting.",
          },
          {
            q: "Do you handle the Google Business listing for clinics?",
            a: "Yes! Google Business setup is included free. This helps your clinic appear in Google Maps when patients search nearby.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}