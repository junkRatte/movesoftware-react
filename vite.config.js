import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/movesoftware-react/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["/movesoftware-react/assets/index-ea2f8442.js"],
    },
  },
});
