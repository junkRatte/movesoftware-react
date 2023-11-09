import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import includePaths from "rollup-plugin-includepaths";

export default defineConfig({
  base: "/movesoftware-react/",
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [includePaths({ paths: ["./"] })],
    },
  },
});
