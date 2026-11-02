import { company } from "../company";
import type { PageMeta } from "./pages";
import { abs, graph, ldJson } from "./schema";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Runs before first paint: turns on scroll reveals (with a fallback if the scripts never run), and keeps
 *  copies of the site on any other host (www, workers.dev, github.io) out of search results. */
const BOOT = `document.documentElement.classList.add("js");window.__revealFallback=setTimeout(function(){document.documentElement.classList.add("reveal-all")},2500);if(location.hostname!=="bharatgridsystems.com"&&!/^(localhost|127\\.0\\.0\\.1)$/.test(location.hostname)){var m=document.createElement("meta");m.name="robots";m.content="noindex";document.head.appendChild(m)}`;

/** The <head> tags for one page: title, description, canonical, robots, social previews and JSON-LD. */
export function head(meta: PageMeta): string {
  const url = abs(meta.path);
  const image = abs(meta.og.image);
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    meta.noindex ? "" : `<link rel="canonical" href="${url}" />`,
    `<meta name="theme-color" content="${meta.theme ?? "#f8f6f1"}" />`,
    `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`,
    `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${company.shortName}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    meta.noindex ? "" : `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(meta.og.alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script>${BOOT}</script>`,
    meta.noindex ? "" : `<script type="application/ld+json">${ldJson(graph(meta))}</script>`,
  ];
  return tags.filter(Boolean).join("\n    ");
}
