import { defineConfig } from "vite";
import { Extensions } from "./vite.extensions";

const extensions = Extensions;

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions,
      jsx: "automatic",
      loader: { ".js": "jsx" },
    },
  },
});
