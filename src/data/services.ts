export const SERVICE_CATEGORIES = [
  "design",
  "development",
  "marketing",
  "consulting",
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export interface PricingTier {
  name: string;
  price: number;
  billingPeriod: "month" | "year" | "project";
  features: readonly string[];
  highlighted?: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  features: readonly string[];
  pricing: readonly PricingTier[];
  featured: boolean;
}

export const services = [
  {
    id: "svc-web-design",
    slug: "web-design",
    title: "Web Design",
    category: "design",
    tagline: "Interfaces people actually want to use",
    description:
      "Custom interface design and design systems for products and marketing sites, built to hold up as your product grows.",
    features: [
      "Custom UI/UX design",
      "Responsive layouts",
      "Component-based design systems",
    ],
    pricing: [
      {
        name: "Starter",
        price: 1500,
        billingPeriod: "project",
        features: ["Up to 5 pages", "1 round of revisions"],
      },
      {
        name: "Growth",
        price: 4500,
        billingPeriod: "project",
        features: ["Up to 15 pages", "Design system", "3 rounds of revisions"],
        highlighted: true,
      },
    ],
    featured: true,
  },
  {
    id: "svc-web-dev",
    slug: "web-development",
    title: "Web Development",
    category: "development",
    tagline: "Fast, maintainable builds",
    description:
      "Production web apps built with modern frameworks, with an emphasis on performance and long-term maintainability.",
    features: [
      "Frontend & backend builds",
      "API integrations",
      "Performance audits",
    ],
    pricing: [
      {
        name: "Starter",
        price: 3000,
        billingPeriod: "project",
        features: ["Single page app", "Basic API integration"],
      },
      {
        name: "Pro",
        price: 8000,
        billingPeriod: "project",
        features: ["Multi-page app", "Auth & database", "CI/CD setup"],
        highlighted: true,
      },
    ],
    featured: true,
  },
  {
    id: "svc-seo",
    slug: "seo-optimization",
    title: "SEO Optimization",
    category: "marketing",
    tagline: "Get found by the people already looking",
    description:
      "Technical and content SEO to improve organic visibility, from on-page fixes to ongoing content strategy.",
    features: ["Technical SEO audit", "Keyword strategy", "Monthly reporting"],
    pricing: [
      {
        name: "Essentials",
        price: 800,
        billingPeriod: "month",
        features: ["Monthly audit", "Keyword tracking"],
      },
    ],
    featured: false,
  },
  {
    id: "svc-consulting",
    slug: "consulting",
    title: "Strategy Consulting",
    category: "consulting",
    tagline: "Decide what to build before you build it",
    description:
      "Hands-on consulting for teams figuring out product, technical, or go-to-market direction.",
    features: ["Architecture review", "Roadmap planning", "Vendor evaluation"],
    pricing: [
      {
        name: "Hourly",
        price: 250,
        billingPeriod: "month",
        features: ["Async + 1 call/week"],
      },
    ],
    featured: false,
  },
] as const satisfies readonly Service[];
