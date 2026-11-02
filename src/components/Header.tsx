import type { ReactNode } from "react";
import { NAV, type Page } from "../company";
import { Container, Logo } from "./ui";

/** Markup only: the menu toggle and the scrolled border are added by src/site/client.ts on every page.
 *  `action`: a page's own call to action, kept in reach in the sticky header. */
export function Header({ page = "home", action }: { page?: Page; action?: ReactNode }) {
  return (
    <header
      data-header=""
      className="group sticky top-0 z-50 border-b border-transparent bg-paper/90 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 data-[open]:border-line data-[scrolled]:border-line"
    >
      <Container className="flex h-[72px] items-center justify-between">
        <a href="/" aria-label="BharatGrid Systems home" aria-current={page === "home" ? "page" : undefined}>
          <Logo />
        </a>

        <div className="ml-auto flex items-center gap-8">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={item.page === page ? "page" : undefined}
                    className="text-[14px] text-ink/70 transition-colors hover:text-ink aria-[current=page]:font-medium aria-[current=page]:text-ink"
                  >
                    {item.short ?? item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {action}
        </div>

        <button
          type="button"
          data-menu-button=""
          className="-mr-2 ml-3 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded="false"
          aria-controls="mobile-nav"
          aria-label="Open menu"
        >
          <span className="relative block h-3 w-[18px]">
            <span className="absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-transform duration-300 group-data-[open]:top-[5px] group-data-[open]:rotate-45" />
            <span className="absolute left-0 top-[10px] h-[1.5px] w-full bg-ink transition-transform duration-300 group-data-[open]:top-[5px] group-data-[open]:-rotate-45" />
          </span>
        </button>
      </Container>

      <nav id="mobile-nav" aria-label="Menu" hidden className="border-t border-line bg-paper lg:hidden">
        <Container>
          <ul className="pb-8 pt-2">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-line last:border-b-0">
                <a href={item.href} aria-current={item.page === page ? "page" : undefined} className="block py-4 text-[17px] text-ink aria-[current=page]:font-medium">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
