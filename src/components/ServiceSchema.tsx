interface ServiceSchemaProps {
  name: string;
  description: string;
  price?: string;
  slug: string;
}

export default function ServiceSchema({
  name,
  description,
  price,
  slug,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://devnixstudios.tech/${slug}/#service`,
    name,
    description,
    provider: {
      "@id": "https://devnixstudios.tech/#business",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    url: `https://devnixstudios.tech/${slug}`,
    ...(price && {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
        validFrom: "2024-01-01",
      },
    }),
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
        name: "Services",
        item: "https://devnixstudios.tech/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: `https://devnixstudios.tech/${slug}`,
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
