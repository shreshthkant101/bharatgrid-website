import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/bodoni-moda/opsz.css";
import "@fontsource-variable/bodoni-moda/opsz-italic.css";
import "@fontsource-variable/montserrat";
import "../index.css";
import Academy from "./Academy";

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <Academy />
  </StrictMode>,
);
