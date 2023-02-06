// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        updatedDate: z.date().optional(),
    }),
});

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        liveLink: z.string(),
        githubLink: z.string(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'blog': blogCollection,
    'projects': projectsCollection, 
};