export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Devnix Studios",
    description:
      "Affordable custom website design in Pakistan starting at 5,000 PKR. Includes SEO, social media management and 3 months support.",
    url: "https://devnixstudios.tech",
    telephone: "+923184632828",
    email: "Info@devnixstudios.tech",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressRegion: "Pakistan",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    priceRange: "PKR 5,000 - PKR 17,500",
    currenciesAccepted: "PKR",
    serviceType: [
      "Website Design",
      "Web Development",
      "SEO Optimization",
      "Social Media Management",
      "Google Business Setup",
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61590108942219",
      "https://www.instagram.com/devnixstudios/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
