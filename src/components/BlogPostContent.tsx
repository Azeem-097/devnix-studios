"use client";

import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/lib/blogData";
import { siteData } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

interface BlogPostContentProps {
  post: BlogPost;
}

function getPostBody(slug: string): React.ReactNode {
  switch (slug) {
    case "how-much-does-website-cost-pakistan":
      return <WebsiteCostPost />;
    case "custom-website-vs-wordpress-pakistan":
      return <CustomVsWordpressPost />;
    case "top-web-designers-pakistan-2025":
      return <TopWebDesignersPost />;
    default:
      return <p className="text-gray-400">Content coming soon.</p>;
  }
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="pt-20 lg:pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-white/4">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] opacity-20"
          style={{ backgroundColor: post.categoryColor }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Blog
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span
                className="px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider"
                style={{
                  color: post.categoryColor,
                  backgroundColor: `${post.categoryColor}15`,
                }}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-PK", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                By{" "}
                <span className="text-white font-medium">Devnix Studios</span>
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
            {getPostBody(post.slug)}
          </div>

          {/* CTA BOX */}
          <div className="mt-12 p-px rounded-2xl bg-gradient-to-br from-[#6366f1]/40 to-[#06b6d4]/40">
            <div className="bg-[#0c0c14] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Get Your Business Online?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Starting at just PKR 5,000 — custom website, SEO, and 3 months
                support included.
              </p>
              <a
                href={siteData.contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/20 transition-all duration-300"
              >
                <MessageCircle size={16} />
                WhatsApp Us Now
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* PREV / NEXT */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group p-5 rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <ArrowLeft size={12} />
                  Previous
                </div>
                <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                  {prevPost.title}
                </p>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group p-5 rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/20 transition-all duration-300 sm:text-right"
              >
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2 sm:justify-end">
                  Next
                  <ArrowRight size={12} />
                </div>
                <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   BLOG POST 1 — Website Cost Pakistan
============================================================ */
function WebsiteCostPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">
        One of the most common questions we get from Pakistan business owners
        is: how much should I pay for a website? The honest answer depends on
        what you need — but we will break it all down clearly.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        The 3 Types of Websites in Pakistan
      </h2>

      <h3 className="text-lg font-semibold text-white">
        1. Template-Based Websites (PKR 0 – 3,000)
      </h3>
      <p>
        Platforms like Wix, Weebly, or WordPress with a free theme. These look
        generic, load slowly, and rank poorly on Google. Fine for a personal
        blog, but not for a business trying to attract real customers.
      </p>

      <h3 className="text-lg font-semibold text-white">
        2. WordPress with Premium Theme (PKR 3,000 – 15,000)
      </h3>
      <p>
        A step up — but still template-based. You are paying for a theme that
        thousands of other websites already use. Performance is average, SEO
        requires extra plugins, and customization is limited without a
        developer.
      </p>

      <h3 className="text-lg font-semibold text-white">
        3. Custom-Built Website (PKR 5,000 – 50,000+)
      </h3>
      <p>
        Built from scratch by a developer. Fast, unique, SEO-optimized, and
        fully yours. This is what serious businesses use. The price varies based
        on complexity and the developer you hire.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        What Should a Website Cost in Pakistan in 2025?
      </h2>
      <p>Here is an honest breakdown based on market rates:</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 pr-6 text-white font-semibold">Type</th>
              <th className="text-left py-3 pr-6 text-white font-semibold">Price Range</th>
              <th className="text-left py-3 text-white font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/6">
            {[
              ["Freelancer (beginner)", "PKR 3,000 – 8,000", "Simple info sites"],
              ["Freelancer (experienced)", "PKR 8,000 – 25,000", "Business websites"],
              ["Agency (small)", "PKR 15,000 – 60,000", "Professional sites"],
              ["Devnix Studios", "PKR 5,000", "Complete package"],
            ].map(([type, price, best]) => (
              <tr key={type}>
                <td className="py-3 pr-6 text-gray-300">{type}</td>
                <td className="py-3 pr-6 text-[#6366f1] font-medium">{price}</td>
                <td className="py-3 text-gray-400">{best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-white mt-10">
        What Is Included at PKR 5,000 from Devnix Studios?
      </h2>
      <ul className="space-y-2">
        {[
          "Fully custom-built website (no templates)",
          "1 year free hosting",
          "Google Business listing setup",
          "3 months of support and management",
          "SEO optimization for all pages",
          "Social media management (Facebook and Instagram)",
          "Mobile responsive design",
          "Fast loading speed under 2 seconds",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[#06b6d4] mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">
        Hidden Costs to Watch Out For
      </h2>
      <p>
        Many developers quote a low price but charge extra for things that
        should be included. Watch out for:
      </p>
      <ul className="space-y-2">
        {[
          "Hosting fees not included in the quote",
          "Paying extra for mobile responsiveness",
          "SEO costs on top of the website price",
          "Maintenance charges for basic updates",
          "Domain registration not included",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-red-400 mt-1">✗</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">
        Final Verdict
      </h2>
      <p>
        For a Pakistani business that wants a professional online presence, PKR
        5,000 to 15,000 is the sweet spot for quality work. Anything below
        3,000 PKR will almost certainly be a template that does not help your
        business grow.
      </p>
      <p>
        At Devnix Studios, we offer a complete package starting at PKR 5,000
        that includes everything mentioned above — no hidden fees, no surprises.
      </p>
    </div>
  );
}

/* ============================================================
   BLOG POST 2 — Custom vs WordPress
============================================================ */
function CustomVsWordpressPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">
        If you are a business owner in Pakistan trying to get a website, you
        have probably heard both options — custom website or WordPress. Here is
        an honest comparison to help you decide.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        What is WordPress?
      </h2>
      <p>
        WordPress is a content management system (CMS) that lets you build
        websites without writing code. You install themes and plugins to add
        features. It powers about 40% of websites on the internet.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        What is a Custom Website?
      </h2>
      <p>
        A custom website is built from scratch by a developer — no pre-made
        themes, no plugins. Every line of code is written specifically for your
        business. This is what we build at Devnix Studios.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        Head-to-Head Comparison
      </h2>

      <div className="space-y-4">
        {[
          {
            topic: "Speed",
            wordpress: "Often slow due to plugins and bloated themes",
            custom: "Very fast — only loads what is needed",
            winner: "custom",
          },
          {
            topic: "SEO",
            wordpress: "Needs extra plugins like Yoast to do basic SEO",
            custom: "SEO built directly into the code from day one",
            winner: "custom",
          },
          {
            topic: "Security",
            wordpress: "Frequent vulnerabilities from plugins and themes",
            custom: "Much more secure — no third-party plugins",
            winner: "custom",
          },
          {
            topic: "Cost",
            wordpress: "Cheaper to start but expensive plugins add up",
            custom: "Higher upfront but better value long term",
            winner: "tie",
          },
          {
            topic: "Maintenance",
            wordpress: "Constant updates needed for plugins and core",
            custom: "Low maintenance — no plugins to update",
            winner: "custom",
          },
          {
            topic: "Unique Design",
            wordpress: "Thousands of sites look the same",
            custom: "100% unique to your brand",
            winner: "custom",
          },
        ].map((row) => (
          <div
            key={row.topic}
            className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/2 border border-white/6"
          >
            <div className="font-semibold text-white text-sm">{row.topic}</div>
            <div className="text-sm text-gray-400">{row.wordpress}</div>
            <div
              className={`text-sm ${
                row.winner === "custom"
                  ? "text-[#06b6d4] font-medium"
                  : "text-gray-400"
              }`}
            >
              {row.custom}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10">
        When Should You Use WordPress?
      </h2>
      <p>WordPress makes sense if:</p>
      <ul className="space-y-2">
        {[
          "You need a blog with hundreds of posts and authors",
          "You want to manage content yourself without a developer",
          "You have a very tight budget under PKR 3,000",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-yellow-400 mt-1">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">
        When Should You Use a Custom Website?
      </h2>
      <ul className="space-y-2">
        {[
          "You want a fast, SEO-optimized website that ranks on Google",
          "You want a unique design that represents your brand",
          "You are serious about growing your business online",
          "You want low maintenance and high security",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[#06b6d4] mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Our Verdict</h2>
      <p>
        For most Pakistan businesses — shops, services, poultry, textile,
        clinics, restaurants — a custom website is the better investment. It is
        faster, safer, ranks better on Google, and looks more professional.
      </p>
      <p>
        At Devnix Studios, we only build custom websites. Not because we cannot
        do WordPress — but because we believe our clients deserve better.
      </p>
    </div>
  );
}

/* ============================================================
   BLOG POST 3 — Top Web Designers Pakistan 2025
============================================================ */
function TopWebDesignersPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">
        Finding the right web designer in Pakistan can be confusing. There are
        hundreds of freelancers, agencies, and studios all claiming to be the
        best. Here is how to actually find someone good — and red flags to
        watch out for.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        What Makes a Good Web Designer in Pakistan?
      </h2>
      <p>
        Before you hire anyone, you need to know what to look for. A good web
        designer in Pakistan should have:
      </p>
      <ul className="space-y-2">
        {[
          "A real portfolio with live websites you can visit",
          "Knowledge of SEO — not just design",
          "Mobile-first approach (most Pakistanis browse on phones)",
          "Clear pricing with no hidden fees",
          "Direct communication — you should be able to reach them easily",
          "Fast delivery — not months of waiting",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[#06b6d4] mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">
        Red Flags to Avoid
      </h2>
      <ul className="space-y-2">
        {[
          "No portfolio or only showing screenshots (not live links)",
          "Promises first page on Google in 1 week",
          "Very low price with no explanation of what is included",
          "Takes payment fully upfront with no milestone",
          "Cannot explain what they are building or why",
          "Uses only WordPress templates and calls it custom work",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-red-400 mt-1">✗</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">
        Questions to Ask Before Hiring
      </h2>
      <div className="space-y-4">
        {[
          {
            q: "Can I see live examples of your work?",
            a: "Any serious designer will have live websites. If they only show images or Figma mockups, that is a red flag.",
          },
          {
            q: "Is SEO included?",
            a: "Many designers do the design but leave SEO out. Make sure meta tags, alt texts, and basic optimization is included.",
          },
          {
            q: "What happens after the website launches?",
            a: "You need ongoing support. Ask if maintenance, updates, and changes are included or what they cost.",
          },
          {
            q: "How long will it take?",
            a: "A realistic timeline for a custom website is 5-14 days. Anyone promising 24 hours is cutting corners.",
          },
          {
            q: "Who hosts the website?",
            a: "Make sure you know who pays for hosting and what happens if you stop working with them.",
          },
        ].map((item) => (
          <div key={item.q} className="p-4 rounded-xl bg-white/2 border border-white/6">
            <p className="font-semibold text-white text-sm mb-1">{item.q}</p>
            <p className="text-sm text-gray-400">{item.a}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10">
        Where to Find Web Designers in Pakistan
      </h2>
      <ul className="space-y-2">
        {[
          "Google Search — search your city name plus web designer",
          "Facebook Groups — many local designers post their work",
          "Upwork and Fiverr — international freelance platforms",
          "Referrals — ask other business owners who they used",
          "Devnix Studios — we serve all of Pakistan remotely",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[#8b5cf6] mt-1">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">
        What Does Devnix Studios Offer?
      </h2>
      <p>
        We are a Pakistan-based web studio offering fully custom websites
        starting at PKR 5,000. Every website includes SEO, social media
        management, Google Business setup, and 3 months of ongoing support.
      </p>
      <p>
        We serve clients across all of Pakistan — Karachi, Lahore, Islamabad,
        Faisalabad, Rawalpindi, Multan, and Peshawar — completely online via
        WhatsApp.
      </p>
      <p>
        Our work is transparent. You can view our live projects on our website
        and talk directly with the developer who will build your site.
      </p>
    </div>
  );
}