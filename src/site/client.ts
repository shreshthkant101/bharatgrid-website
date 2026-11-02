// The corporate pages' only script (their HTML is prerendered and ships no React): the font, the stylesheet,
// the mobile menu, the header's scrolled border, scroll reveals, links from the old one-page site, and
// closing-date text. /academy loads it too, beside its React app.
import "@fontsource-variable/inter";
import "../index.css";

declare global {
  interface Window {
    __revealFallback?: number;
  }
}

function header() {
  const el = document.querySelector<HTMLElement>("[data-header]");
  const button = el?.querySelector<HTMLButtonElement>("[data-menu-button]");
  const menu = document.getElementById("mobile-nav");
  if (!el || !button || !menu) return;

  const setOpen = (open: boolean) => {
    el.toggleAttribute("data-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
  };
  button.addEventListener("click", () => setOpen(!el.hasAttribute("data-open")));
  menu.addEventListener("click", (e) => (e.target as HTMLElement).closest("a") && setOpen(false));
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && el.hasAttribute("data-open")) {
      setOpen(false);
      button.focus();
    }
  });
  addEventListener("resize", () => innerWidth >= 1024 && setOpen(false));

  const onScroll = () => el.toggleAttribute("data-scrolled", scrollY > 8);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });
}

/** Fades [data-reveal] elements in as they scroll into view (index.css). */
function reveal() {
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
}

/** The old site was one page; its section links now live on their own pages. */
function legacyAnchors() {
  if (location.pathname !== "/") return;
  const moved: Record<string, string> = { "#about": "/about", "#businesses": "/work", "#contact": "/contact" };
  const to = moved[location.hash];
  if (to && !document.getElementById(location.hash.slice(1))) location.replace(to);
}

/** Static pages after a deadline: data-closes (ISO time) swaps text for data-closed; data-hide-after hides
 *  the element (an Apply link). /academy's own React app handles its buttons the same way. */
function deadlines() {
  const past = (iso?: string) => !!iso && Date.now() >= Date.parse(iso);
  document.querySelectorAll<HTMLElement>("[data-closes]").forEach((el) => {
    if (past(el.dataset.closes)) el.textContent = el.dataset.closed ?? "";
  });
  document.querySelectorAll<HTMLElement>("[data-hide-after]").forEach((el) => {
    if (past(el.dataset.hideAfter)) el.hidden = true;
  });
}

legacyAnchors();
header();
reveal();
deadlines();

export {};
