import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    proxy: {
      "/portfolio-api": {
        target: "http://127.0.0.1:3200",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/portfolio-api/, ""),
      },
    },
  },
});
