import { useEffect } from "react";
import { company } from "./company";
import { About } from "./components/About";
import { Businesses } from "./components/Businesses";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

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
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData() }} />
    </>
  );
}
