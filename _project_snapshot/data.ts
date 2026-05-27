import { SiteData } from "@/types";

export const siteData: SiteData = {
  siteName: "Devnix Studios",
  tagline: "We Build. We Manage. We Grow.",
  description:
    "Professional web development, SEO, and social media management for businesses that want to dominate online.",

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Package", href: "#package" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#whyus" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      icon: "Globe",
      title: "Custom Website Development",
      description:
        "Fully custom-built websites tailored to your business. No templates, no drag-and-drop. Clean code, fast performance.",
    },
    {
      icon: "Search",
      title: "Basic SEO Optimization",
      description:
        "On-page SEO for every product and page. Meta tags, image alt texts, structured data, and keyword optimization.",
    },
    {
      icon: "Share2",
      title: "Social Media Management",
      description:
        "Facebook & Instagram posts with professional captions and hashtags for every product added to your website.",
    },
    {
      icon: "Package",
      title: "Product Management",
      description:
        "Regular product uploads, category management, image optimization, and content updates to keep your store fresh.",
    },
    {
      icon: "MapPin",
      title: "Google Business Setup",
      description:
        "Get your business listed on Google Maps and Google Places so local customers can find you easily.",
    },
    {
      icon: "Settings",
      title: "Website Maintenance",
      description:
        "Ongoing support, bug fixes, theme changes, page additions, and performance monitoring to keep everything running smooth.",
    },
  ],

  projects: [
    {
      title: "EarnixLab",
      description:
        "A modern platform built with cutting-edge web technologies. Clean design, fast performance, and seamless user experience.",
      url: "https://earnixlab.com",
      tags: ["Web App", "Full Stack", "Modern UI"],
      gradient: "from-[#6366f1] to-[#8b5cf6]",
      screenshot: "/projects/earnixlab",
    },
    {
      title: "NextGenZ",
      description:
        "A sleek modern platform showcasing the future of digital experiences. Built with Next.js and deployed on Vercel for blazing speed.",
      url: "https://nextgenzai.vercel.app",
      tags: ["Modern", "Next.js", "Vercel"],
      gradient: "from-[#8b5cf6] to-[#06b6d4]",
      screenshot: "/projects/nextgenz",
    },
    {
      title: "Ali Poultry",
      description:
        "A professional business website for a poultry enterprise. Product catalog, business info, and clean responsive design.",
      url: "https://ali-poultry-enterprises-demo.vercel.app",
      tags: ["Business", "Catalog", "Responsive"],
      gradient: "from-[#06b6d4] to-[#6366f1]",
      screenshot: "/projects/alipoultry",
    },
  ],

  serviceOptions: [
    { value: "custom-website", label: "Custom Website Development" },
    { value: "seo", label: "SEO Optimization" },
    { value: "social-media", label: "Social Media Management" },
    { value: "full-package", label: "Complete Package (Website + Support)" },
    { value: "maintenance", label: "Website Maintenance Only" },
    { value: "other", label: "Other / Custom Request" },
  ],

  packageFeatures: [
    { text: "Fully Custom-Built Website", included: true },
    {
      text: "1 Year Free Hosting",
      included: true,
      note: "Minimal charges after first year",
    },
    {
      text: "Domain Management",
      included: true,
      note: "Domain bought by client. 500 PKR/year if we manage it",
    },
    { text: "3 Months Support & Management", included: true },
    { text: "Google Business Listing", included: true },
    {
      text: "Meta Pixel Installation",
      included: true,
      note: "Free first time. 500 PKR for changes",
    },
    { text: "Mobile Responsive Design", included: true },
    { text: "Fast Loading Speed", included: true },
  ],

  supportFeatures: [
    {
      text: "2 Products Uploaded Per Week",
      detail: "Extra products: 150 PKR each",
    },
    {
      text: "Basic SEO for Each Product",
      detail: "Meta tags, keywords, image alt texts",
    },
    {
      text: "1 New Category Every 2 Weeks",
      detail: "Extra categories: 200 PKR each",
    },
    {
      text: "2 Product Revisions Per Month",
      detail: "Extra revisions: 50 PKR each",
    },
    {
      text: "Image Optimization",
      detail: "Compressed & optimized for fast loading",
    },
    {
      text: "Facebook & Instagram Posts",
      detail: "With hashtags and captions for each product",
    },
  ],

  packageAddons: [
    { item: "Extra Product Upload", price: "150 PKR" },
    { item: "Extra Category", price: "200 PKR" },
    { item: "Extra Product Revision", price: "50 PKR" },
    { item: "New Page Addition", price: "300 PKR" },
    { item: "Theme Customization", price: "500 - 1000+ PKR" },
    { item: "Meta Pixel Change", price: "500 PKR" },
    { item: "Domain Management", price: "500 PKR/year" },
  ],

  pricingBreakdown: [
    {
      item: "Complete Website Build",
      price: "5,000 PKR",
      note: "One-time payment",
    },
    {
      item: "Month 1 - Support & Management",
      price: "2,500 PKR",
      note: "Discounted first month",
    },
    { item: "Month 2 - Support & Management", price: "5,000 PKR" },
    { item: "Month 3 - Support & Management", price: "5,000 PKR" },
    {
      item: "Total (3-Month Contract)",
      price: "17,500 PKR",
      note: "New contract with updated prices after 3 months",
    },
  ],

  processSteps: [
    {
      step: 1,
      title: "Discovery Call",
      description:
        "We discuss your business, goals, products, and what you need from your website.",
      icon: "Phone",
    },
    {
      step: 2,
      title: "Design & Development",
      description:
        "We build your custom website from scratch. You get to review and request changes before launch.",
      icon: "Settings",
    },
    {
      step: 3,
      title: "Launch & Setup",
      description:
        "Website goes live. Google Business listing, Meta Pixel, and all integrations are set up.",
      icon: "Globe",
    },
    {
      step: 4,
      title: "Ongoing Management",
      description:
        "We handle products, SEO, social media, and maintenance so you can focus on your business.",
      icon: "Package",
    },
  ],

  whyUsPoints: [
    {
      icon: "CheckCircle",
      title: "No Templates, Pure Custom Code",
      description:
        "Every website is built from scratch. No WordPress themes, no Wix. Just clean, fast, custom code.",
    },
    {
      icon: "Star",
      title: "All-In-One Package",
      description:
        "Website + SEO + Social Media + Management. You do not need to hire 4 different people.",
    },
    {
      icon: "MessageCircle",
      title: "Direct Communication",
      description:
        "No middlemen, no ticket systems. Talk directly with the developer who builds your site.",
    },
    {
      icon: "ArrowRight",
      title: "Affordable Pricing",
      description:
        "Enterprise-quality work at prices that make sense for small and medium businesses in Pakistan.",
    },
  ],

  faqs: [
    {
      question: "What kind of websites do you build?",
      answer:
        "We build custom websites for businesses - including product catalogs, service websites, portfolios, and e-commerce stores. Every site is coded from scratch for maximum performance.",
    },
    {
      question: "Do I need to buy my own domain?",
      answer:
        "Yes, you purchase your own domain name. If you want us to manage it for you, there is a 500 PKR annual management fee.",
    },
    {
      question: "What happens after the 3-month contract?",
      answer:
        "After 3 months, we sign a new contract with updated pricing based on your needs. You are not locked in - you can continue, modify, or end the service.",
    },
    {
      question: "Can I add more products than the included amount?",
      answer:
        "Absolutely! The package includes 2 products per week. Additional products cost just 150 PKR each, including SEO and social media posting.",
    },
    {
      question: "Do you provide the hosting?",
      answer:
        "Yes! First year of hosting is completely free. After that, minimal hosting charges apply to keep your site running.",
    },
    {
      question: "What is Meta Pixel and do I need it?",
      answer:
        "Meta Pixel is a tracking code for Facebook/Instagram ads. If you plan to run ads, you need it. We install it free the first time.",
    },
    {
      question: "How long does it take to build the website?",
      answer:
        "Typically 5-10 business days depending on the complexity and how quickly you provide content and feedback.",
    },
    {
      question: "Can I request custom design changes later?",
      answer:
        "Yes! Theme customizations cost 500-1000+ PKR depending on complexity. New page additions cost 300 PKR per page.",
    },
  ],

  socialLinks: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61590108942219",
      svgPath:
        "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/devnixstudios/",
      svgPath:
        "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Azeem-097",
      svgPath:
        "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/923184632828",
      svgPath:
        "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    },
  ],

  contactInfo: {
    phone: "+92 318 4632828",
    email: "Info@devnixstudios.tech",
    whatsapp: "https://wa.me/923184632828",
    whatsappNumber: "+92 318 4632828",
    location: "Pakistan",
  },
};