import { StrictMode, type ReactElement } from "react";
import { renderToString } from "react-dom/server";
import Academy from "./academy/Academy";
import type { Page } from "./company";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Engineering from "./pages/Engineering";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Work from "./pages/Work";
import { head } from "./site/head";
import { PAGES } from "./site/pages";
import { abs } from "./site/schema";

const VIEWS: Record<Page, () => ReactElement> = {
  home: () => <Home />,
  about: () => <About />,
  engineering: () => <Engineering />,
  work: () => <Work />,
  academy: () => <Academy />,
  contact: () => <Contact />,
  notfound: () => <NotFound />,
};

/** Each page as static HTML, with its <head>, for scripts/prerender.mjs. */
export const pages = PAGES.map((meta) => ({
  file: meta.file,
  page: meta.page,
  head: head(meta),
  html: () => renderToString(<StrictMode>{VIEWS[meta.page]()}</StrictMode>),
}));

/** Canonical URLs of every indexable page, for sitemap.xml. */
export const sitemap = PAGES.filter((p) => !p.noindex).map((p) => abs(p.path));
