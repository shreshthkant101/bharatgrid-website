// Renders each page to static HTML after the client build, so content is in the HTML for crawlers and first paint.
import { readFile, writeFile, rm } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const { pages } = await import(new URL("dist-ssr/entry-server.js", root).href);
for (const [name, render] of Object.entries(pages)) {
  const file = new URL(`dist/${name}`, root);
  const html = await readFile(file, "utf8");
  if (!html.includes("<!--app-->")) throw new Error(`${name} is missing the <!--app--> marker`);
  await writeFile(file, html.replace("<!--app-->", render()));
  console.log(`prerendered dist/${name}`);
}
await rm(new URL("dist-ssr", root), { recursive: true, force: true });
