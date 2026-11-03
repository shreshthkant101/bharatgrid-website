// Single source for company facts and site navigation.
export const company = {
  legalName: "BharatGrid Systems Private Limited",
  shortName: "BharatGrid Systems",
  registeredYear: 2026,
  registeredOffice: ["#339, Medallion 68, Sector 68", "SAS Nagar, Punjab 160062"],
  address: {
    street: "#339, Medallion 68, Sector 68",
    locality: "SAS Nagar",
    region: "Punjab",
    postalCode: "160062",
    country: "IN",
  },
  email: "info@bharatgridsystems.com",
  phone: "+91 95011 59898",
  grievanceEmail: "support@bharatgridsystems.com",
  motto: "राष्ट्रहित सर्वोपरि",
  url: "https://bharatgridsystems.com",
  reskuUrl: "https://reskuapp.com",
  /** Official profiles: the footer, /contact and the Organization's sameAs. */
  social: [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/bharatgrid" },
    { name: "Instagram", url: "https://www.instagram.com/bharatgridsystems/" },
  ],
};

export const telHref = `tel:${company.phone.replace(/[^\d+]/g, "")}`;

export type Page = "home" | "about" | "engineering" | "work" | "academy" | "contact" | "notfound";

/** The site's sections, in navigation order. Root-relative: the site lives at the domain root. */
export const NAV: { href: string; label: string; short?: string; page: Page }[] = [
  { href: "/about", label: "About", page: "about" },
  { href: "/engineering", label: "Engineering & Research", short: "Engineering", page: "engineering" },
  { href: "/work", label: "Our Work", page: "work" },
  { href: "/academy", label: "Academy", page: "academy" },
  { href: "/contact", label: "Contact", page: "contact" },
];
