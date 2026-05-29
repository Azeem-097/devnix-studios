interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  category: string;
  readTime: string;
  image?: string;
}

export default function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  category,
  readTime,
  image,
}: ArticleSchemaProps) {
  const pageUrl = `https://devnixstudios.tech/blog/${slug}`;
  const wordCount = parseInt(readTime) * 200; // ~200 words/minute

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: title,
    description: description,
    image: {
      "@type": "ImageObject",
      url: image || "https://devnixstudios.tech/og-image.png",
      width: 1200,
      height: 630,
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "Devnix Studios",
      url: "https://devnixstudios.tech",
      logo: {
        "@type": "ImageObject",
        url: "https://devnixstudios.tech/logo/DevnixlogoWeb.png",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Devnix Studios",
      logo: {
        "@type": "ImageObject",
        url: "https://devnixstudios.tech/logo/DevnixlogoWeb.png",
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
    articleSection: category,
    wordCount: wordCount,
    inLanguage: "en-PK",
    isAccessibleForFree: true,
    keywords: [
      "web design Pakistan",
      "website development Pakistan",
      category.toLowerCase(),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}