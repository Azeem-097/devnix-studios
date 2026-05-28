import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceSchema from "@/components/ServiceSchema";
import ServicePageContent from "@/components/ServicePageContent";

export const metadata: Metadata = {
  title: "Social Media Management Pakistan | Facebook & Instagram | Devnix Studios",
  description:
    "Professional social media management in Pakistan. Facebook and Instagram posts, captions, hashtags for your business. Starting at PKR 2,500/month.",
  keywords: [
    "social media management pakistan",
    "facebook management pakistan",
    "instagram management pakistan",
    "social media marketing pakistan",
    "social media manager pakistan",
    "facebook page management pakistan",
    "instagram marketing pakistan",
    "social media services pakistan",
  ],
  alternates: {
    canonical: "https://devnixstudios.tech/social-media-management-pakistan",
  },
  openGraph: {
    title: "Social Media Management Pakistan | Devnix Studios",
    description:
      "Professional Facebook and Instagram management for Pakistan businesses. Starting at PKR 2,500/month.",
    url: "https://devnixstudios.tech/social-media-management-pakistan",
    images: [{ url: "https://devnixstudios.tech/og-image.png" }],
  },
};

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <ServiceSchema
        name="Social Media Management Pakistan"
        description="Professional Facebook and Instagram management for Pakistan businesses. Posts, captions, hashtags, and audience growth."
        price="2500"
        slug="social-media-management-pakistan"
      />
      <Navbar />
      <ServicePageContent
        badge="Social Media"
        badgeColor="#06b6d4"
        heroHeading="Social Media Management in Pakistan"
        heroSubheading="Let us handle your Facebook and Instagram so you can focus on running your business. Professional posts, captions, and hashtags for every product."
        price="2,500 PKR"
        pricePeriod="/ month"
        priceNote="Included free with website package"
        slug="social-media-management-pakistan"
        whatWeDoTitle="What Our Social Media Service Includes"
        whatWeDo={[
          {
            title: "Facebook Posts",
            description:
              "Professional product posts on your Facebook page with engaging captions and relevant hashtags.",
          },
          {
            title: "Instagram Posts",
            description:
              "Eye-catching Instagram posts for every product with optimized captions and hashtag strategy.",
          },
          {
            title: "Post Captions",
            description:
              "Professionally written captions in English and Urdu that connect with your Pakistani audience.",
          },
          {
            title: "Hashtag Strategy",
            description:
              "Research-based hashtags targeting Pakistani customers and your specific industry.",
          },
          {
            title: "Product Announcements",
            description:
              "Every new product gets a dedicated social media post to maximize reach and engagement.",
          },
          {
            title: "Consistent Posting",
            description:
              "Regular posting schedule to keep your audience engaged and your brand visible.",
          },
        ]}
        benefits={[
          "More followers and engagement",
          "Professional brand image online",
          "Reach thousands of potential customers",
          "Consistent posting without your effort",
          "Urdu and English captions available",
          "Post for every product added",
        ]}
        faq={[
          {
            q: "How many posts per month do I get?",
            a: "You get 2 posts per week which is 8 per month. One for each product uploaded. Extra posts can be added at 150 PKR each.",
          },
          {
            q: "Do you manage Facebook and Instagram both?",
            a: "Yes! Every product post goes to both Facebook and Instagram simultaneously with platform-optimized captions.",
          },
          {
            q: "Can you write captions in Urdu?",
            a: "Yes, we can write captions in English, Urdu, or both depending on your target audience.",
          },
          {
            q: "Is social media management included in the package?",
            a: "Yes! Social media management is included free with the complete website package for 3 months.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}