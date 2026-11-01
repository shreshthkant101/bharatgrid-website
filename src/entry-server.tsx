import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import Academy from "./academy/Academy";

/** Each page, as static HTML for scripts/prerender.mjs. */
export const pages = {
  "index.html": () =>
    renderToString(
      <StrictMode>
        <App />
      </StrictMode>,
    ),
  "academy.html": () =>
    renderToString(
      <StrictMode>
        <Academy />
      </StrictMode>,
    ),
};
