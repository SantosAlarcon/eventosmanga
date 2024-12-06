import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from "@astrojs/react"
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://santosalarcon.github.io',
    prefetch: {
        prefetchAll: true
    },
    base: "/eventosmanga/",
    image: {
        remotePatterns: [{protocol: "https"}]
    },
    integrations: [react(), mdx({optimize: true}), sitemap()],
});
