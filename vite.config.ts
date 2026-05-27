import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/Achim-Mertens-IT-Solutions/',  // Wichtig!
  plugins: [
    tsconfigPaths(),
    react(),
    tailwindcss(),
  ],
  server: { host: "::", port: 8080, strictPort: true },
  preview: { host: "::", port: 8080, strictPort: true },
});