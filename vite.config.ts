import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: { localsConvention: "camelCaseOnly" },
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }
          if (/node_modules\/(react|react-dom|react-router)/.test(id)) {
            return "react-vendor";
          }
          if (/node_modules\/(@ant-design\/.*|antd)/.test(id)) {
            return "antd-vendor";
          }
          return "vendor";
        },
      },
    },
  },
});
