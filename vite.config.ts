import { defineConfig, type Connect, type Plugin } from "vite";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const page = (name: string) => fileURLToPath(new URL(name, import.meta.url));

/** /academy is academy.html: Cloudflare and GitHub Pages serve it that way;
 *  this makes the dev and preview servers do the same. */
function academyRoute(): Plugin {
  const rewrite: Connect.NextHandleFunction = (req, _res, next) => {
    if (req.url && /^\/academy\/?(\?.*)?$/.test(req.url)) req.url = req.url.replace(/^\/academy\/?/, "/academy.html");
    next();
  };
  return {
    name: "academy-route",
    configureServer: (server) => void server.middlewares.use(rewrite),
    configurePreviewServer: (server) => void server.middlewares.use(rewrite),
  };
}

// Relative base: the same build works on the github.io project path and on the custom domain.
// Two pages, each prerendered (scripts/prerender.mjs): the home page and /academy.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), academyRoute()],
  build: {
    rollupOptions: {
      input: { index: page("index.html"), academy: page("academy.html") },
    },
  },
});
