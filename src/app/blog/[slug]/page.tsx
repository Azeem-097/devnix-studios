import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSchema from "@/components/BlogSchema";
import BlogPostContent from "@/components/BlogPostContent";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogPosts } from "@/lib/blogData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Devnix Studios",
    };
  }

  return {
    title: `${post.title} | Devnix Studios`,
    description: post.description,
    alternates: {
      canonical: `https://devnixstudios.tech/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://devnixstudios.tech/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: "https://devnixstudios.tech/og-image.png" }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <BlogSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        datePublished={post.date}
      />
      <Navbar />
      <BlogPostContent post={post} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}