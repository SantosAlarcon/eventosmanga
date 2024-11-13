import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
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
        startTime: z.string(),
        endTime: z.string(),
        heroImage: z.string(),
        location: z.string(),
        province: z.string(),
        url: z.string(),
        price: z.number(),
        twitterProfile: z.string().optional(),
    }),
});

export const collections = { blog, event };
