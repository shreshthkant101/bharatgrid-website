import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "./index.css";
import App from "./App";

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <App />
  </StrictMode>,
);
