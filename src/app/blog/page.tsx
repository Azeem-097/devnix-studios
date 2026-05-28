import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogListingContent from "@/components/BlogListingContent";

export const metadata: Metadata = {
  title: "Blog | Web Design & SEO Tips for Pakistan Businesses | Devnix Studios",
  description:
    "Expert articles on website design, SEO, social media marketing, and digital growth for Pakistan businesses. Free guides and tips from Devnix Studios.",
  keywords: [
    "web design blog pakistan",
    "seo tips pakistan",
    "website cost pakistan",
    "digital marketing pakistan",
    "web development tips pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/blog",
  },
  openGraph: {
    title: "Blog | Devnix Studios",
    description:
      "Expert articles on web design, SEO, and digital marketing for Pakistan businesses.",
    url: "https://devnixstudios.tech/blog",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <BlogListingContent />
      <Footer />
    </main>
  );
}