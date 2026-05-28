import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "School Website Pakistan | Academy Website Design | Devnix Studios",
  description:
    "Professional school and academy website design in Pakistan starting at PKR 5,000. Admissions info, class schedules, teacher profiles, and notice board. Get your school online today!",
  keywords: [
    "school website pakistan",
    "academy website pakistan",
    "school website design pakistan",
    "online school pakistan",
    "madrasa website pakistan",
    "college website pakistan",
    "school website karachi",
    "school website lahore",
    "tuition center website pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/school-website-pakistan",
  },
  openGraph: {
    title: "School Website Pakistan | Devnix Studios",
    description:
      "Custom school and academy websites in Pakistan starting at PKR 5,000. Admissions, schedules, teacher profiles.",
    url: "https://devnixstudios.tech/school-website-pakistan",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function SchoolPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="School Websites"
        badgeColor="#f59e0b"
        emoji="🏫"
        heroHeading="School & Academy Website Design in Pakistan"
        heroSubheading="Give your school a professional online presence. Display admissions info, class schedules, teacher profiles, and notices — all starting at PKR 5,000."
        industryName="School"
        features={[
          {
            title: "Admissions Information",
            description:
              "Clear admissions process, requirements, fee structure, and contact info for new students.",
          },
          {
            title: "Class Schedule",
            description:
              "Display class timings, grade levels, and subjects offered so parents know what to expect.",
          },
          {
            title: "Teacher Profiles",
            description:
              "Professional profiles for teachers with qualifications and subjects they teach.",
          },
          {
            title: "Notice Board",
            description:
              "Online notice board for announcements, holidays, exam schedules, and important updates.",
          },
          {
            title: "Photo Gallery",
            description:
              "School events, activities, and achievements displayed in a beautiful gallery.",
          },
          {
            title: "WhatsApp Contact",
            description:
              "Parents contact the school directly via WhatsApp for admissions and inquiries.",
          },
        ]}
        whatsIncluded={[
          "Custom school website design",
          "Admissions info page",
          "Class schedule display",
          "Teacher profiles section",
          "Online notice board",
          "1 year free hosting",
          "Google Business listing",
          "3 months support",
          "Local SEO optimization",
          "Mobile responsive design",
          "Photo gallery section",
          "WhatsApp contact button",
        ]}
        benefits={[
          "Parents find your school on Google",
          "Professional image builds trust",
          "Share notices and updates online",
          "Show admissions info clearly",
          "Get found on Google Maps",
          "Stand out from nearby schools",
        ]}
        faq={[
          {
            q: "Can parents apply for admissions through the website?",
            a: "Yes! We add a WhatsApp button for admissions inquiries so parents can contact you directly and easily.",
          },
          {
            q: "Can I update notices and schedules?",
            a: "Yes! Updating the notice board and schedules is included in monthly management. Just send us the updates.",
          },
          {
            q: "Is this suitable for a small tuition center?",
            a: "Absolutely! Even small tuition centers benefit from a website. Parents search online for tutors and academies near them.",
          },
          {
            q: "Can you add Urdu content for the school?",
            a: "Yes! We can include Urdu text alongside English for school names, notices, and other content.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}