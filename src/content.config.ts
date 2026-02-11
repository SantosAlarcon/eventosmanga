import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const event = defineCollection({
	loader: glob({ base: "./src/content/event", pattern: "**/*.mdx" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date(),
		startTime: z.string(),
		endTime: z.string(),
		heroImage: z.string(),
		location: z.string(),
		province: z.string(),
		url: z.string(),
		price: z.number(),
		twitterProfile: z.string().optional(),
		tagColor: z.string().optional(),
	}),
});

export const collections = { event };
