import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://www.eventosmanga.es",
    prefetch: {
        prefetchAll: true,
    },
    //base: "/eventosmanga/",
    image: {
        remotePatterns: [{ protocol: "https" }],
    },
    integrations: [react(), mdx({ optimize: true }), sitemap({
        changefreq: "daily",
        priority: 0.8,
        lastmod: new Date(),
    })],
});
