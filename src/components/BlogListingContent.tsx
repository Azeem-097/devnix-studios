"use client";

import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import AnimatedSection from "./AnimatedSection";

export default function BlogListingContent() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#6366f1]/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 mb-6">
              <BookOpen size={12} className="text-[#6366f1]" />
              <span className="text-xs font-medium text-[#6366f1] tracking-wide uppercase">
                Our Blog
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Web Design & Digital Marketing{" "}
              <span className="bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
                Tips for Pakistan
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Free guides, honest advice, and practical tips to help Pakistan
              businesses grow online.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl bg-white/2 border border-white/6 hover:border-[#6366f1]/25 overflow-hidden transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Color Bar */}
                  <div
                    className="h-1.5"
                    style={{
                      background: `linear-gradient(to right, ${post.categoryColor}, ${post.categoryColor}80)`,
                    }}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span
                        className="px-2.5 py-1 text-[10px] font-semibold rounded-full uppercase tracking-wider"
                        style={{
                          color: post.categoryColor,
                          backgroundColor: `${post.categoryColor}15`,
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#6366f1] transition-colors duration-300 flex-1">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/6">
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {new Date(post.date).toLocaleDateString("en-PK", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-[#6366f1] group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* More Posts Coming */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center p-8 rounded-2xl bg-white/2 border border-white/6 border-dashed">
              <p className="text-gray-500 text-sm mb-1">More articles coming soon</p>
              <p className="text-xs text-gray-600">
                We publish new guides weekly to help Pakistan businesses grow online
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}