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
                Starting at just PKR 20,000 — one-time payment with optional
                monthly support. Custom website, SEO & admin panel included.
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

/* ═══════════════════════ POST 1: 5 Reasons ═══════════════════════ */
function FiveReasonsPost() {
  return (
    <div className="space-y-6 text-gray-300 leading-relaxed">
      <p className="text-lg text-gray-200 font-medium">
        In 2026, not having your business online is like leaving stacks of cash
        on the table for free. Today I will share 5 honest reasons why every
        small business in Pakistan needs a website right now.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        1. Your Customers Are Already Searching for You Online
      </h2>
      <p>
        Over 120 million Pakistanis use the internet daily. When someone needs a
        plumber, doctor, clothing store, restaurant, or even a school for their
        children — the very first thing they do is search on Google.
      </p>
      <p>
        Now imagine this: your business does not show up on Google because you
        do not have a website. Worse, your competitor does — and they get the
        customer instead of you.
      </p>
      <p className="border-l-2 border-[#10b981] pl-4 italic text-gray-400">
        Think of it like a plaza. Not having a website means your shop is hidden
        in the back corner where customers never reach, because they already
        found what they needed at the front shops.
      </p>
      <p>
        A website puts your business in the front row on Google — so customers
        in your area can find you 24 hours a day, 7 days a week, even when you
        are asleep.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        2. A Website Builds Instant Trust
      </h2>
      <p>
        I remember talking to a friend who had just started a new business. The
        first question that came out of my mouth was:{" "}
        <em>what is your website URL?</em>
      </p>
      <p>
        Think about it yourself — would you confidently buy from a business that
        has no website? Probably not. In 2026, having a website signals to your
        customers that you are real, serious, and trustworthy.
      </p>
      <p>
        A professional website with your services, prices, customer reviews, and
        contact information tells people you are a legitimate business — not
        just a random WhatsApp number.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        3. It Works Even When You Do Not
      </h2>
      <p>
        Imagine a customer tries to reach you but you are busy, asleep, or
        unavailable. They miss out. You miss out. That lead is gone forever —
        maybe they wanted to ask about a product, place an order, or know your
        prices.
      </p>
      <p>
        Your website is your 24/7 salesperson. It shows your products, answers
        common questions, displays your prices, and lets customers place orders
        — all without you lifting a finger.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        4. Social Media Alone Is Not Enough
      </h2>
      <p>
        Many Pakistani businesses depend completely on Facebook, Instagram, or
        WhatsApp. But here is the problem:{" "}
        <strong>you do not own these platforms</strong>.
      </p>
      <p>
        Facebook can reduce your reach. Instagram can change its algorithm
        overnight. Your account can get suspended for no reason. And just like
        that, all your hard work and followers can vanish.
      </p>
      <p>
        A website is your own digital asset. No algorithm changes, no
        suspensions, no surprises.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">
        5. Work Smart, Not Hard (Meta Ads Bonus)
      </h2>
      <p>
        I have seen many businesses run Meta ads that drive traffic directly to
        WhatsApp. The problem? WhatsApp does not have a catalog, pricing, or
        product information. You end up answering the same questions a hundred
        times a day.
      </p>
      <p>
        With a website, all your information is already there. People see your
        full catalog, find products they did not even know you had, and serious
        buyers contact you ready to purchase.
      </p>
      <p>
        Plus, if you run Facebook or Instagram ads, you can install a{" "}
        <strong>Meta Pixel</strong> on your website. This pixel tracks visitors,
        helps Facebook find more customers like them, and dramatically increases
        your ad performance. Without a website, you are running ads blind.
      </p>

      <h2 className="text-2xl font-bold text-white mt-10">The Good News</h2>
      <p>
        Getting a professional website in Pakistan is now extremely affordable.
        At <strong>Devnix Studios</strong>, we help small businesses go online
        with a complete custom-built package starting at just{" "}
        <strong className="text-[#06b6d4]">PKR 20,000</strong>.
      </p>
    </div>
  );
}