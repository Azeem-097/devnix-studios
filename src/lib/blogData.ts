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
    slug: "5-reasons-small-business-needs-website-pakistan",
    title: "5 Reasons Every Small Business in Pakistan Needs a Website in 2026",
    description:
      "Still running your business on WhatsApp alone? Here are 5 reasons why every small business in Pakistan needs a website in 2026 — with real examples.",
    date: "2026-05-01",
    readTime: "9 min read",
    category: "Business",
    categoryColor: "#10b981",
    content: "",
  },
];
