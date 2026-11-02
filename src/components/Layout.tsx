import type { ReactNode } from "react";
import type { Page } from "../company";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Every corporate page: skip link, header, the page's main content, footer. */
export function Layout({ page, children }: { page: Page; children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-sm text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <Header page={page} />
      <main id="main">{children}</main>
      <Footer page={page} />
    </>
  );
}
