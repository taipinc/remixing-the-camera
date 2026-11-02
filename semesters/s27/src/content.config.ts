import { defineCollection, z } from "astro:content";

// Define the workshops collection
const workshops = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

// Define assignments collection (read manually via fs/promises in index.astro)
const assignments = defineCollection({
  type: "content",
  schema: z.object({}).optional(),
});

// Define weeks collection (read manually via fs/promises in index.astro)
const weeks = defineCollection({
  type: "content",
  schema: z.object({
    order: z.number(),
    week: z.union([z.number(), z.string()]),
    date: z.string(),
    theme: z.string().optional(),
    status: z.string().optional(),
  }),
});

// Export all collections
export const collections = {
  workshops,
  assignments,
  weeks,
};
