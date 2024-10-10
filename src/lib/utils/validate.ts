// src/utils/validate.ts
import { ZodSchema } from 'zod';

/**
 * Validates data against a Zod schema.
 * @param schema - The Zod schema to validate against.
 * @param data - The data to validate.
 * @returns The validation result.
 */
export const validateSchema = <T>(
    schema: ZodSchema<T>,
    data: unknown
): { success: boolean; data?: T; errors?: string[] } => {
    const result = schema.safeParse(data);
    if (result.success) {
        return { success: true, data: result.data };
    } else {
        const errors = result.error.errors.map((err) => err.message);
        return { success: false, errors };
    }
};
