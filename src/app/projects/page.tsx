import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsPageContent from "@/components/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Our Projects | Live Websites We Built | Devnix Studios",
  description:
    "Explore live websites built by Devnix Studios for Pakistan businesses. Custom-coded projects with modern design, fast performance, and seamless user experience.",
  keywords: [
    "devnix projects",
    "web development portfolio pakistan",
    "website examples pakistan",
    "custom website projects",
    "live websites pakistan",
    "devnix studios work",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/projects",
  },
  openGraph: {
    title: "Our Projects | Devnix Studios",
    description:
      "Live websites built for real Pakistan businesses. See our portfolio of custom-coded projects.",
    url: "https://devnixstudios.tech/projects",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <ProjectsPageContent />
      <Footer />
    </main>
  );
}