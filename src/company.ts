// Single source for company facts shown on the site.
export const company = {
  legalName: "BharatGrid Systems Private Limited",
  shortName: "BharatGrid Systems",
  registeredYear: 2026,
  registeredOffice: ["#339, Medallion 68, Sector 68", "SAS Nagar, Punjab 160062"],
  email: "info@bharatgridsystems.com",
  phone: "+91 95011 59898",
  grievanceEmail: "support@bharatgridsystems.com",
  motto: "राष्ट्रहित सर्वोपरि",
  url: "https://bharatgridsystems.com",
  reskuUrl: "https://reskuapp.com",
};

export const telHref = `tel:${company.phone.replace(/[^\d+]/g, "")}`;

export type Page = "home" | "academy";

// Relative links, so the same build works at the domain root and on the
// github.io project path; "./#about" is a same-page scroll on the home page and
// a link home from /academy.
export const NAV: { href: string; label: string; page?: Page }[] = [
  { href: "./#about", label: "About" },
  { href: "./#businesses", label: "Businesses" },
  { href: "./academy", label: "Academy", page: "academy" },
  { href: "./#contact", label: "Contact" },
];

/** Where the logo goes: the top of the home page, or home from elsewhere. */
export const homeHref = (page: Page) => (page === "home" ? "#top" : "./");
