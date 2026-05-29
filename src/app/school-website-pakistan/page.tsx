import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "School & Academy Website Design Pakistan | Devnix Studios",
  description:
    "Professional school, academy, and institute website design in Pakistan. Admission forms, faculty profiles, course details. Starting at PKR 5,000.",
  keywords: [
    "school website Pakistan",
    "academy website Pakistan",
    "institute website Pakistan",
    "education website Pakistan",
    "school website design Pakistan",
    "college website Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/school-website-pakistan" },
  openGraph: {
    title: "School Website Design Pakistan | Devnix Studios",
    description: "Professional school and academy websites with admission forms. Starting at PKR 5,000.",
    url: "https://devnixstudios.tech/school-website-pakistan",
    type: "website",
  },
};

const features = [
  { title: "About & Mission", description: "Tell your school's story, mission, and values. Help parents understand what makes your institution special." },
  { title: "Online Admission Form", description: "Parents can fill admission forms online and submit via WhatsApp. Reduces paperwork and speeds up enrollment." },
  { title: "Faculty Profiles", description: "Showcase your teachers and staff with photos, qualifications, and experience. Builds confidence in your education quality." },
  { title: "Courses & Curriculum", description: "Detailed information about classes, subjects, programs, and curriculum offered at your institution." },
  { title: "Photo Gallery", description: "Show your campus, classrooms, events, and student activities. Pictures sell your environment better than words." },
  { title: "Contact & Location", description: "Multiple contact methods, Google Maps directions, and clear phone numbers for parent inquiries." },
];

const benefits = [
  "Professional appearance attracts parents seeking quality education",
  "Online admission forms make enrollment process easier",
  "Faculty profiles build credibility with parents",
  "Photo gallery showcases your school environment",
  "SEO helps parents find you when searching school name + city",
  "WhatsApp integration for quick parent communication",
  "Mobile-friendly — parents check schools on phones",
  "Reduces phone calls with self-service info",
];

const whatsIncluded = [
  "Custom school website (no templates)",
  "Up to 10 faculty profiles",
  "Online admission form",
  "Photo gallery section",
  "All courses/classes listed",
  "WhatsApp inquiry integration",
  "Google Maps location",
  "Mobile responsive design",
  "Google Business Profile setup",
  "Free 1-year hosting",
  "3 months management included",
];

const faq = [
  { q: "Is this suitable for schools, academies, or tuition centers?", a: "Yes! Our education website package works for schools (primary, secondary, high), academies, tuition centers, colleges, and training institutes. We customize the content for your specific type of institution." },
  { q: "Can parents apply for admission online?", a: "Yes! We include an online admission form where parents fill student details, select grade/class, and submit. You receive the application via WhatsApp or email and can follow up directly." },
  { q: "Can we list our teachers and their qualifications?", a: "Yes! The package includes up to 10 faculty profiles with photos, qualifications, subjects taught, and years of experience. Additional profiles cost PKR 200 each." },
  { q: "Do you provide a portal for students to check results or fees?", a: "Basic websites do not include student portals. For school management systems with student logins, fee tracking, and result portals, we can build a custom solution — contact us for a quote." },
  { q: "Will my school appear on Google when parents search?", a: "Yes! With Google Business Profile setup and SEO optimization, your school will appear in searches like 'best schools in [your city]' or '[school name] admissions'." },
];

export default function SchoolWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="School Websites"
        badgeColor="#3b82f6"
        emoji="🎓"
        heroHeading="Professional School & Academy Websites for Pakistan"
        heroSubheading="Modern, parent-friendly websites for schools, academies, and educational institutes. Online admissions, faculty profiles, and course details included."
        industryName="School"
        slug="school-website-pakistan"
        features={features}
        benefits={benefits}
        faq={faq}
        whatsIncluded={whatsIncluded}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}