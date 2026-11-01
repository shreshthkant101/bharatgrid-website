import { company } from "./company";
import { About } from "./components/About";
import { AcademySection } from "./components/AcademySection";
import { Businesses } from "./components/Businesses";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { useReveal } from "./reveal";

const structuredData = () =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.shortName,
    legalName: company.legalName,
    url: company.url,
    logo: `${company.url}/apple-touch-icon.png`,
    foundingDate: String(company.registeredYear),
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.registeredOffice[0],
      addressLocality: "SAS Nagar",
      addressRegion: "Punjab",
      postalCode: "160062",
      addressCountry: "IN",
    },
    brand: { "@type": "Brand", name: "Resku", url: company.reskuUrl },
  }).replace(/</g, "\\u003c");

export default function App() {
  useReveal();
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-navy px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <div id="top" />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Businesses />
        <AcademySection />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData() }} />
    </>
  );
}
