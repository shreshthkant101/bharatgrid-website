import { defineConfig, type Connect, type Plugin } from "vite";
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const page = (name: string) => fileURLToPath(new URL(name, import.meta.url));
// One HTML entry per page in the project root (index.html, about.html, …); src/site/pages.ts describes each.
const ENTRIES = readdirSync(page(".")).filter((f) => f.endsWith(".html")).map((f) => f.replace(/\.html$/, ""));

/** Cloudflare serves about.html at /about; this makes the dev and preview servers do the same. */
function cleanUrls(): Plugin {
  const names = new Set(ENTRIES.filter((n) => n !== "index"));
  const rewrite: Connect.NextHandleFunction = (req, _res, next) => {
    const [path, query] = (req.url ?? "/").split("?");
    const name = path.replace(/^\/|\/$/g, "");
    if (names.has(name)) req.url = `/${name}.html${query ? `?${query}` : ""}`;
    next();
  };
  return {
    name: "clean-urls",
    configureServer: (server) => void server.middlewares.use(rewrite),
    configurePreviewServer: (server) => void server.middlewares.use(rewrite),
  };
}

// Each page is prerendered by scripts/prerender.mjs. The site lives at the domain root, so asset and page URLs
// are root-relative.
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), cleanUrls()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(ENTRIES.map((n) => [n, page(`${n}.html`)])),
    },
  },
});
