import type { Page } from "../company";

/** Everything search engines and social previews see about a page, in one place.
 *  scripts/prerender.mjs writes it into each page's <head> and builds sitemap.xml from it. */
export type PageMeta = {
  page: Page;
  /** the built HTML file, served by Cloudflare without the extension (about.html → /about) */
  file: string;
  /** the canonical path */
  path: string;
  title: string;
  description: string;
  /** label in the breadcrumb trail; the home page has none */
  crumb?: string;
  /** schema.org type of the page itself */
  type: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  og: { image: string; alt: string };
  theme?: string;
  /** not in the sitemap, not indexed (the 404 page) */
  noindex?: boolean;
};

export const PAGES: PageMeta[] = [
  {
    page: "home",
    file: "index.html",
    path: "/",
    title: "BharatGrid Systems | Software and AI/ML engineering in India",
    description:
      "BharatGrid Systems: an Indian software and AI/ML engineering company building research-driven products and intelligent systems for India’s infrastructure.",
    type: "WebPage",
    og: { image: "/og-image.jpg", alt: "BharatGrid Systems: engineering the next generation of India’s digital infrastructure" },
  },
  {
    page: "about",
    file: "about.html",
    path: "/about",
    title: "About BharatGrid Systems | Indian AI/ML engineering company",
    description:
      "Why BharatGrid Systems exists, how we work and what we intend to build. An Indian software and AI/ML engineering company, registered in Punjab in 2026.",
    crumb: "About",
    type: "AboutPage",
    og: { image: "/og/about.jpg", alt: "About BharatGrid Systems" },
  },
  {
    page: "engineering",
    file: "engineering.html",
    path: "/engineering",
    title: "Engineering & Research: applied AI/ML | BharatGrid Systems",
    description:
      "How we engineer: event detection on phones, software for weak networks, privacy-preserving learning, operations platforms, and our research directions.",
    crumb: "Engineering & Research",
    type: "WebPage",
    og: { image: "/og/engineering.jpg", alt: "Engineering and research at BharatGrid Systems" },
  },
  {
    page: "work",
    file: "work.html",
    path: "/work",
    title: "Our Work: Resku and Resku Business | BharatGrid Systems",
    description:
      "Resku, a personal safety app; Resku Business, an operations platform for transport operators; and BharatGrid Academy. Products built by BharatGrid Systems.",
    crumb: "Our Work",
    type: "CollectionPage",
    og: { image: "/og/work.jpg", alt: "Our work: Resku, Resku Business and BharatGrid Academy" },
  },
  {
    page: "academy",
    file: "academy.html",
    path: "/academy",
    title: "Business Fellowship ’27 · BharatGrid Academy",
    description:
      "BharatGrid Academy’s first programme: 24 weeks, ten seats. 12 weeks of training, 12 weeks of real marketing or sales work, then full-time roles.",
    crumb: "BharatGrid Academy",
    type: "WebPage",
    og: { image: "/og-academy.jpg", alt: "Business Fellowship ’27, BharatGrid Academy" },
    theme: "#fafbf9",
  },
  {
    page: "contact",
    file: "contact.html",
    path: "/contact",
    title: "Contact BharatGrid Systems | Enquiries and support",
    description:
      "Contact BharatGrid Systems for business and partnership enquiries, BharatGrid Academy questions and support. Registered office: SAS Nagar (Mohali), Punjab.",
    crumb: "Contact",
    type: "ContactPage",
    og: { image: "/og/contact.jpg", alt: "Contact BharatGrid Systems" },
  },
  {
    page: "notfound",
    file: "404.html",
    path: "/404",
    title: "Page not found | BharatGrid Systems",
    description: "This page doesn’t exist on bharatgridsystems.com.",
    type: "WebPage",
    og: { image: "/og-image.jpg", alt: "BharatGrid Systems" },
    noindex: true,
  },
];

export const pageMeta = (page: Page) => PAGES.find((p) => p.page === page)!;
