// Renders the page to static HTML after the client build, so content is in the HTML for crawlers and first paint.
import { readFile, writeFile, rm } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const { render } = await import(new URL("dist-ssr/entry-server.js", root).href);
const file = new URL("dist/index.html", root);
const html = await readFile(file, "utf8");
if (!html.includes("<!--app-->")) throw new Error("index.html is missing the <!--app--> marker");
await writeFile(file, html.replace("<!--app-->", render()));
await rm(new URL("dist-ssr", root), { recursive: true, force: true });
console.log("prerendered dist/index.html");
