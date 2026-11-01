// BharatGrid Academy — the one place for the application link and the dates.
// Change the form or the deadline here; every button on /academy follows.

/** The application form (Google Forms handles every submission). */
export const APPLY_URL = "https://forms.gle/5BiLtPLmQt1CoPUi9";

/** Applications close at 11:59 PM IST on 30 November 2026 (IST is UTC+05:30).
 *  After this instant every Apply button becomes an "Applications closed" state. */
export const APPLICATIONS_CLOSE = new Date("2026-11-30T23:59:59+05:30");

/** The applicant brochure, served from public/. Replace the PDF there to update it;
 *  `file` is the name it saves under when someone downloads it to share. */
export const BROCHURE = {
  href: "./business-fellowship-27-brochure.pdf",
  file: "BharatGrid-Academy-Business-Fellowship-27-Brochure.pdf",
  size: "PDF · 0.7 MB",
} as const;

export const fellowship = {
  name: "Business Fellowship ’27",
  organiser: "BharatGrid Academy",
  company: "BharatGrid Systems Pvt. Ltd.",
  closes: "30 November 2026",
  closesTime: "11:59 PM IST",
  begins: "1 January 2027",
  duration: "24 weeks",
  selections: 10,
  hires: 10,
  target: "1,000+",
  trainingHours: 120,
  url: "https://bharatgridsystems.com/academy",
} as const;
