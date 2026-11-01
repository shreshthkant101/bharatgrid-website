import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/playfair-display";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "./index.css";
import App from "./App";

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <App />
  </StrictMode>,
);
