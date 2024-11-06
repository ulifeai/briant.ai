// src/validators.ts
import { z } from 'zod';

/**
 * Project Validators
 */
export const createProjectSchema = z.object({
  user_id: z.string(),

  name: z.string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(30, { message: "Name must be at most 30 characters long" })
    .or(z.literal(''))
    .optional(),

  description: z.string(),
  category: z.string().default("public"),

  customizations: z.record(z.any()).optional(),
});

export const updateProjectSchema = z.object({
  name: z.string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(30, { message: "Name must be at most 30 characters long" })
    .optional(),

  description: z.string().optional(),
  category: z.string().default("public"),


  customizations: z.record(z.any()).optional(),
});

/**
 * Page Validators
 */
export const createPageSchema = z.object({
  project_id: z.string(),
  category: z.string().default("public"),
  name: z.string()
    .min(1, { message: "Name must be at least 1 character long" })
    .max(100, { message: "Name must be at most 100 characters long" }),
});


export const createBulkPageSchema = z.array(z.object({
  project_id: z.string(),
  path: z.string(),
  description: z.string(),
  category: z.string().default("public"),
  name: z.string()
    .min(1, { message: "Name must be at least 1 character long" })
    .max(100, { message: "Name must be at most 100 characters long" }),
}))

export const updatePageSchema = z.object({
  name: z.string()
    .min(1, { message: "Name must be at least 1 character long" })
    .max(100, { message: "Name must be at most 100 characters long" })
    .optional(),
});

/**
 * Block Validators
 */
export const createBlockSchema = z.object({
  page_id: z.string(),

  content: z.record(z.any()),
});

export const getOrCreateBlockSchema = z.object({
  page_id: z.string(),
  app_context: z.string(),
  page_description: z.string(),
  // content: z.record(z.any()),
});

export const updateBlockSchema = z.object({
  content: z.record(z.any()).optional(),
});
