export interface SEOPackage {
  slug: string;
  title: string;
  emoji: string;
  shortDesc: string;
  price: string;
  pricePeriod: string;
  priceNumber: number;
  badge?: string;
  badgeColor: string;
  gradient: string;
  popular?: boolean;
  unavailable?: boolean;
  forWho: string;
  whatsIncluded: string[];
  deliverables: string[];
  features: string[];
  timeline: string;
}

export const seoPackages: SEOPackage[] = [
  {
    slug: "basic-seo-setup",
    title: "Basic SEO Setup",
    emoji: "🔍",
    shortDesc:
      "One-time SEO setup for your new website. Get the foundation right so Google can find and rank your business.",
    price: "PKR 5,000",
    pricePeriod: "one-time",
    priceNumber: 5000,
    badgeColor: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#a78bfa]",
    forWho:
      "New websites or businesses that have never done SEO before. Perfect starting point.",
    whatsIncluded: [
      "Keyword research for your business",
      "Meta titles for all pages",
      "Meta descriptions optimized",
      "Image alt texts added",
      "URL structure optimization",
      "Sitemap.xml generation",
      "Robots.txt setup",
      "Google Search Console setup",
      "Google Analytics installation",
      "Basic schema markup",
    ],
    deliverables: [
      "Optimized website pages",
      "Search Console verified",
      "Analytics tracking active",
      "Sitemap submitted to Google",
      "SEO setup report",
    ],
    features: [
      "Up to 10 pages optimized",
      "5-10 target keywords",
      "Local Pakistan keywords",
      "Mobile SEO check",
      "Page speed basics",
    ],
    timeline: "Completed within 3-5 days",
  },
  {
    slug: "monthly-seo-plan",
    title: "Monthly SEO Plan",
    emoji: "📈",
    shortDesc:
      "Ongoing SEO management to improve rankings month after month. Reports, optimization, and continuous improvement.",
    price: "PKR 20,000",
    pricePeriod: "/ month",
    priceNumber: 20000,
    badge: "Most Popular",
    badgeColor: "#6366f1",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    popular: true,
    forWho:
      "Businesses serious about ranking on Google long-term. Best ROI for sustained growth.",
    whatsIncluded: [
      "Monthly keyword tracking",
      "Continuous on-page optimization",
      "Content optimization",
      "New blog post SEO (2/month)",
      "Backlink monitoring",
      "Competitor analysis",
      "Technical SEO checks",
      "Monthly performance reports",
      "Google ranking updates",
      "Strategy adjustments",
    ],
    deliverables: [
      "Monthly SEO report (PDF)",
      "Ranking position tracking",
      "Traffic growth analysis",
      "Action plan for next month",
      "WhatsApp consultation",
    ],
    features: [
      "Up to 20 keywords tracked",
      "Unlimited page optimizations",
      "2 SEO-optimized blog posts/month",
      "Local + national SEO",
      "Cancel anytime",
    ],
    timeline: "Ongoing monthly service",
  },
  {
    slug: "local-seo-pakistan",
    title: "Local SEO Pakistan",
    emoji: "📍",
    shortDesc:
      "Rank #1 in your city. Get found by customers searching for businesses in Karachi, Lahore, Islamabad, or anywhere in Pakistan.",
    price: "PKR 20,000",
    pricePeriod: "one-time",
    priceNumber: 20000,
    badgeColor: "#06b6d4",
    gradient: "from-[#06b6d4] to-[#22d3ee]",
    forWho:
      "Local businesses targeting customers in specific cities — salons, restaurants, doctors, shops, services.",
    whatsIncluded: [
      "City-specific keyword research",
      "Local landing pages creation",
      "Google Business Profile setup",
      "Google Maps optimization",
      "NAP consistency (Name, Address, Phone)",
      "Local schema markup",
      "Pakistani directory submissions",
      "Local backlinks strategy",
      "Reviews acquisition guide",
      "Location pages optimization",
    ],
    deliverables: [
      "Google Business Profile live",
      "City landing page created",
      "5+ directory submissions",
      "Local SEO report",
      "Reviews growth plan",
    ],
    features: [
      "Target 1 city (or multiple +3000/city)",
      "Google Maps top 3 strategy",
      "Local pack optimization",
      "Mobile-first approach",
      "Urdu + English keywords",
    ],
    timeline: "Completed within 10-15 days",
  },
  {
    slug: "ecommerce-seo",
    title: "E-Commerce SEO",
    emoji: "🛍️",
    shortDesc:
      "Specialized SEO for online stores. Get every product to rank on Google and bring in organic sales.",
    price: "PKR 20,000",
    pricePeriod: "one-time",
    priceNumber: 20000,
    badgeColor: "#ec4899",
    gradient: "from-[#ec4899] to-[#f472b6]",
    forWho:
      "Online stores with multiple products — clothing brands, electronics, accessories, fashion stores.",
    whatsIncluded: [
      "Product page SEO optimization",
      "Category page optimization",
      "Product schema markup",
      "Image SEO for products",
      "Internal linking strategy",
      "Product description rewriting",
      "Title tag optimization",
      "Breadcrumb navigation",
      "Site search optimization",
      "Product reviews schema",
    ],
    deliverables: [
      "All products optimized",
      "Category pages optimized",
      "Product schema implemented",
      "Image optimization done",
      "Performance report",
    ],
    features: [
      "Up to 30 products covered",
      "Extra products: PKR 500 each",
      "Rich snippets in search",
      "Product star ratings ready",
      "Conversion-focused SEO",
    ],
    timeline: "Completed within 10-15 days",
  },
  {
    slug: "seo-audit-strategy",
    title: "SEO Audit & Strategy",
    unavailable: true,
    emoji: "🏆",
    shortDesc:
      "Deep-dive analysis of your current website. Get a complete audit + 90-day action plan to dominate Google.",
    price: "PKR 7,000",
    pricePeriod: "one-time",
    priceNumber: 7000,
    badgeColor: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#fbbf24]",
    forWho:
      "Existing websites struggling to rank, or businesses planning to invest seriously in SEO and want a roadmap first.",
    whatsIncluded: [
      "Complete technical SEO audit",
      "On-page SEO analysis",
      "Backlink profile analysis",
      "Competitor SEO analysis (3 competitors)",
      "Keyword opportunity report",
      "Content gap analysis",
      "Page speed analysis",
      "Mobile usability check",
      "User experience review",
      "90-day strategic action plan",
    ],
    deliverables: [
      "30+ page detailed audit report",
      "Competitor comparison chart",
      "Keyword opportunity sheet",
      "Priority action list",
      "90-day execution roadmap",
    ],
    features: [
      "Full website analysis",
      "100+ SEO factors checked",
      "Actionable recommendations",
      "1-hour consultation call",
      "Implementation guidance",
    ],
    timeline: "Audit delivered within 5-7 days",
  },
  {
    slug: "google-business-setup",
    title: "Google Business Setup",
    unavailable: true,
    emoji: "🚀",
    shortDesc:
      "Get your business listed on Google Maps and search. Essential for any local business in Pakistan.",
    price: "PKR 20,000",
    pricePeriod: "one-time",
    priceNumber: 20000,
    badgeColor: "#10b981",
    gradient: "from-[#10b981] to-[#34d399]",
    forWho:
      "Any local business that wants to appear on Google Maps when customers search nearby.",
    whatsIncluded: [
      "Google Business Profile creation",
      "Verification handling",
      "Business info optimization",
      "Service area setup",
      "Categories optimization",
      "Photo uploads (10+ photos)",
      "Business description writing",
      "Operating hours setup",
      "Attributes & features added",
      "Posts & updates setup",
    ],
    deliverables: [
      "Live Google Business Profile",
      "Google Maps listing active",
      "Optimized business info",
      "Photo gallery uploaded",
      "First Google post published",
    ],
    features: [
      "Single location setup",
      "Multiple locations: +5000/location",
      "Reviews response training",
      "Booking integration option",
      "Direct messaging enabled",
    ],
    timeline: "Live within 5-7 days (after verification)",
  },
];

