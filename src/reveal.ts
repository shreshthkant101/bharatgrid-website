import { useEffect } from "react";

declare global {
  interface Window {
    __revealFallback?: number;
  }
}

/** Fades [data-reveal] elements in as they scroll into view (index.css). */
export function useReveal() {
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
