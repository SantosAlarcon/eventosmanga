/// <reference path="../.astro/types.d.ts" />

declare module "/pagefind/pagefind-ui.js" {
	interface PagefindUIOptions {
		element: string;
		showSubResults?: boolean;
		resetStyles?: boolean;
		excerptLength?: number;
	}

	class PagefindUI {
		constructor(options: PagefindUIOptions);
	}

	export { PagefindUI };
}
