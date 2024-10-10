import { NextResponse } from "next/server";

// src/utils/response.ts
export type ResponseData = {
    success: boolean;
    data?: any;
    error?: string;
    message?: string | string[];
};

/**
 * Generates a standardized JSON response.
 * @param data - The response data.
 * @param status - HTTP status code.
 * @returns NextResponse JSON.
 */
export const createResponse = (data: ResponseData, status: number) => {
    return NextResponse.json(data, { status });
};
