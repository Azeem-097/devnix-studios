interface IndustryServiceSchemaProps {
  industryName: string;
  description: string;
  slug: string;
  price?: string;
}

export default function IndustryServiceSchema({
  industryName,
  description,
  slug,
  price = "20000",
}: IndustryServiceSchemaProps) {
  const pageUrl = `https://devnixstudios.tech/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `${industryName} Website Design Pakistan`,
    description: description,
    provider: {
      "@id": "https://devnixstudios.tech/#business",
    },
    serviceType: `${industryName} Website Development`,
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    url: pageUrl,
    audience: {
      "@type": "BusinessAudience",
      audienceType: industryName,
    },
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
      validFrom: "2024-01-01",
      priceValidUntil: "2025-12-31",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${industryName} Website Features`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile Responsive Design",
          },
        },
      ],
    },
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
        name: `${industryName} Website`,
        item: pageUrl,
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