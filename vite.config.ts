import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

export default defineConfig({
  base: "/BLR/", // 👈 CRITICAL LINE
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      plugins: [
        {
          name: "add-nojekyll",
          writeBundle() {
            const filePath = path.resolve(__dirname, "dist/.nojekyll");
            fs.writeFileSync(filePath, "");
          },
        },
      ],
    },
  },
});
