import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
	experimental: {
		rustCompiler: true,
		queuedRendering: {
			enabled: true,
		},
	},
	site: "https://www.eventosmanga.es",
	prefetch: {
		prefetchAll: true,
	},
	//base: "/eventosmanga/",
	image: {
		remotePatterns: [{ protocol: "https" }],
	},
	vite: {
		optimizeDeps: {
			include: [
				"@fullcalendar/core",
				"@fullcalendar/daygrid",
				"@fullcalendar/list",
				"@fullcalendar/react",
			],
		},
		build: {
			rollupOptions: {
				external: ["/pagefind/pagefind-ui.js"],
			},
		},
	},
	integrations: [
		react(),
		mdx({ optimize: true }),
		sitemap({
			changefreq: "daily",
			priority: 0.8,
			lastmod: new Date(),
		}),
		pagefind(),
	],
});
