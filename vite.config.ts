import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base: the same build works on the github.io project path and on the custom domain.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
