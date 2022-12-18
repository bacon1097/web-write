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
            src: "web-write-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "web-write-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
