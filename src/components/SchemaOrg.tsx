export default function SchemaOrg() {
  const localBusiness = JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://devnixstudios.tech/#business",
    name: "Devnix Studios",
    alternateName: "Devnix",
    description:
      "Affordable custom website design in Pakistan starting at 5,000 PKR. Includes SEO, social media management and 3 months support.",
    url: "https://devnixstudios.tech",
    logo: {
      "@type": "ImageObject",
      url: "https://devnixstudios.tech/logo/DevnixlogoWeb.png",
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
    priceRange: "PKR 5,000 - PKR 17,500",
    currenciesAccepted: "PKR",
    paymentAccepted: "Cash, Bank Transfer, JazzCash, EasyPaisa",
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
          price: "5000",
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
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Business Setup",
            description:
              "Get your business listed on Google Maps and Google Places.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Commerce Development Pakistan",
            description:
              "Complete online store with product catalog, categories, and payment integration.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Maintenance Pakistan",
            description:
              "Ongoing support, bug fixes, theme changes, and performance monitoring.",
          },
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

  const faq = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of websites do you build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build custom websites for businesses including product catalogs, service websites, portfolios, and e-commerce stores. Every site is coded from scratch for maximum performance.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a website cost in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our website packages start at just 5,000 PKR for a complete custom-built website including 3 months of support and management. This includes hosting, SEO, and social media management.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to buy my own domain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you purchase your own domain name. If you want us to manage it for you, there is a 500 PKR annual management fee.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after the 3-month contract?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After 3 months, we sign a new contract with updated pricing based on your needs. You are not locked in.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 5-10 business days depending on complexity and how quickly you provide content and feedback.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide hosting for websites in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! First year of hosting is completely free. After that, minimal hosting charges apply.",
        },
      },
      {
        "@type": "Question",
        name: "Can I add more products than the included amount?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! The package includes 2 products per week. Additional products cost just 150 PKR each.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve clients all over Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We serve clients all over Pakistan including Karachi, Lahore, Islamabad, Faisalabad, Rawalpindi, Multan, and Peshawar. Everything is done online.",
        },
      },
    ],
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
        item: "https://devnixstudios.tech/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pricing",
        item: "https://devnixstudios.tech/#package",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://devnixstudios.tech/#contact",
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
        dangerouslySetInnerHTML={{ __html: faq }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumb }}
      />
    </>
  );
}