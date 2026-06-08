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
    case "5-reasons-small-business-needs-website-pakistan":
      return <FiveReasonsPost />;
    case "how-much-does-website-cost-pakistan":
      return <WebsiteCostPost />;
    case "custom-website-vs-wordpress-pakistan":
      return <CustomVsWordpressPost />;
    case "top-web-designers-pakistan-2025":
      return <TopWebDesignersPost />;
    case "facebook-ads-without-website-pakistan":
      return <FacebookAdsPost />;
    case "best-hosting-pakistan-2025":
      return <BestHostingPost />;
    case "complete-seo-guide-pakistan-businesses":
      return <SEOGuidePost />;
    case "free-vs-paid-website-pakistan":
      return <FreeVsPaidPost />;
    case "start-online-store-pakistan-guide":
      return <OnlineStorePost />;
    case "how-to-choose-web-designer-pakistan-city":
      return <ChooseDesignerPost />;
    case "instagram-business-account-pakistan":
      return <InstagramGrowthPost />;
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
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-white/4">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] opacity-20"
          style={{ backgroundColor: post.categoryColor }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8 group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="mb-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider" style={{ color: post.categoryColor, backgroundColor: `${post.categoryColor}15` }}>
                {post.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-PK", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                By <span className="text-white font-medium">Devnix Studios</span>
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
            {getPostBody(post.slug)}
          </div>

          <div className="mt-12 p-px rounded-2xl bg-gradient-to-br from-[#6366f1]/40 to-[#06b6d4]/40">
            <div className="bg-[#0c0c14] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Get Your Business Online?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Starting at just PKR 20,000 — custom website, SEO, and 3 months support included.
              </p>
              <a href={siteData.contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl hover:shadow-xl hover:shadow-[#6366f1]/20 transition-all duration-300">
                <MessageCircle size={16} />
                WhatsApp Us Now
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="group p-5 rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/20 transition-all duration-300">
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
              <Link href={`/blog/${nextPost.slug}`} className="group p-5 rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/20 transition-all duration-300 sm:text-right">
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

/* ═══════════════════════ POST 1: 5 Reasons ═══════════════════════ */
function FiveReasonsPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">
        In 2026, not having your business online is like leaving stacks of cash on the table for free. Today I will share 5 honest reasons why every small business in Pakistan needs a website right now.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">1. Your Customers Are Already Searching for You Online</h2>
      <p>Over 120 million Pakistanis use the internet daily. When someone needs a plumber, doctor, clothing store, restaurant, or even a school for their children — the very first thing they do is search on Google.</p>
      <p>Now imagine this: your business does not show up on Google because you do not have a website. Worse, your competitor does — and they get the customer instead of you.</p>
      <p className="border-l-2 border-[#10b981] pl-4 italic text-gray-400">
        Think of it like a plaza. Not having a website means your shop is hidden in the back corner where customers never reach, because they already found what they needed at the front shops.
      </p>
      <p>A website puts your business in the front row on Google — so customers in your area can find you 24 hours a day, 7 days a week, even when you are asleep.</p>

      <h2 className="text-2xl font-bold text-white mt-10">2. A Website Builds Instant Trust</h2>
      <p>I remember talking to a friend who had just started a new business. The first question that came out of my mouth was: <em>what is your website URL?</em></p>
      <p>Think about it yourself — would you confidently buy from a business that has no website? Probably not. In 2026, having a website signals to your customers that you are real, serious, and trustworthy.</p>
      <p>A professional website with your services, prices, customer reviews, and contact information tells people you are a legitimate business — not just a random WhatsApp number.</p>

      <h2 className="text-2xl font-bold text-white mt-10">3. It Works Even When You Do Not</h2>
      <p>Imagine a customer tries to reach you but you are busy, asleep, or unavailable. They miss out. You miss out. That lead is gone forever — maybe they wanted to ask about a product, place an order, or know your prices.</p>
      <p>Your website is your 24/7 salesperson. It shows your products, answers common questions, displays your prices, and lets customers place orders — all without you lifting a finger.</p>

      <h2 className="text-2xl font-bold text-white mt-10">4. Social Media Alone Is Not Enough</h2>
      <p>Many Pakistani businesses depend completely on Facebook, Instagram, or WhatsApp. But here is the problem: <strong>you do not own these platforms</strong>.</p>
      <p>Facebook can reduce your reach. Instagram can change its algorithm overnight. Your account can get suspended for no reason. And just like that, all your hard work and followers can vanish.</p>
      <p>A website is your own digital asset. No algorithm changes, no suspensions, no surprises.</p>

      <h2 className="text-2xl font-bold text-white mt-10">5. Work Smart, Not Hard (Meta Ads Bonus)</h2>
      <p>I have seen many businesses run Meta ads that drive traffic directly to WhatsApp. The problem? WhatsApp does not have a catalog, pricing, or product information. You end up answering the same questions a hundred times a day.</p>
      <p>With a website, all your information is already there. People see your full catalog, find products they did not even know you had, and serious buyers contact you ready to purchase.</p>
      <p>Plus, if you run Facebook or Instagram ads, you can install a <strong>Meta Pixel</strong> on your website. This pixel tracks visitors, helps Facebook find more customers like them, and dramatically increases your ad performance. Without a website, you are running ads blind.</p>

      <h2 className="text-2xl font-bold text-white mt-10">The Good News</h2>
      <p>Getting a professional website in Pakistan is now extremely affordable. At <strong>Devnix Studios</strong>, we help small businesses go online with a complete custom-built package starting at just <strong className="text-[#06b6d4]">PKR 20,000</strong>.</p>
    </div>
  );
}

/* ═══════════════════════ POST 2: Website Cost ═══════════════════════ */
function WebsiteCostPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">
        One of the most common questions we get from Pakistan business owners is: how much should I pay for a website? The honest answer depends on what you need — but we will break it all down clearly.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">The 3 Types of Websites in Pakistan</h2>

      <h3 className="text-lg font-semibold text-white">1. Template-Based Websites (PKR 0 to 3,000)</h3>
      <p>Platforms like Wix, Weebly, or WordPress with a free theme. These look generic, load slowly, and rank poorly on Google.</p>

      <h3 className="text-lg font-semibold text-white">2. WordPress with Premium Theme (PKR 3,000 to 15,000)</h3>
      <p>A step up — but still template-based. Performance is average, SEO requires extra plugins, and customization is limited.</p>

      <h3 className="text-lg font-semibold text-white">3. Custom-Built Website (PKR 20,000 to 50,000+)</h3>
      <p>Built from scratch by a developer. Fast, unique, SEO-optimized, and fully yours.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Market Rates Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 pr-6 text-white">Type</th>
              <th className="text-left py-3 pr-6 text-white">Price Range</th>
              <th className="text-left py-3 text-white">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/6">
            {[
              ["Freelancer (beginner)", "PKR 3,000 - 8,000", "Simple info sites"],
              ["Freelancer (experienced)", "PKR 8,000 - 25,000", "Business websites"],
              ["Agency (small)", "PKR 15,000 - 60,000", "Professional sites"],
              ["Devnix Studios", "PKR 20,000", "Complete package"],
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

      <h2 className="text-2xl font-bold text-white mt-10">Hidden Costs to Watch Out For</h2>
      <ul className="space-y-2">
        {["Hosting fees not included in the quote", "Paying extra for mobile responsiveness", "SEO costs on top of the website price", "Maintenance charges for basic updates"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-1">✗</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Final Verdict</h2>
      <p>For a Pakistani business that wants a professional online presence, PKR 20,000 to 15,000 is the sweet spot. At Devnix Studios, we offer a complete package starting at PKR 20,000 — no hidden fees, no surprises.</p>
    </div>
  );
}

/* ═══════════════════════ POST 3: Custom vs WordPress ═══════════════════════ */
function CustomVsWordpressPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">If you are a business owner in Pakistan trying to get a website, you have probably heard both options — custom website or WordPress. Here is an honest comparison.</p>

      <h2 className="text-2xl font-bold text-white mt-10">What is WordPress?</h2>
      <p>WordPress is a content management system that lets you build websites without writing code. It powers about 40% of websites on the internet.</p>

      <h2 className="text-2xl font-bold text-white mt-10">What is a Custom Website?</h2>
      <p>A custom website is built from scratch by a developer — no pre-made themes, no plugins. Every line of code is written specifically for your business.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Head-to-Head Comparison</h2>
      <div className="space-y-4">
        {[
          { topic: "Speed", wordpress: "Often slow due to plugins", custom: "Very fast - only loads what is needed" },
          { topic: "SEO", wordpress: "Needs extra plugins", custom: "SEO built into the code" },
          { topic: "Security", wordpress: "Plugin vulnerabilities", custom: "Much more secure" },
          { topic: "Maintenance", wordpress: "Constant updates needed", custom: "Low maintenance" },
          { topic: "Unique Design", wordpress: "Thousands look the same", custom: "100% unique to your brand" },
        ].map((row) => (
          <div key={row.topic} className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/2 border border-white/6">
            <div className="font-semibold text-white text-sm">{row.topic}</div>
            <div className="text-sm text-gray-400">{row.wordpress}</div>
            <div className="text-sm text-[#06b6d4] font-medium">{row.custom}</div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10">Our Verdict</h2>
      <p>For most Pakistan businesses, a custom website is the better investment. It is faster, safer, ranks better on Google, and looks more professional. At Devnix Studios, we only build custom websites.</p>
    </div>
  );
}

/* ═══════════════════════ POST 4: Top Web Designers ═══════════════════════ */
function TopWebDesignersPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">Finding the right web designer in Pakistan can be confusing. Here is how to actually find someone good — and red flags to watch out for.</p>

      <h2 className="text-2xl font-bold text-white mt-10">What Makes a Good Web Designer?</h2>
      <ul className="space-y-2">
        {["A real portfolio with live websites", "Knowledge of SEO - not just design", "Mobile-first approach", "Clear pricing with no hidden fees", "Direct communication", "Fast delivery"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Red Flags to Avoid</h2>
      <ul className="space-y-2">
        {["No portfolio or only screenshots", "Promises first page on Google in 1 week", "Very low price with no explanation", "Cannot explain what they are building"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-1">✗</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Questions to Ask Before Hiring</h2>
      <div className="space-y-4">
        {[
          { q: "Can I see live examples of your work?", a: "Any serious designer will have live websites. If they only show images, that is a red flag." },
          { q: "Is SEO included?", a: "Make sure meta tags, alt texts, and basic optimization is included." },
          { q: "What happens after launch?", a: "Ask if maintenance, updates, and changes are included." },
          { q: "How long will it take?", a: "5-14 days is realistic. Anyone promising 24 hours is cutting corners." },
        ].map((item) => (
          <div key={item.q} className="p-4 rounded-xl bg-white/2 border border-white/6">
            <p className="font-semibold text-white text-sm mb-1">{item.q}</p>
            <p className="text-sm text-gray-400">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════ POST 5: Facebook Ads Without Website ═══════════════════════ */
function FacebookAdsPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">If you are running Facebook or Instagram ads to your WhatsApp number, you are leaving money on the table. Here is why a website doubles your ad performance.</p>

      <h2 className="text-2xl font-bold text-white mt-10">The Problem with WhatsApp-Only Ads</h2>
      <p>Many Pakistani businesses run Meta ads that send people directly to WhatsApp. While this seems simple, it has huge problems:</p>
      <ul className="space-y-2">
        {[
          "You answer the same questions 100 times a day",
          "Most messages are just price inquiries, not buyers",
          "When you are sleeping or busy, leads disappear",
          "WhatsApp has no product catalog or pricing",
          "Cannot track which ads work and which do not",
          "Cannot retarget visitors with more ads",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-1">✗</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">What is Meta Pixel?</h2>
      <p>Meta Pixel is a small piece of code installed on your website. It tracks:</p>
      <ul className="space-y-2">
        {[
          "Who visits your website from your ads",
          "Which products they viewed",
          "Who actually bought or contacted you",
          "Where visitors came from",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">→</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">How a Website + Pixel Doubles Your Sales</h2>
      <p>With a website and Meta Pixel installed:</p>
      <ul className="space-y-2">
        {[
          "Facebook learns who your real buyers are",
          "Future ads target similar people automatically",
          "You can retarget visitors who did not buy",
          "Cost per result drops by 30-50%",
          "Your ads work even while you sleep",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Real Example</h2>
      <p>A clothing brand in Karachi was spending PKR 50,000 monthly on Meta ads going to WhatsApp. After we built their website with Meta Pixel, they spent the same amount but got 3x more orders — because Facebook learned to find better buyers.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Stop Wasting Ad Money</h2>
      <p>If you are spending money on Meta ads, a website is not optional — it is essential. At Devnix Studios, every website includes Meta Pixel setup for free.</p>
    </div>
  );
}

/* ═══════════════════════ POST 6: Best Hosting Pakistan ═══════════════════════ */
function BestHostingPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">Choosing the right hosting for your website in Pakistan is more important than most people think. Here is a complete guide to your options in 2025.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Why Hosting Matters</h2>
      <p>Hosting affects:</p>
      <ul className="space-y-2">
        {["How fast your website loads", "How well it ranks on Google", "If it stays online (uptime)", "How well it handles traffic", "Your security"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-1">→</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Local Pakistani Hosting</h2>
      <h3 className="text-lg font-semibold text-white">Popular Options:</h3>
      <ul className="space-y-2">
        {["HostBreak", "Cybonetic", "Webguru.pk", "Crystals.pk"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-1">•</span><span>{item}</span></li>
        ))}
      </ul>
      <p><strong className="text-white">Pros:</strong> Local support in Urdu, payment in PKR via JazzCash/EasyPaisa, no foreign card needed.</p>
      <p><strong className="text-white">Cons:</strong> Slower than international options, often shared servers with downtime issues.</p>

      <h2 className="text-2xl font-bold text-white mt-10">International Hosting</h2>
      <h3 className="text-lg font-semibold text-white">Popular Options:</h3>
      <ul className="space-y-2">
        {["Vercel (free tier - best for Next.js)", "Netlify (free tier)", "Cloudflare Pages", "Hostinger", "Bluehost", "SiteGround"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#0ea5e9] mt-1">•</span><span>{item}</span></li>
        ))}
      </ul>
      <p><strong className="text-white">Pros:</strong> Much faster, better uptime, more reliable, free SSL.</p>
      <p><strong className="text-white">Cons:</strong> Need foreign card for payment, support in English only.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Our Recommendation</h2>
      <p>For most Pakistani businesses, we recommend:</p>
      <ul className="space-y-2">
        {["Vercel - Free for small sites, blazing fast", "Cloudflare Pages - Free + CDN included", "Hostinger - If you need traditional hosting"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Devnix Studios Includes Hosting</h2>
      <p>Every website package at Devnix Studios includes <strong>1 year of free hosting</strong> on premium servers. After the first year, hosting costs are minimal (typically PKR 2,000-3,000/year).</p>
    </div>
  );
}

/* ═══════════════════════ POST 7: SEO Guide ═══════════════════════ */
function SEOGuidePost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">SEO (Search Engine Optimization) is how you get free customers from Google. Here is a complete, step-by-step guide specifically for Pakistani businesses.</p>

      <h2 className="text-2xl font-bold text-white mt-10">What is SEO?</h2>
      <p>SEO is the process of optimizing your website so it appears at the top of Google when people search for your products or services. Higher ranking = more visitors = more customers.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Step 1: Keyword Research</h2>
      <p>Find what your Pakistani customers actually search for. Examples:</p>
      <ul className="space-y-2">
        {[
          "Instead of 'clothing store' → 'kapra shop Karachi'",
          "Instead of 'doctor' → 'best dermatologist Lahore'",
          "Use Urdu words where natural - 'parlor near me'",
          "Include city names in keywords",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#a855f7] mt-1">→</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 2: On-Page SEO</h2>
      <p>Optimize every page:</p>
      <ul className="space-y-2">
        {[
          "Title tag with main keyword",
          "Meta description (155 characters)",
          "H1 heading with keyword",
          "Image alt texts",
          "Internal linking between pages",
          "Mobile-friendly design",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 3: Google Business Profile</h2>
      <p>Free and powerful. Create your Google Business Profile so your business shows up on Google Maps. This is crucial for local Pakistani businesses.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Step 4: Local SEO for Pakistan</h2>
      <ul className="space-y-2">
        {[
          "Add your city name to important pages",
          "Get listed in Pakistani business directories",
          "Get Google reviews from real customers",
          "Use Pakistan-relevant content",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 5: Content Marketing</h2>
      <p>Write blog posts answering questions your customers ask. Each blog post = a new way to get found on Google.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Step 6: Technical SEO</h2>
      <ul className="space-y-2">
        {[
          "Fast loading speed (under 3 seconds)",
          "Mobile responsive design",
          "HTTPS/SSL certificate",
          "Structured data (Schema markup)",
          "XML sitemap submitted to Google",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">How Long Does SEO Take?</h2>
      <p>Be patient. SEO typically takes 3-6 months to show real results. But once you rank, the traffic is free forever.</p>

      <h2 className="text-2xl font-bold text-white mt-10">SEO is Included Free with Devnix Websites</h2>
      <p>Every website we build comes with basic SEO done for you. No need to hire a separate SEO expert.</p>
    </div>
  );
}

/* ═══════════════════════ POST 8: Free vs Paid Website ═══════════════════════ */
function FreeVsPaidPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">Wix, Blogger, free WordPress — they all promise a free website. But are they really free? Here is the truth most Pakistani businesses learn the hard way.</p>

      <h2 className="text-2xl font-bold text-white mt-10">The "Free" Lie</h2>
      <p>Free websites are never really free. Here is what you actually pay:</p>
      <ul className="space-y-2">
        {[
          "Ugly URL like yourbusiness.wix.com",
          "Ads on YOUR website (helping Wix make money)",
          "No custom email (no info@yourbusiness.com)",
          "Cannot rank well on Google",
          "Limited storage and bandwidth",
          "Limited customization",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-1">✗</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Free Wix vs Paid Custom — Real Numbers</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 pr-6 text-white">Feature</th>
              <th className="text-left py-3 pr-6 text-white">Free Website</th>
              <th className="text-left py-3 text-white">Devnix PKR 20,000</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/6">
            {[
              ["Custom domain", "✗ No", "✓ Yes"],
              ["Remove ads", "✗ No (or pay)", "✓ Yes"],
              ["Custom design", "✗ Template only", "✓ Fully custom"],
              ["SEO friendly", "✗ Poor", "✓ Excellent"],
              ["Fast loading", "✗ Slow", "✓ Lightning fast"],
              ["Professional email", "✗ No", "✓ Yes"],
              ["Mobile optimized", "✓ Yes", "✓ Yes"],
            ].map(([feature, free, paid]) => (
              <tr key={feature}>
                <td className="py-3 pr-6 text-gray-300">{feature}</td>
                <td className="py-3 pr-6 text-gray-500">{free}</td>
                <td className="py-3 text-[#06b6d4]">{paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-white mt-10">Real Cost Comparison Over 1 Year</h2>
      <p><strong className="text-white">Free website:</strong> 0 PKR upfront, but you lose customers daily because nobody trusts a site at yourbusiness.wix.com</p>
      <p><strong className="text-white">Paid custom website:</strong> PKR 20,000 once, get unlimited customers for years to come</p>

      <h2 className="text-2xl font-bold text-white mt-10">When Free is OK</h2>
      <p>Free websites are fine if:</p>
      <ul className="space-y-2">
        {["You are just testing an idea", "It is a personal blog", "You do not care about looking professional", "You are not serious about the business"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-yellow-400 mt-1">→</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">The Truth</h2>
      <p>If you are serious about your business, free is the most expensive option you can choose — because of all the customers you lose. PKR 20,000 once is the smartest small business investment you will make this year.</p>
    </div>
  );
}

/* ═══════════════════════ POST 9: Start Online Store ═══════════════════════ */
function OnlineStorePost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">Want to start selling online in Pakistan? Whether you sell clothes, food, electronics, or anything else — this complete guide will walk you through everything.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Step 1: Decide What to Sell</h2>
      <p>Pick products that:</p>
      <ul className="space-y-2">
        {["You can source easily", "Have good profit margin (40%+)", "Are not too heavy (delivery costs)", "Have demand in Pakistan"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#ec4899] mt-1">→</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 2: Get a Professional Website</h2>
      <p>You have 3 options:</p>
      <ul className="space-y-2">
        {[
          "Daraz - High competition, commission fees, no brand control",
          "Facebook/Instagram only - Limited reach, no real store",
          "Your own website - Best long-term option",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">•</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 3: Payment Options for Pakistan</h2>
      <ul className="space-y-2">
        {[
          "Cash on Delivery (most popular in Pakistan)",
          "JazzCash / EasyPaisa",
          "Bank transfer",
          "WhatsApp confirmation then payment",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 4: Delivery Setup</h2>
      <p>Popular delivery services in Pakistan:</p>
      <ul className="space-y-2">
        {["TCS (most reliable)", "Leopard Courier", "M&P Courier", "BlueEx", "Local riders for same-city delivery"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#ec4899] mt-1">•</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 5: Get Your First Customers</h2>
      <ul className="space-y-2">
        {[
          "Run small Meta ads (PKR 20,000-10,000/month)",
          "Post on Instagram daily",
          "Get listed on Google Business",
          "Get reviews from first customers",
          "Offer discount to friends/family to seed reviews",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 6: Scale Up</h2>
      <p>Once you have steady orders:</p>
      <ul className="space-y-2">
        {[
          "Add more products (we do this monthly)",
          "Hire a packer/helper",
          "Use Meta Pixel for better ads",
          "Get more reviews",
          "Expand to new cities",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Devnix Studios Online Store Package</h2>
      <p>We build complete online stores starting at PKR 20,000 — including product catalog, WhatsApp ordering, payment options, and 3 months of management. Get your store live in 5-10 days.</p>
    </div>
  );
}

/* ═══════════════════════ POST 10: How to Choose Web Designer ═══════════════════════ */
function ChooseDesignerPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">Looking for a web designer in Karachi, Lahore, Islamabad, or any Pakistani city? Here is a simple practical guide to finding the right one.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Where to Find Web Designers</h2>
      <ul className="space-y-2">
        {[
          "Google: 'web designer [your city]'",
          "Facebook Groups (local business groups)",
          "Instagram (search hashtags like #webdesignkarachi)",
          "Referrals from other business owners",
          "Fiverr/Upwork (international)",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#f97316] mt-1">→</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">5 Questions to Ask Every Designer</h2>
      <div className="space-y-4">
        {[
          { q: "Can I see 3 live websites you have built?", a: "Anyone serious will say yes immediately. If they hesitate or only show screenshots, walk away." },
          { q: "What is included in the price?", a: "Hosting? Domain? SEO? Maintenance? Get everything in writing." },
          { q: "How long will it take?", a: "5-14 days is realistic for a custom site. Less than 3 days = template work." },
          { q: "What happens after the website is done?", a: "Will they help with changes? Updates? Or is it a one-time deal?" },
          { q: "Do you build custom or use templates?", a: "Templates are okay but custom is better. Make sure you know what you are getting." },
        ].map((item) => (
          <div key={item.q} className="p-4 rounded-xl bg-white/2 border border-white/6">
            <p className="font-semibold text-white text-sm mb-1">{item.q}</p>
            <p className="text-sm text-gray-400">{item.a}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10">Red Flags - Run Away If You See These</h2>
      <ul className="space-y-2">
        {[
          "Asks for 100% payment upfront",
          "Cannot show you their portfolio",
          "Promises Google #1 ranking in 1 week",
          "Way too cheap (under PKR 3,000)",
          "Cannot explain things in simple words",
          "No website of their own",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-red-400 mt-1">✗</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Local vs Remote Designer</h2>
      <p><strong className="text-white">Local designer:</strong> Can meet in person, easier communication, but may charge more.</p>
      <p><strong className="text-white">Remote designer:</strong> Often cheaper, can work with anyone in Pakistan or abroad, communication via WhatsApp.</p>
      <p>For most businesses, a remote designer is just as good — most communication happens online anyway.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Devnix Studios Serves All Pakistan</h2>
      <p>We are based in Pakistan and serve clients in Karachi, Lahore, Islamabad, Faisalabad, Rawalpindi, Multan, Peshawar, and every other city — all remotely via WhatsApp. Starting at PKR 20,000.</p>
    </div>
  );
}

/* ═══════════════════════ POST 11: Instagram Growth ═══════════════════════ */
function InstagramGrowthPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">Instagram is one of the most powerful marketing tools for Pakistani businesses. Here is how to grow your business Instagram in 2025.</p>

      <h2 className="text-2xl font-bold text-white mt-10">Step 1: Switch to Business Account</h2>
      <p>Go to Settings → Account → Switch to Professional Account. This unlocks:</p>
      <ul className="space-y-2">
        {["Insights and analytics", "Contact buttons (WhatsApp, email, call)", "Ability to run ads", "Tag your products"].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#ec4899] mt-1">→</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 2: Optimize Your Bio</h2>
      <p>Your bio should have:</p>
      <ul className="space-y-2">
        {[
          "What you do in 1 line",
          "Your city/area",
          "WhatsApp button",
          "Website link",
          "Clear profile picture (logo for brands)",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 3: Content Strategy</h2>
      <p>Post 4-7 times per week. Mix of:</p>
      <ul className="space-y-2">
        {[
          "Product photos (40%)",
          "Behind-the-scenes (20%)",
          "Customer reviews/testimonials (15%)",
          "Tips related to your industry (15%)",
          "Promotions/sales (10%)",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#ec4899] mt-1">→</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 4: Use Hashtags Smartly</h2>
      <p>Use 10-20 hashtags per post:</p>
      <ul className="space-y-2">
        {[
          "Local hashtags: #karachimade, #lahorebusiness",
          "Niche hashtags: #pakistanifashion, #karachifood",
          "Brand hashtag: #yourbrandname",
          "Avoid generic ones: #love, #photo (too competitive)",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 5: Best Posting Times for Pakistan</h2>
      <ul className="space-y-2">
        {[
          "Morning: 7-9 AM (commute time)",
          "Afternoon: 1-3 PM (lunch break)",
          "Evening: 7-10 PM (peak time)",
          "Avoid Friday afternoons (Jumma prayer)",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#ec4899] mt-1">→</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 6: Engage Daily</h2>
      <ul className="space-y-2">
        {[
          "Reply to every comment",
          "Reply to DMs within 1 hour",
          "Like and comment on similar Pakistani business accounts",
          "Use Stories daily (polls, questions, behind-the-scenes)",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Step 7: Convert Followers to Customers</h2>
      <p>The biggest mistake: having followers but no sales. Fix this by:</p>
      <ul className="space-y-2">
        {[
          "Link to your website in every post",
          "Use the WhatsApp button in bio",
          "Show prices clearly in posts",
          "Add call-to-action: 'DM to order'",
          "Use Instagram Shopping (tag products)",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2"><span className="text-[#06b6d4] mt-1">✓</span><span>{item}</span></li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-10">Let Us Handle Your Instagram</h2>
      <p>At Devnix Studios, our website package includes Facebook and Instagram management. We post your products with professional captions and hashtags — so you focus on running your business.</p>
    </div>
  );
}