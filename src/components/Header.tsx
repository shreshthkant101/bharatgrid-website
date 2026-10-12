import { useEffect, useState } from "react";
import { NAV } from "../company";
import { Logo } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b px-5 sm:px-8 bg-white/85 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#top" aria-label="BharatGrid Systems — back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[14px] text-ink/75 transition-colors hover:text-navy">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-[18px]">
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                open ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                open ? "top-[5px] -rotate-45" : "top-[10px]"
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Menu"
        hidden={!open}
        className="-mx-5 border-t border-line bg-white px-5 pb-6 pt-2 sm:-mx-8 sm:px-8 md:hidden"
      >
        <ul>
          {NAV.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <a href={item.href} onClick={() => setOpen(false)} className="block py-4 text-[17px] text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
