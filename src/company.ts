// Single source for company facts shown on the site. Replace each PLACEHOLDER with the real value;
// email and phone become clickable links once set.
export const PLACEHOLDER = "[Placeholder]";

export const company = {
  legalName: "BharatGrid Systems Private Limited",
  shortName: "BharatGrid Systems",
  companyType: "Private Limited Company",
  cin: PLACEHOLDER,
  registeredOffice: PLACEHOLDER, // use "\n" for line breaks
  email: PLACEHOLDER,
  phone: PLACEHOLDER, // e.g. "+91 00000 00000"
  grievanceOfficer: PLACEHOLDER, // name (and designation) of the person responsible for queries/grievances
  founder: { name: "Shreshth Kant", role: "Founder & Director" },
  motto: "राष्ट्रहित सर्वोपरि",
  url: "https://bharatgridsystems.com",
  year: 2026,
};

export const isSet = (value: string) => value.trim() !== "" && value !== PLACEHOLDER;

export const NAV = [
  { href: "#about", label: "About" },
  { href: "#businesses", label: "Businesses" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];
