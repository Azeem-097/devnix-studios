import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebDevServicesContent from "@/components/WebDevServicesContent";

export const metadata: Metadata = {
  title:
    "Web Development Services Pakistan | 12 Website Packages at PKR 20,000 | Devnix Studios",
  description:
    "Complete web development services in Pakistan starting at PKR 20,000. Online stores, portfolios, restaurants, hotels, hospitals, schools, salons, gyms, real estate websites and more. All custom built.",
  keywords: [
    "web development pakistan",
    "website packages pakistan",
    "online store pakistan",
    "portfolio website pakistan",
    "restaurant website pakistan",
    "hotel website pakistan",
    "hospital website pakistan",
    "school website pakistan",
    "salon website pakistan",
    "gym website pakistan",
    "real estate website pakistan",
    "bakery website pakistan",
    "landing page pakistan",
    "ecommerce pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/web-development-services",
  },
  openGraph: {
    title: "Web Development Services Pakistan | Devnix Studios",
    description:
      "12 custom website packages all at PKR 20,000. Online stores, restaurants, hotels, hospitals, schools, and more.",
    url: "https://devnixstudios.tech/web-development-services",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function WebDevServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <WebDevServicesContent />
      <Footer />
    </main>
  );
}