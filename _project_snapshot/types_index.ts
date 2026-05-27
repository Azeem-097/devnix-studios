export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface PackageFeature {
  text: string;
  included: boolean;
  note?: string;
}

export interface PackageAddon {
  item: string;
  price: string;
}

export interface SupportFeature {
  text: string;
  detail?: string;
}

export interface PricingBreakdown {
  item: string;
  price: string;
  note?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyUsPoint {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  svgPath: string;
  viewBox?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  whatsappNumber: string;
  location: string;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  gradient: string;
  screenshot?: string;
}

export interface SiteData {
  siteName: string;
  tagline: string;
  description: string;
  navLinks: NavLink[];
  services: Service[];
  packageFeatures: PackageFeature[];
  packageAddons: PackageAddon[];
  supportFeatures: SupportFeature[];
  pricingBreakdown: PricingBreakdown[];
  processSteps: ProcessStep[];
  whyUsPoints: WhyUsPoint[];
  faqs: FAQ[];
  socialLinks: SocialLink[];
  contactInfo: ContactInfo;
  projects: Project[];
}