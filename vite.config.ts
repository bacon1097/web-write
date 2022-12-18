import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Web Write",
        short_name: "Web Write",
        description: "A simple, offline-first, markdown editor.",
        theme_color: "#242424",
        icons: [
          {
            src: "vite-512x512.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
          {
            src: "vite-192x192.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
