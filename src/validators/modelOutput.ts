import { z } from 'zod';

/**
 * Zod schema for the Layout interface.
 */
export const LayoutSchemaArray = z.object({
    data: z.array(z.object({
        title: z.string(),
        description: z.string(),
    }))
})
/**
 * Zod schema for the Layout interface.
 */
export const LayoutSchema = z.object({
    title: z.string(),
    path: z.string(),
    description: z.string(),
});

/**
 * Zod schema for the Pages object within Sitemap.
 */
export const PagesSchema = z.object({
    static: z.array(LayoutSchema),
    auth: z.array(LayoutSchema).optional(),
    admin: z.array(LayoutSchema).optional(),
});

/**
 * Zod schema for the Sitemap interface.
 */
export const SitemapSchema = z.object({
    sitename: z.string(),
    pages: PagesSchema,
});

/**
 * Zod schema for the Props type.
 * All fields are optional and have specific types.
 */
const PropsSchema = z.object({
    tag: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    btnName1: z.string().optional(),
    btnName2: z.string().optional(),
    btnNameInput: z.string().optional(),
    inputNamePlaceholder: z.string().optional(),
    Version: z.string().optional(),
    image: z.string().optional(),
    btnType: z.number().optional(),
    imageOverlay: z.string().optional(),
    imageBgOverlay: z.string().optional(),
    imageOverlayVideo: z.string().optional(),
    colorText: z.enum(["white", "black"]).optional(),
}).catchall(z.any()); // Allows additional properties

/**
 * Zod schema for the WebPageConfig type.
 * It's defined as an array with objects containing 'type' and 'data'.
 */
export const WebPageConfigSchema = z.object({
    data: z.array(
        z.object({
            type: z.string(),
            data: z.any(), // Combines Props with Record<string, any>
        })
    )
});

/**
 * Zod schema for the component copy objects.
 */
export const ComponentCopySchema = z.object({
    component: z.string(),
    updated_texts: z.array(z.string()),
});

/**
 * Example usage of the schemas with JsonOutputParser.
 * (Assuming JsonOutputParser is a class you've defined elsewhere)
 */

// Define the type for Sitemap array
type SitemapArray = Sitemap[];

// Define the type for WebPageConfig array
type WebPageConfigArray = WebPageConfig[];

// Define the type for Layout array
type LayoutArray = Layout[];

// Define the type for component copy array
type ComponentCopyArray = { component: string; updated_texts: string[] }[];


/**
 * TypeScript Interfaces and Types for Reference
 */

// Define your desired data structure. Only used for typing the parser output.
interface Layout {
    title: string;
    path?: string;
    description: string;
}

export interface Sitemap {
    sitename: string;
    pages: {
        static: Layout[];
        auth: Layout[];
        admin: Layout[];
    };
}

type Props = {
    tag?: string;
    title?: string;
    description?: string;
    btnName1?: string;
    btnName2?: string;
    btnNameInput?: string;
    inputNamePlaceholder?: string;
    Version?: string;
    image?: string;
    btnType?: number;
    imageOverlay?: string;
    imageBgOverlay?: string;
    imageOverlayVideo?: string;
    colorText?: "white" | "black";
};

export type WebPageConfig = [
    {
        type: string;
        data: Props & Record<string, any>;
    }
];
