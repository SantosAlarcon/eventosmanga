import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const event = defineCollection({
    type: "content",
    // Datos de un evento de manga y anime
    schema: z.object({
        title: z.string(),
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        heroImage: z.string().optional(),
        eventLocation: z.string(),
        eventProvince: z.string(),
        eventDate: z.coerce.date(),
        eventTime: z.string(),
        eventUrl: z.string(),
        eventPrice: z.string(),
    })
})

export const collections = { blog, event };
