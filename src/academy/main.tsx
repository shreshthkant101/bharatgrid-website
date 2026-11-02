import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "@fontsource-variable/montserrat";
import "../index.css";
// header menu, scroll reveals and the rest of the site's shared behaviour
import "../site/client";
import Academy from "./Academy";

// /academy keeps React in the browser: the Apply buttons and deadline switch to their closed state at the deadline.
hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <Academy />
  </StrictMode>,
);
