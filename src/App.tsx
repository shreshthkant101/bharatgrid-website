import { useEffect } from "react";
import { company, isSet } from "./company";
import { About } from "./components/About";
import { Businesses } from "./components/Businesses";
import { CompanyInfo } from "./components/CompanyInfo";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Leadership } from "./components/Leadership";

declare global {
  interface Window {
    __revealFallback?: number;
  }
}

function useReveal() {
  useEffect(() => {
    clearTimeout(window.__revealFallback);
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const structuredData = () =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.shortName,
    legalName: company.legalName,
    url: company.url,
    logo: `${company.url}/apple-touch-icon.png`,
    founder: { "@type": "Person", name: company.founder.name, jobTitle: company.founder.role },
    ...(isSet(company.email) && { email: company.email }),
    ...(isSet(company.phone) && { telephone: company.phone }),
    ...(isSet(company.registeredOffice) && {
      address: { "@type": "PostalAddress", streetAddress: company.registeredOffice.replace(/\n/g, ", "), addressCountry: "IN" },
    }),
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
        <Leadership />
        <CompanyInfo />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData() }} />
    </>
  );
}
