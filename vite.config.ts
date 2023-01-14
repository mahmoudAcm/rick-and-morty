import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@__types__": path.resolve(__dirname, "src/types.ts"),
    },
  },
  plugins: [react()],
});
