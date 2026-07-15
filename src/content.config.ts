import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const conferences = defineCollection({
    loader: glob({ base: './src/content/conferences', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        event: z.string(),
        location: z.string(),
        date: z.string(),
        type: z.string(),
    }),
});

export const collections = { conferences };