// Renders each page to static HTML after the client build, so content and metadata are in the HTML for
// crawlers and first paint. Also writes sitemap.xml and checks every page before it can ship.
import { readdir, readFile, rm, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const { pages, sitemap } = await import(new URL("dist-ssr/entry-server.js", root).href);

// Preload the font of each page's first screen, so its heading doesn't reflow when the font arrives.
const assets = await readdir(new URL("dist/assets/", root));
const font = (pattern) => {
  const file = assets.find((f) => pattern.test(f));
  if (!file) throw new Error(`no font matching ${pattern}`);
  return `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`;
};
const inter = font(/^inter-latin-wght-normal-.*\.woff2$/);
const playfair = font(/^playfair-display-latin-wght-normal-.*\.woff2$/);

for (const p of pages) {
  const file = new URL(`dist/${p.file}`, root);
  let html = await readFile(file, "utf8");
  for (const marker of ["<!--head-->", "<!--app-->"]) {
    if (!html.includes(marker)) throw new Error(`${p.file} is missing the ${marker} marker`);
  }
  const preloads = p.page === "academy" ? `${playfair}\n    ${inter}` : inter;
  html = html.replace("<!--head-->", `${preloads}\n    ${p.head}`).replace("<!--app-->", p.html());

  // /academy's React bundle hydrates the Apply buttons; let the fonts its first screen needs arrive first.
  if (p.page === "academy") html = html.replace(/<script type="module" crossorigin src=/, '<script type="module" fetchpriority="low" crossorigin src=');

  // Inline the stylesheets (about 9 KB compressed): one less request between the HTML and the first paint.
  for (const [tag, href] of [...html.matchAll(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/g)]) {
    const css = await readFile(new URL(`dist${href}`, root), "utf8");
    html = html.replace(tag, () => `<style>${css}</style>`);
  }

  // Every page must ship with one title, one description and one h1.
  const count = (re) => (html.match(re) ?? []).length;
  const checks = { title: count(/<title>/g), description: count(/<meta name="description"/g), h1: count(/<h1[\s>]/g) };
  for (const [what, n] of Object.entries(checks)) {
    if (n !== 1) throw new Error(`${p.file}: expected one ${what}, found ${n}`);
  }
  // ...short enough that search results show them whole.
  for (const [what, text, max] of [["title", p.title, 60], ["description", p.description, 155]]) {
    if ([...text].length > max) throw new Error(`${p.file}: ${what} is ${[...text].length} characters (max ${max})`);
  }
  await writeFile(file, html);
  console.log(`prerendered dist/${p.file}`);
}

const lastmod = new Date().toISOString().slice(0, 10);
const urls = sitemap.map((loc) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join("\n");
await writeFile(
  new URL("dist/sitemap.xml", root),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`wrote dist/sitemap.xml (${sitemap.length} URLs)`);

await rm(new URL("dist-ssr", root), { recursive: true, force: true });
