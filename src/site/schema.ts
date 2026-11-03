import { company } from "../company";
import type { PageMeta } from "./pages";

/** Schema.org JSON-LD for each page: one connected graph with stable @ids, so the company, the website, the
 *  Academy and each page are described the same way everywhere. Only facts that are true today. */

export const abs = (path: string) => `${company.url}${path === "/" ? "/" : path}`;
export const IDS = {
  org: `${company.url}/#organization`,
  site: `${company.url}/#website`,
  academy: `${company.url}/academy#academy`,
};

const organization = () => ({
  "@type": "Organization",
  "@id": IDS.org,
  name: company.shortName,
  legalName: company.legalName,
  alternateName: ["BharatGrid", "BharatGrid Systems Pvt. Ltd."],
  url: abs("/"),
  logo: { "@type": "ImageObject", url: abs("/logo-512.png"), width: 512, height: 512 },
  image: abs("/og-image.jpg"),
  description:
    "BharatGrid Systems Private Limited is an Indian software and AI/ML engineering company. It builds research-driven products and intelligent systems, and works towards the digital infrastructure that industries, institutions and essential services depend on.",
  foundingDate: String(company.registeredYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.locality,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  email: company.email,
  telephone: company.phone.replace(/\s/g, ""),
  contactPoint: [
    { "@type": "ContactPoint", contactType: "general enquiries", email: company.email, telephone: company.phone.replace(/\s/g, "") },
    { "@type": "ContactPoint", contactType: "customer support", email: company.grievanceEmail },
  ],
  knowsAbout: [
    "Software engineering",
    "Artificial intelligence",
    "Machine learning",
    "Intelligent systems",
    "Applied research",
    "Digital infrastructure",
    "Mobile sensing and event detection",
    "Privacy-preserving data collection",
    "Transport operations software",
  ],
  brand: [{ "@type": "Brand", name: "Resku", url: company.reskuUrl }],
  subOrganization: { "@id": IDS.academy },
  sameAs: company.social.map((s) => s.url),
});

const website = () => ({
  "@type": "WebSite",
  "@id": IDS.site,
  url: abs("/"),
  name: company.shortName,
  alternateName: ["BharatGrid", company.legalName],
  inLanguage: "en-IN",
  publisher: { "@id": IDS.org },
});

const academy = () => ({
  "@type": "EducationalOrganization",
  "@id": IDS.academy,
  name: "BharatGrid Academy",
  url: abs("/academy"),
  description: "The professional training and talent development initiative of BharatGrid Systems. Its first programme is Business Fellowship ’27.",
  parentOrganization: { "@id": IDS.org },
});

function webPage(meta: PageMeta) {
  const url = abs(meta.path);
  return {
    "@type": meta.type,
    "@id": `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    inLanguage: "en-IN",
    isPartOf: { "@id": IDS.site },
    about: { "@id": meta.page === "academy" ? IDS.academy : IDS.org },
    primaryImageOfPage: { "@type": "ImageObject", url: abs(meta.og.image) },
    ...(meta.crumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  };
}

const breadcrumb = (meta: PageMeta) => ({
  "@type": "BreadcrumbList",
  "@id": `${abs(meta.path)}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: company.shortName, item: abs("/") },
    { "@type": "ListItem", position: 2, name: meta.crumb, item: abs(meta.path) },
  ],
});

export function graph(meta: PageMeta) {
  const nodes: object[] = [organization(), website(), academy(), webPage(meta)];
  if (meta.crumb) nodes.push(breadcrumb(meta));
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** JSON for a <script type="application/ld+json">, safe inside HTML. */
export const ldJson = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
