export default function SchemaOrg() {
  const localBusiness = JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://devnixstudios.tech/#business",
    name: "Devnix Studios",
    alternateName: "Devnix",
    description:
      "Affordable custom website design in Pakistan starting at 20,000 PKR. One-time payment with optional monthly maintenance & support. No lock-in contract.",
    url: "https://devnixstudios.tech",
    logo: {
      "@type": "ImageObject",
      url: "https://devnixstudios.tech/logo/DevnixlogoWeb.avif",
      width: 512,
      height: 512,
    },
    image: "https://devnixstudios.tech/og-image.png",
    telephone: "+923184632828",
    email: "Info@devnixstudios.tech",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressRegion: "Pakistan",
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "City", name: "Karachi" },
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Islamabad" },
      { "@type": "City", name: "Faisalabad" },
      { "@type": "City", name: "Rawalpindi" },
      { "@type": "City", name: "Multan" },
      { "@type": "City", name: "Peshawar" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday",
          "Friday","Saturday","Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    priceRange: "PKR 20,000 - PKR 17,500",
    currenciesAccepted: "PKR",
    paymentAccepted: "Cash, Bank Transfer, JazzCash, EasyPaisa",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Muhammad Ali" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Devnix Studios built our poultry business website in just 7 days. The design is clean, loads fast, and we are already getting WhatsApp inquiries from new customers we never reached before.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah Khan" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Very professional team. They understood exactly what I needed for my clothing business. The social media posts they make for every product are amazing.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ahmed Raza" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "I was skeptical about getting a website at PKR 20,000 but the quality exceeded my expectations. My property listings are now on Google and I get calls from people who found me online.",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61590108942219",
      "https://www.instagram.com/devnixstudios/",
      "https://github.com/Azeem-097",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design and Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development",
            description:
              "Fully custom-built websites. No templates, no drag-and-drop. Clean code, fast performance.",
          },
          price: "20000",
          priceCurrency: "PKR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization Pakistan",
            description:
              "On-page SEO for every product and page. Meta tags, image alt texts, structured data.",
          },
          price: "2500",
          priceCurrency: "PKR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Management",
            description:
              "Facebook and Instagram posts with professional captions and hashtags.",
          },
          price: "2500",
          priceCurrency: "PKR",
        },
      ],
    },
  });

  const website = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://devnixstudios.tech/#website",
    name: "Devnix Studios",
    url: "https://devnixstudios.tech",
    description:
      "Pakistan affordable custom website design, SEO and social media management services.",
    publisher: {
      "@id": "https://devnixstudios.tech/#business",
    },
  });

  const breadcrumb = JSON.stringify({
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
        item: "https://devnixstudios.tech/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blog",
        item: "https://devnixstudios.tech/blog",
      },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: localBusiness }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: website }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumb }}
      />
    </>
  );
}