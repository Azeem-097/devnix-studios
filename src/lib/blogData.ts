export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-website-cost-pakistan",
    title: "How Much Does a Website Cost in Pakistan? (2025 Guide)",
    description:
      "Complete breakdown of website costs in Pakistan. From freelancers to agencies, templates to custom code. Find out exactly what you should pay.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Pricing",
    categoryColor: "#6366f1",
    content: "",
  },
  {
    slug: "custom-website-vs-wordpress-pakistan",
    title: "Custom Website vs WordPress — Which is Better for Pakistan Businesses?",
    description:
      "Honest comparison between custom-coded websites and WordPress for Pakistani businesses. Speed, cost, SEO, and long-term value explained.",
    date: "2025-01-20",
    readTime: "7 min read",
    category: "Web Design",
    categoryColor: "#8b5cf6",
    content: "",
  },
  {
    slug: "top-web-designers-pakistan-2025",
    title: "Top Web Designers in Pakistan 2025 — What to Look For",
    description:
      "How to find and choose the best web designer for your Pakistan business. Red flags to avoid, questions to ask, and what good work looks like.",
    date: "2025-01-25",
    readTime: "6 min read",
    category: "Tips",
    categoryColor: "#06b6d4",
    content: "",
  },
];