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
    case "5-reasons-every-small-business-needs-a-website":
      return <FiveReasonsPost />;
    case "facebook-ads-without-website-big-mistake":
      return <FacebookAdsPost />;
    case "best-hosting-options-pakistan-2025":
      return <HostingPost />;
    case "seo-guide-pakistan-businesses":
      return <SEOGuidePost />;
    case "free-website-vs-paid-website-pakistan":
      return <FreeVsPaidPost />;
    case "complete-guide-online-store-pakistan":
      return <OnlineStorePost />;
    case "how-to-choose-web-designer-your-city":
      return <ChooseWebDesignerPost />;
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

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

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
   SHARED COMPONENTS
============================================================ */
function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-[#06b6d4] mt-1 shrink-0">✓</span>
      <span>{text}</span>
    </li>
  );
}

function CrossItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-red-400 mt-1 shrink-0">✗</span>
      <span>{text}</span>
    </li>
  );
}

function ArrowItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-[#8b5cf6] mt-1 shrink-0">→</span>
      <span>{text}</span>
    </li>
  );
}

function PostH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-white mt-10 mb-4">{children}</h2>
  );
}

function PostH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-white mt-6 mb-2">{children}</h3>
  );
}

function PostLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg text-gray-200 font-medium mb-6">{children}</p>
  );
}

/* ============================================================
   BLOG POST 1 — Website Cost Pakistan
============================================================ */
function WebsiteCostPost() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <PostLead>
        One of the most common questions we get from Pakistan business owners
        is: how much should I pay for a website? The honest answer depends on
        what you need — but we will break it all down clearly.
      </PostLead>

      <PostH2>The 3 Types of Websites in Pakistan</PostH2>
      <PostH3>1. Template-Based Websites (PKR 0 – 3,000)</PostH3>
      <p>
        Platforms like Wix, Weebly, or WordPress with a free theme. These look
        generic, load slowly, and rank poorly on Google. Fine for a personal
        blog, but not for a business trying to attract real customers.
      </p>
      <PostH3>2. WordPress with Premium Theme (PKR 3,000 – 15,000)</PostH3>
      <p>
        A step up — but still template-based. You are paying for a theme that
        thousands of other websites already use. Performance is average, SEO
        requires extra plugins, and customization is limited.
      </p>
      <PostH3>3. Custom-Built Website (PKR 5,000 – 50,000+)</PostH3>
      <p>
        Built from scratch by a developer. Fast, unique, SEO-optimized, and
        fully yours. This is what serious businesses use.
      </p>

      <PostH2>What Should a Website Cost in Pakistan in 2025?</PostH2>
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

      <PostH2>What Is Included at PKR 5,000 from Devnix Studios?</PostH2>
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
        ].map((item) => <CheckItem key={item} text={item} />)}
      </ul>

      <PostH2>Hidden Costs to Watch Out For</PostH2>
      <ul className="space-y-2">
        {[
          "Hosting fees not included in the quote",
          "Paying extra for mobile responsiveness",
          "SEO costs on top of the website price",
          "Maintenance charges for basic updates",
          "Domain registration not included",
        ].map((item) => <CrossItem key={item} text={item} />)}
      </ul>

      <PostH2>Final Verdict</PostH2>
      <p>
        For a Pakistani business that wants a professional online presence, PKR
        5,000 to 15,000 is the sweet spot for quality work. At Devnix Studios,
        we offer a complete package starting at PKR 5,000 — no hidden fees,
        no surprises.
      </p>
    </div>
  );
}

/* ============================================================
   BLOG POST 2 — Custom vs WordPress
============================================================ */
function CustomVsWordpressPost() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <PostLead>
        If you are a business owner in Pakistan trying to get a website, you
        have probably heard both options — custom website or WordPress. Here is
        an honest comparison to help you decide.
      </PostLead>

      <PostH2>What is WordPress?</PostH2>
      <p>
        WordPress is a content management system (CMS) that lets you build
        websites without writing code. It powers about 40% of websites on the
        internet.
      </p>

      <PostH2>What is a Custom Website?</PostH2>
      <p>
        A custom website is built from scratch by a developer — no pre-made
        themes, no plugins. Every line of code is written specifically for your
        business.
      </p>

      <PostH2>Head-to-Head Comparison</PostH2>
      <div className="space-y-3">
        {[
          { topic: "Speed", wordpress: "Often slow due to plugins and bloated themes", custom: "Very fast — only loads what is needed", winner: "custom" },
          { topic: "SEO", wordpress: "Needs extra plugins like Yoast to do basic SEO", custom: "SEO built directly into the code from day one", winner: "custom" },
          { topic: "Security", wordpress: "Frequent vulnerabilities from plugins and themes", custom: "Much more secure — no third-party plugins", winner: "custom" },
          { topic: "Cost", wordpress: "Cheaper to start but expensive plugins add up", custom: "Higher upfront but better value long term", winner: "tie" },
          { topic: "Maintenance", wordpress: "Constant updates needed for plugins and core", custom: "Low maintenance — no plugins to update", winner: "custom" },
          { topic: "Unique Design", wordpress: "Thousands of sites look the same", custom: "100% unique to your brand", winner: "custom" },
        ].map((row) => (
          <div key={row.topic} className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/2 border border-white/6">
            <div className="font-semibold text-white text-sm">{row.topic}</div>
            <div className="text-sm text-gray-400">{row.wordpress}</div>
            <div className={`text-sm ${row.winner === "custom" ? "text-[#06b6d4] font-medium" : "text-gray-400"}`}>{row.custom}</div>
          </div>
        ))}
      </div>

      <PostH2>When Should You Use WordPress?</PostH2>
      <ul className="space-y-2">
        {["You need a blog with hundreds of posts and authors", "You want to manage content yourself without a developer", "You have a very tight budget under PKR 3,000"].map((item) => <ArrowItem key={item} text={item} />)}
      </ul>

      <PostH2>When Should You Use a Custom Website?</PostH2>
      <ul className="space-y-2">
        {["You want a fast, SEO-optimized website that ranks on Google", "You want a unique design that represents your brand", "You are serious about growing your business online", "You want low maintenance and high security"].map((item) => <CheckItem key={item} text={item} />)}
      </ul>

      <PostH2>Our Verdict</PostH2>
      <p>
        For most Pakistan businesses — shops, services, poultry, textile,
        clinics, restaurants — a custom website is the better investment. At
        Devnix Studios, we only build custom websites because our clients
        deserve better.
      </p>
    </div>
  );
}

/* ============================================================
   BLOG POST 3 — Top Web Designers Pakistan
============================================================ */
function TopWebDesignersPost() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <PostLead>
        Finding the right web designer in Pakistan can be confusing. There are
        hundreds of freelancers, agencies, and studios all claiming to be the
        best. Here is how to actually find someone good.
      </PostLead>

      <PostH2>What Makes a Good Web Designer in Pakistan?</PostH2>
      <ul className="space-y-2">
        {["A real portfolio with live websites you can visit", "Knowledge of SEO — not just design", "Mobile-first approach (most Pakistanis browse on phones)", "Clear pricing with no hidden fees", "Direct communication — you should be able to reach them easily", "Fast delivery — not months of waiting"].map((item) => <CheckItem key={item} text={item} />)}
      </ul>

      <PostH2>Red Flags to Avoid</PostH2>
      <ul className="space-y-2">
        {["No portfolio or only showing screenshots (not live links)", "Promises first page on Google in 1 week", "Very low price with no explanation of what is included", "Takes payment fully upfront with no milestone", "Cannot explain what they are building or why", "Uses only WordPress templates and calls it custom work"].map((item) => <CrossItem key={item} text={item} />)}
      </ul>

      <PostH2>Questions to Ask Before Hiring</PostH2>
      <div className="space-y-4">
        {[
          { q: "Can I see live examples of your work?", a: "Any serious designer will have live websites. If they only show images or Figma mockups, that is a red flag." },
          { q: "Is SEO included?", a: "Many designers do the design but leave SEO out. Make sure meta tags, alt texts, and basic optimization is included." },
          { q: "What happens after the website launches?", a: "You need ongoing support. Ask if maintenance, updates, and changes are included or what they cost." },
          { q: "How long will it take?", a: "A realistic timeline for a custom website is 5-14 days. Anyone promising 24 hours is cutting corners." },
          { q: "Who hosts the website?", a: "Make sure you know who pays for hosting and what happens if you stop working with them." },
        ].map((item) => (
          <div key={item.q} className="p-4 rounded-xl bg-white/2 border border-white/6">
            <p className="font-semibold text-white text-sm mb-1">{item.q}</p>
            <p className="text-sm text-gray-400">{item.a}</p>
          </div>
        ))}
      </div>

      <PostH2>What Does Devnix Studios Offer?</PostH2>
      <p>
        We are a Pakistan-based web studio offering fully custom websites
        starting at PKR 5,000. Every website includes SEO, social media
        management, Google Business setup, and 3 months of ongoing support.
        We serve clients across all of Pakistan — completely online via WhatsApp.
      </p>
    </div>
  );
}

/* ============================================================
   BLOG POST 4 — 5 Reasons Every Small Business Needs a Website
============================================================ */
function FiveReasonsPost() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <PostLead>
        In 2025, if your business is not online, you are invisible to thousands
        of potential customers searching Google every day. Here are 5 powerful
        reasons why every Pakistani small business needs a website right now.
      </PostLead>

      <PostH2>1. Your Customers Are Searching Online</PostH2>
      <p>
        Over 50 million Pakistanis use the internet daily. When someone needs a
        plumber, a clothing store, a doctor, or a restaurant — the first thing
        they do is Google it. If your business does not appear, your competitor
        gets that customer.
      </p>
      <p>
        A website puts your business on Google so customers in your area can
        find you 24 hours a day, 7 days a week — even when you are asleep.
      </p>

      <PostH2>2. A Website Builds Trust Instantly</PostH2>
      <p>
        Think about the last time you considered buying from a business that had
        no website. Did you feel confident about it? Probably not. In 2025,
        customers expect businesses to have an online presence.
      </p>
      <p>
        A professional website with your services, prices, and contact
        information tells customers you are a real, trustworthy business — not
        just a WhatsApp number.
      </p>

      <PostH2>3. It Works Even When You Do Not</PostH2>
      <p>
        Your website is your 24/7 salesperson. It shows your products,
        answers common questions, and sends customers directly to your WhatsApp
        — even at 2am when you are not available.
      </p>
      <p>
        Many businesses miss sales simply because they were not available to
        answer calls or messages. A website captures those leads automatically.
      </p>

      <PostH2>4. Facebook Alone Is Not Enough</PostH2>
      <p>
        Many Pakistani businesses rely entirely on Facebook or Instagram. The
        problem? You do not own those platforms. Facebook can reduce your reach,
        change its algorithm, or even suspend your account.
      </p>
      <p>
        A website is an asset you own completely. No algorithm changes, no
        account bans. Your customers can always find you.
      </p>

      <PostH2>5. Your Competitors Already Have One</PostH2>
      <p>
        If you do not have a website and your competitor does, they will always
        have an advantage. They appear on Google, they build trust, they capture
        leads — while you rely on word of mouth alone.
      </p>
      <p>
        The good news? Getting a professional website in Pakistan is now
        affordable. At Devnix Studios, we build complete custom websites
        starting at just PKR 5,000 — including hosting, SEO, and 3 months
        of support.
      </p>

      <PostH2>How to Get Started</PostH2>
      <ul className="space-y-2">
        {["Contact us on WhatsApp", "Tell us about your business and goals", "We build your website in 5-10 days", "Your business goes live on Google", "You start getting new customers online"].map((item) => <CheckItem key={item} text={item} />)}
      </ul>
    </div>
  );
}

/* ============================================================
   BLOG POST 5 — Facebook Ads Without Website
============================================================ */
function FacebookAdsPost() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <PostLead>
        You spend PKR 5,000 on Facebook ads. People click on your ad. They land
        on your Facebook page — and then leave. No sale. No lead. Money wasted.
        This is happening to thousands of Pakistani businesses every day.
      </PostLead>

      <PostH2>Why Facebook Ads Without a Website Fail</PostH2>
      <p>
        Facebook ads are designed to send traffic somewhere specific. When you
        run ads without a website, you are sending expensive paid traffic to
        your Facebook page — which looks unprofessional and gives visitors
        nowhere to take action.
      </p>

      <PostH2>The Problem With Sending Ads to Your Facebook Page</PostH2>
      <ul className="space-y-2">
        {[
          "Visitors see your page, get distracted by other posts and leave",
          "No dedicated landing page means no clear call to action",
          "You cannot track conversions or measure ad effectiveness",
          "Facebook pixel cannot optimize your ad without website data",
          "Competitors with websites always convert better",
        ].map((item) => <CrossItem key={item} text={item} />)}
      </ul>

      <PostH2>What Happens When You Add a Website</PostH2>
      <ul className="space-y-2">
        {[
          "Ads send traffic to a focused landing page designed to convert",
          "Meta Pixel tracks visitor behavior and optimizes your ads",
          "Customers see your products, prices, and WhatsApp button clearly",
          "You capture leads even if they do not buy immediately",
          "Ad costs go down as conversion rates improve",
        ].map((item) => <CheckItem key={item} text={item} />)}
      </ul>

      <PostH2>Real Example from Pakistan</PostH2>
      <p>
        One of our clients — a clothing boutique in Karachi — was spending PKR
        8,000 per month on Facebook ads with zero measurable results. After we
        built them a custom website with Meta Pixel installed, their cost per
        WhatsApp inquiry dropped by 60% within the first month.
      </p>
      <p>
        The ads did not change. The product did not change. Only the
        destination changed — from a Facebook page to a professional website.
      </p>

      <PostH2>What You Need to Run Facebook Ads Properly</PostH2>
      <div className="space-y-3">
        {[
          { title: "A Professional Website", desc: "Designed to convert visitors into customers with clear CTAs." },
          { title: "Meta Pixel Installed", desc: "Tracks visitor behavior and lets Facebook optimize your ads automatically." },
          { title: "Dedicated Landing Page", desc: "A specific page for each ad campaign that matches the ad message." },
          { title: "WhatsApp Button", desc: "Make it easy for interested visitors to contact you instantly." },
        ].map((item) => (
          <div key={item.title} className="p-4 rounded-xl bg-white/2 border border-white/6">
            <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <PostH2>Bottom Line</PostH2>
      <p>
        Running Facebook ads without a website is like paying for a billboard
        with no phone number on it. At Devnix Studios, every website we build
        includes Meta Pixel installation free — so your ads actually work.
      </p>
    </div>
  );
}

/* ============================================================
   BLOG POST 6 — Best Hosting Options Pakistan
============================================================ */
function HostingPost() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <PostLead>
        Choosing the right web hosting in Pakistan is one of the most important
        decisions for your website. Bad hosting means slow load times, frequent
        downtime, and lost customers. Here is what actually works.
      </PostLead>

      <PostH2>Types of Web Hosting Available in Pakistan</PostH2>

      <PostH3>1. Shared Hosting</PostH3>
      <p>
        Your website shares a server with hundreds of other websites. It is the
        cheapest option but also the slowest. Good for basic blogs, bad for
        businesses that need speed and reliability.
      </p>
      <p>
        <strong className="text-white">Price:</strong> PKR 1,000 – 5,000/year
      </p>

      <PostH3>2. VPS Hosting (Virtual Private Server)</PostH3>
      <p>
        You get a dedicated portion of a server. Much faster and more reliable
        than shared hosting. Ideal for growing businesses with moderate traffic.
      </p>
      <p>
        <strong className="text-white">Price:</strong> PKR 5,000 – 20,000/year
      </p>

      <PostH3>3. Cloud Hosting</PostH3>
      <p>
        Your website runs on multiple servers simultaneously. If one server has
        an issue, another takes over. This is what we use for all our client
        websites — it is fast, reliable, and scalable.
      </p>
      <p>
        <strong className="text-white">Price:</strong> PKR 3,000 – 15,000/year
      </p>

      <PostH2>Best Hosting Options for Pakistan Websites</PostH2>
      <div className="space-y-3">
        {[
          { name: "Vercel", type: "Cloud (Free Tier Available)", speed: "Excellent", best: "Next.js / React websites", note: "What Devnix Studios uses" },
          { name: "Cloudflare Pages", type: "Cloud (Free Tier Available)", speed: "Excellent", best: "Static sites", note: "Global CDN included" },
          { name: "DigitalOcean", type: "VPS / Cloud", speed: "Very Good", best: "Custom applications", note: "USD billing" },
          { name: "Namecheap", type: "Shared / VPS", speed: "Good", best: "WordPress sites", note: "Pakistani payment accepted" },
          { name: "HosterPK", type: "Shared", speed: "Average", best: "Beginners in Pakistan", note: "Local Pakistani host" },
        ].map((h) => (
          <div key={h.name} className="p-4 rounded-xl bg-white/2 border border-white/6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-white text-sm">{h.name}</p>
              {h.note && <span className="text-xs text-[#06b6d4] bg-[#06b6d4]/10 px-2 py-0.5 rounded-full">{h.note}</span>}
            </div>
            <p className="text-xs text-gray-500">Type: {h.type} • Speed: {h.speed} • Best for: {h.best}</p>
          </div>
        ))}
      </div>

      <PostH2>What We Recommend for Pakistan Businesses</PostH2>
      <p>
        At Devnix Studios, we host all client websites on Vercel and Cloudflare
        — two of the fastest platforms in the world with global CDN distribution.
        This means your website loads fast for visitors in Karachi, Lahore, or
        anywhere in Pakistan.
      </p>
      <p>
        The first year of hosting is completely free for all our clients. After
        that, minimal charges apply based on traffic. Most small business
        websites stay free or cost less than PKR 2,000/year.
      </p>

      <PostH2>Things to Avoid When Choosing Hosting</PostH2>
      <ul className="space-y-2">
        {[
          "Shared hosting with unlimited claims — they throttle your speed",
          "Hosts that lock you into long contracts with no refund",
          "Local Pakistani hosts with servers only in Pakistan — international CDN is better",
          "Free hosting from unknown providers — unreliable and slow",
        ].map((item) => <CrossItem key={item} text={item} />)}
      </ul>
    </div>
  );
}

/* ============================================================
   BLOG POST 7 — SEO Guide Pakistan
============================================================ */
function SEOGuidePost() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <PostLead>
        SEO — Search Engine Optimization — is how your business appears on
        Google when customers search for your products or services. This guide
        is written specifically for Pakistani businesses who want real results
        from Google in 2025.
      </PostLead>

      <PostH2>Why SEO Matters for Pakistan Businesses</PostH2>
      <p>
        Google is the first place Pakistani customers go when they need
        something. Ranking on the first page means free, consistent traffic
        every day — without paying for ads. A well-optimized website can bring
        in more customers than all your social media combined.
      </p>

      <PostH2>Step 1: Keyword Research for Pakistan</PostH2>
      <p>
        Start by finding what your customers actually search for. Use Google
        Search itself — type your product or service and look at the
        autocomplete suggestions. These are real searches people make.
      </p>
      <p>
        For a Pakistani business, always include location keywords. Examples:
      </p>
      <ul className="space-y-2">
        {[
          "website design Karachi",
          "poultry farm Lahore",
          "salon near me Islamabad",
          "textile supplier Faisalabad",
          "real estate agent Rawalpindi",
        ].map((item) => <ArrowItem key={item} text={item} />)}
      </ul>

      <PostH2>Step 2: On-Page SEO</PostH2>
      <p>On-page SEO is what you put on each page of your website:</p>
      <div className="space-y-3">
        {[
          { title: "Title Tag", desc: "Include your main keyword and city. Example: 'Website Design in Karachi — Devnix Studios'" },
          { title: "Meta Description", desc: "A 155-character summary of your page with your keyword. This appears in Google search results." },
          { title: "H1 Heading", desc: "One clear main heading per page that includes your keyword." },
          { title: "Image Alt Text", desc: "Describe every image with keywords so Google understands what they show." },
          { title: "URL Structure", desc: "Keep URLs short and include keywords. Example: /website-design-karachi" },
        ].map((item) => (
          <div key={item.title} className="p-4 rounded-xl bg-white/2 border border-white/6">
            <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <PostH2>Step 3: Google Business Profile</PostH2>
      <p>
        For local Pakistani businesses, Google Business Profile (formerly Google
        My Business) is essential. It makes you appear in Google Maps when
        people search for businesses near them.
      </p>
      <ul className="space-y-2">
        {[
          "Create a free Google Business Profile",
          "Add your business name, address, and phone number",
          "Upload photos of your products or store",
          "Add your services and pricing",
          "Ask satisfied customers to leave Google reviews",
        ].map((item) => <CheckItem key={item} text={item} />)}
      </ul>

      <PostH2>Step 4: Technical SEO Basics</PostH2>
      <ul className="space-y-2">
        {[
          "Make sure your website loads in under 3 seconds",
          "Ensure your website works perfectly on mobile phones",
          "Use HTTPS (SSL certificate) — Google penalizes HTTP sites",
          "Create a sitemap.xml and submit it to Google Search Console",
          "Fix any broken links on your website",
        ].map((item) => <CheckItem key={item} text={item} />)}
      </ul>

      <PostH2>Step 5: Content Strategy for Pakistan</PostH2>
      <p>
        Write blog posts about topics your customers search for. Answer their
        questions before they even ask. This is called content marketing and it
        builds long-term SEO authority.
      </p>
      <p>
        For example, a textile business in Faisalabad could write: &quot;Best
        Fabric Types for Summer in Pakistan&quot; — this attracts customers
        researching fabric before buying.
      </p>

      <PostH2>How Long Does SEO Take in Pakistan?</PostH2>
      <p>
        SEO is not instant. Expect to see initial results in 2-3 months and
        significant improvement in 6-12 months. The key is consistency —
        regular content updates, product additions, and link building.
      </p>
      <p>
        At Devnix Studios, every website we build is SEO-optimized from day one
        — meta tags, alt texts, heading structure, sitemap, and Google Business
        listing all included in our PKR 5,000 package.
      </p>
    </div>
  );
}

/* ============================================================
   BLOG POST 8 — Free vs Paid Website
============================================================ */
function FreeVsPaidPost() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <PostLead>
        Many Pakistani business owners start with a free website — Wix,
        Blogger, or WordPress.com. It seems like a smart move to save money.
        But is it actually free? Here is the truth.
      </PostLead>

      <PostH2>What Free Websites Actually Cost You</PostH2>
      <p>
        Free website platforms are free in money but expensive in other ways.
        Here is what you give up when you choose a free website:
      </p>
      <ul className="space-y-2">
        {[
          "Your website URL has the platform name: yourbusiness.wix.com — looks unprofessional",
          "Ads from the platform appear on your website without your control",
          "Very limited customization — your site looks like thousands of others",
          "Poor SEO performance — free sites rank poorly on Google",
          "Slow loading speed — Google penalizes slow sites",
          "No customer support if something breaks",
          "If the platform shuts down, your website disappears",
        ].map((item) => <CrossItem key={item} text={item} />)}
      </ul>

      <PostH2>What You Get With a Paid Custom Website</PostH2>
      <ul className="space-y-2">
        {[
          "Your own professional domain: yourbusiness.com",
          "No ads — clean, professional appearance",
          "Unique design that matches your brand",
          "SEO-optimized for Google from day one",
          "Fast loading speed under 2 seconds",
          "Full control over every page and feature",
          "You own your website completely",
        ].map((item) => <CheckItem key={item} text={item} />)}
      </ul>

      <PostH2>The Hidden Cost of a Free Website</PostH2>
      <p>
        Let us say you run a restaurant in Lahore and you have a free Wix site.
        A customer searches &quot;restaurant in Lahore&quot; on Google. Your
        free site appears on page 5 — nobody goes to page 5. Your competitor
        with a proper website appears on page 1 and gets the customer.
      </p>
      <p>
        That lost customer orders 3-4 times per month. Over one year, that is
        PKR 50,000+ in lost revenue — from one customer. How many customers are
        you losing because of a free website?
      </p>

      <PostH2>When Does a Free Website Make Sense?</PostH2>
      <ul className="space-y-2">
        {[
          "You have a personal blog with no business goals",
          "You are just testing an idea before committing",
          "You are a student learning how websites work",
        ].map((item) => <ArrowItem key={item} text={item} />)}
      </ul>

      <PostH2>The Real Cost Comparison</PostH2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 pr-6 text-white font-semibold">Feature</th>
              <th className="text-left py-3 pr-6 text-white font-semibold">Free Website</th>
              <th className="text-left py-3 text-white font-semibold">Devnix Studios</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/6">
            {[
              ["Upfront Cost", "PKR 0", "PKR 5,000"],
              ["Professional Domain", "✗ (yourbiz.wix.com)", "✓ (yourbiz.com)"],
              ["SEO Performance", "Poor", "Optimized"],
              ["Loading Speed", "Slow", "Under 2 seconds"],
              ["Google Ranking", "Very Low", "Optimized"],
              ["Support", "None", "3 months included"],
              ["Hosting", "Platform controlled", "Free 1st year"],
            ].map(([feature, free, paid]) => (
              <tr key={feature}>
                <td className="py-3 pr-6 text-gray-300">{feature}</td>
                <td className="py-3 pr-6 text-red-400">{free}</td>
                <td className="py-3 text-[#06b6d4]">{paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PostH2>Verdict</PostH2>
      <p>
        A free website costs you customers, credibility, and Google rankings. A
        PKR 5,000 investment in a professional website from Devnix Studios pays
        back within weeks through new customers finding you online.
      </p>
    </div>
  );
}

/* ============================================================
   BLOG POST 9 — Online Store Guide Pakistan
============================================================ */
function OnlineStorePost() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <PostLead>
        Starting an online store in Pakistan is more accessible than ever. This
        complete guide walks you through every step — from choosing your
        products to getting your first sale.
      </PostLead>

      <PostH2>Step 1: Choose Your Products</PostH2>
      <p>
        The most successful online stores in Pakistan sell products with strong
        local demand. Popular categories include:
      </p>
      <ul className="space-y-2">
        {["Clothing and fashion (kurtas, abayas, western wear)", "Mobile phone accessories", "Home decor and furniture", "Food products (dry fruits, spices, homemade items)", "Beauty and skincare products", "Agricultural products (poultry, vegetables, livestock)"].map((item) => <ArrowItem key={item} text={item} />)}
      </ul>

      <PostH2>Step 2: Get Your Business Website</PostH2>
      <p>
        Your website is your online store. It needs to show your products
        clearly, be fast on mobile phones, and have an easy way for customers
        to contact you or place orders.
      </p>
      <p>
        For most Pakistani small businesses, a product catalog website with a
        WhatsApp ordering system works better than a complex checkout system —
        customers prefer to confirm orders via WhatsApp before paying.
      </p>

      <PostH2>Step 3: Setup Payment Methods</PostH2>
      <div className="space-y-3">
        {[
          { name: "JazzCash", desc: "Most popular mobile payment in Pakistan. Easy to setup and use." },
          { name: "EasyPaisa", desc: "Second most popular. Good for reaching customers in all cities." },
          { name: "Bank Transfer", desc: "Direct bank account. Most trusted method for larger orders." },
          { name: "Cash on Delivery (COD)", desc: "Most preferred by Pakistani online shoppers. Partner with courier services." },
        ].map((item) => (
          <div key={item.name} className="p-4 rounded-xl bg-white/2 border border-white/6">
            <p className="font-semibold text-white text-sm mb-1">{item.name}</p>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <PostH2>Step 4: Setup Delivery</PostH2>
      <p>Reliable delivery is crucial for online stores in Pakistan. Consider:</p>
      <ul className="space-y-2">
        {["TCS — most trusted courier in Pakistan", "Leopards — wide coverage across Pakistan", "Trax — affordable rates for small businesses", "BlueEX — good for COD services"].map((item) => <CheckItem key={item} text={item} />)}
      </ul>

      <PostH2>Step 5: Marketing Your Online Store</PostH2>
      <PostH3>Facebook and Instagram</PostH3>
      <p>
        Post your products daily. Use good photos and clear prices. Join
        relevant Facebook groups in your city and share your products there.
      </p>
      <PostH3>WhatsApp Business</PostH3>
      <p>
        Set up WhatsApp Business with your catalog, auto-replies, and business
        info. Share your WhatsApp link everywhere — your website, social media,
        and business cards.
      </p>
      <PostH3>Google SEO</PostH3>
      <p>
        Optimize your product pages with keywords so customers searching on
        Google can find your store. This takes 2-3 months but brings free
        traffic forever.
      </p>

      <PostH2>How Much Does It Cost to Start an Online Store in Pakistan?</PostH2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 pr-6 text-white font-semibold">Item</th>
              <th className="text-left py-3 text-white font-semibold">Cost</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/6">
            {[
              ["Website (Devnix Studios)", "PKR 5,000"],
              ["Domain Name", "PKR 1,500 – 2,500/year"],
              ["Hosting", "Free (1st year included)"],
              ["Product Photography", "PKR 0 – 5,000"],
              ["Initial Inventory", "Varies by business"],
              ["Total Startup Cost", "PKR 6,500+"],
            ].map(([item, cost]) => (
              <tr key={item}>
                <td className="py-3 pr-6 text-gray-300">{item}</td>
                <td className="py-3 text-[#6366f1] font-medium">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ============================================================
   BLOG POST 10 — How to Choose a Web Designer in Your City
============================================================ */
function ChooseWebDesignerPost() {
  return (
    <div className="space-y-4 text-gray-300 leading-relaxed">
      <PostLead>
        Whether you are in Karachi, Lahore, Islamabad, or any other city in
        Pakistan — finding a reliable local web designer can be tricky. Here is
        a practical guide to making the right choice.
      </PostLead>

      <PostH2>Local vs Remote Web Designers in Pakistan</PostH2>
      <p>
        Many business owners assume they need a web designer in their city.
        The reality is that most professional web work in Pakistan is done
        remotely — via WhatsApp and email. The designer does not need to be
        in your city to build an excellent website.
      </p>
      <p>
        What matters is communication, quality of work, and reliability — not
        physical location.
      </p>

      <PostH2>How to Find Web Designers in Your City</PostH2>
      <ul className="space-y-2">
        {["Google: search 'web designer + your city name'", "Facebook Groups: search your city name + web design or digital marketing", "Referrals: ask other business owners who built their website", "Fiverr and Upwork: filter by Pakistan location", "Instagram: search web design Pakistan hashtags"].map((item) => <ArrowItem key={item} text={item} />)}
      </ul>

      <PostH2>What to Check Before Hiring</PostH2>
      <div className="space-y-3">
        {[
          { title: "Portfolio of Live Websites", desc: "Ask for links to actual live websites they built. Visit them on mobile and desktop. Check loading speed." },
          { title: "Client References", desc: "Ask if you can speak to a past client. A good designer will have satisfied clients happy to give a reference." },
          { title: "Clear Pricing", desc: "Get a written quote with everything included. What is the price, what is included, and what costs extra?" },
          { title: "Timeline", desc: "Ask how long it takes. A realistic answer is 5-14 days for a custom website." },
          { title: "Support After Launch", desc: "What happens if something breaks after launch? Is there ongoing support included?" },
        ].map((item) => (
          <div key={item.title} className="p-4 rounded-xl bg-white/2 border border-white/6">
            <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <PostH2>City-Specific Tips</PostH2>
      <PostH3>Karachi</PostH3>
      <p>
        Karachi has the largest concentration of web designers in Pakistan.
        Competition is high, which means you have many options — but also many
        low-quality providers. Focus on portfolio quality over price.
      </p>
      <PostH3>Lahore</PostH3>
      <p>
        Lahore has a growing tech community. Many good freelancers and small
        agencies operate here. The Johar Town and DHA areas have concentrations
        of digital agencies.
      </p>
      <PostH3>Islamabad / Rawalpindi</PostH3>
      <p>
        The twin cities have several professional agencies serving government,
        corporate, and SME clients. Prices tend to be slightly higher than
        Lahore or Karachi.
      </p>
      <PostH3>Faisalabad / Multan / Peshawar</PostH3>
      <p>
        Smaller cities have fewer local options. We recommend working with a
        remote studio that serves all of Pakistan — quality is more consistent
        and pricing is often better.
      </p>

      <PostH2>Why Devnix Studios Serves All of Pakistan</PostH2>
      <p>
        We built Devnix Studios to serve businesses across all of Pakistan —
        not just one city. Our process is 100% remote via WhatsApp, which means
        you get the same quality service whether you are in Karachi or
        Peshawar.
      </p>
      <ul className="space-y-2">
        {["WhatsApp communication throughout the project", "Same pricing for all cities in Pakistan", "Live portfolio you can visit and test", "3 months support after launch included", "Starting at PKR 5,000 — complete package"].map((item) => <CheckItem key={item} text={item} />)}
      </ul>
    </div>
  );
}