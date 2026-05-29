import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import IndustryPageContent from "@/components/IndustryPageContent";

export const metadata: Metadata = {
  title: "Clinic & Hospital Website Design Pakistan — Doctor Sites | Devnix Studios",
  description:
    "Professional clinic and hospital website design in Pakistan. Doctor profiles, appointment booking, services list. Starting at PKR 5,000.",
  keywords: [
    "clinic website Pakistan",
    "doctor website Pakistan",
    "hospital website Pakistan",
    "medical website design Pakistan",
    "dental clinic website Pakistan",
    "appointment booking website Pakistan",
  ],
  alternates: { canonical: "https://devnixstudios.tech/clinic-website-pakistan" },
  openGraph: {
    title: "Clinic Website Design Pakistan | Devnix Studios",
    description: "Professional clinic and hospital websites with appointment booking. Starting at PKR 5,000.",
    url: "https://devnixstudios.tech/clinic-website-pakistan",
    type: "website",
  },
};

const features = [
  { title: "Doctor Profiles", description: "Showcase each doctor with photo, qualifications, specialties, and experience. Build trust before the first visit." },
  { title: "Online Appointment Booking", description: "Patients book appointments directly via WhatsApp with date, time, and reason pre-filled. Reduces phone call workload." },
  { title: "Services List", description: "Clear list of all medical services you offer with descriptions. Patients know what to expect." },
  { title: "Location & Directions", description: "Google Maps integration with clear directions to your clinic. Patients find you easily, even in big cities." },
  { title: "Emergency Contact", description: "Prominent emergency contact information and after-hours phone number for urgent cases." },
  { title: "Patient Testimonials", description: "Share patient success stories and reviews to build credibility with new patients." },
];

const benefits = [
  "Modern, trustworthy design that builds patient confidence",
  "WhatsApp appointment booking matches Pakistani patient behavior",
  "Google Maps integration brings local walk-in patients",
  "SEO-optimized for searches like clinic near me Karachi",
  "Mobile-responsive — most patients search on phones",
  "Reduces phone calls with self-service information",
  "Professional appearance attracts higher-income patients",
  "Compliant with medical practice standards",
];

const whatsIncluded = [
  "Custom clinic website (no templates)",
  "Up to 5 doctor profiles",
  "All services listed with descriptions",
  "WhatsApp appointment booking",
  "Google Maps integration",
  "Patient testimonials section",
  "Mobile responsive design",
  "Google Business Profile setup",
  "Free 1-year hosting",
  "3 months management included",
];

const faq = [
  { q: "Do you handle patient appointment scheduling?", a: "We integrate WhatsApp-based appointment booking where patients send their preferred date, time, and reason. You receive the request on WhatsApp and confirm directly. This is simpler than complex booking systems and works for most Pakistani clinics." },
  { q: "Can I list multiple doctors and specialties?", a: "Yes! The package includes up to 5 doctor profiles with photos, qualifications, and specialties. Additional doctors cost PKR 200 each." },
  { q: "Will my clinic appear on Google Maps?", a: "Yes! We set up your Google Business Profile so your clinic appears in Google Maps and 'doctor near me' or 'clinic near me' searches. This is included." },
  { q: "Is this suitable for dental clinics or specialty practices?", a: "Absolutely! Our clinic websites work for general practitioners, dental clinics, dermatologists, pediatricians, and any medical specialty. We customize the content for your specific practice." },
  { q: "Can patients leave reviews on my website?", a: "We direct patients to leave reviews on your Google Business Profile (which appears in Google search). We display your best Google reviews on your website automatically." },
];

export default function ClinicWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <IndustryPageContent
        badge="Clinic Websites"
        badgeColor="#10b981"
        emoji="🏥"
        heroHeading="Professional Clinic & Hospital Websites for Pakistan"
        heroSubheading="Modern, trustworthy websites for doctors, clinics, and hospitals. Online appointment booking, doctor profiles, and patient testimonials included."
        industryName="Clinic"
        slug="clinic-website-pakistan"
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