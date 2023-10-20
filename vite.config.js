import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/movesoftware-react/",
  plugins: [react()],
  define: {
    "import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY": `"${process.env.VITE_REACT_APP_FIREBASE_API_KEY}"`,
    "import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN": `"${process.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN}"`,
    "import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID": `"${process.env.VITE_REACT_APP_FIREBASE_PROJECT_ID}"`,
    "import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET": `"${process.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET}"`,
    "import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID": `"${process.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID}"`,
    "import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID": `"${process.env.VITE_REACT_APP_FIREBASE_APP_ID}"`,
  },
});
