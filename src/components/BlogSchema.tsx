interface BlogSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

export default function BlogSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: BlogSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://devnixstudios.tech/blog/${slug}/#article`,
    headline: title,
    description,
    image: image || "https://devnixstudios.tech/og-image.png",
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "Devnix Studios",
      url: "https://devnixstudios.tech",
    },
    publisher: {
      "@type": "Organization",
      name: "Devnix Studios",
      logo: {
        "@type": "ImageObject",
        url: "https://devnixstudios.tech/logo/DevnixlogoWeb.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://devnixstudios.tech/blog/${slug}`,
    },
    url: `https://devnixstudios.tech/blog/${slug}`,
    inLanguage: "en-PK",
    keywords: [
      "web design Pakistan",
      "website development Pakistan",
      "affordable website Pakistan",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://devnixstudios.tech",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://devnixstudios.tech/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://devnixstudios.tech/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
