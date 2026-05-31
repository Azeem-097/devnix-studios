import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devnixstudios.tech";
  const now = new Date();

  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/web-development-services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/seo-services-pakistan`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/social-media-management-pakistan`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/website-design-karachi`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/website-design-lahore`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/website-design-islamabad`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/website-design-faisalabad`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/website-design-rawalpindi`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/website-design-multan`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/website-design-peshawar`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/restaurant-website-pakistan`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/clinic-website-pakistan`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/school-website-pakistan`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/salon-website-pakistan`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/real-estate-website-pakistan`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/poultry-business-website`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/textile-business-website`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/refund-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...blogPages];
}
