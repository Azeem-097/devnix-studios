interface CitySchemaProps {
  city: string;
  slug: string;
}

export default function CitySchema({ city, slug }: CitySchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `https://devnixstudios.tech/website-design-${slug}/#business`,
    name: `Devnix Studios - Website Design ${city}`,
    description: `Affordable custom website design in ${city}, Pakistan starting at 20,000 PKR. Professional web development, SEO, and social media management for ${city} businesses.`,
    url: `https://devnixstudios.tech/website-design-${slug}`,
    telephone: "+923184632828",
    email: "Info@devnixstudios.tech",
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressCountry: "PK",
      addressRegion: "Pakistan",
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    priceRange: "PKR 20,000 - PKR 17,500",
    currenciesAccepted: "PKR",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61590108942219",
      "https://www.instagram.com/devnixstudios/",
    ],
    parentOrganization: {
      "@id": "https://devnixstudios.tech/#business",
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
        name: `Website Design ${city}`,
        item: `https://devnixstudios.tech/website-design-${slug}`,
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
