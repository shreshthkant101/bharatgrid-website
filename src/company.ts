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

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#businesses", label: "Businesses" },
  { href: "#contact", label: "Contact" },
];
