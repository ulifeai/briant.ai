// app/api/blocks/route.ts
import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { insertBlockWithOrder } from "@/controllers/block";
import { createBlockSchema } from "@/validators/entities";
import { createResponse } from "@/lib/utils/response";
import { validateSchema } from "@/lib/utils/validate";

export async function POST(req: NextRequest) {
  await connectDB();

  let body: unknown;

  try {
    body = await req.json();
  } catch (error: any) {
    console.error("POST /api/blocks - Invalid JSON:", error);
    return createResponse(
      { success: false, error: "Invalid JSON payload." },
      400
    );
  }

  // Validate using the utility function
  const validation = validateSchema(createBlockSchema, body);

  if (!validation.success) {
    return createResponse(
      {
        success: false,
        error: "Validation Failed.",
        message: validation.errors,
      },
      400
    );
  }

  const validatedData = validation.data;

  if (!validatedData) {
    return createResponse(
      {
        success: false,
        error: "Validation Failed.",
        message: validation.errors,
      },
      400
    );
  }

  try {
    const newBlock = await insertBlockWithOrder(validatedData);
    return createResponse({ success: true, data: newBlock }, 201);
  } catch (error: any) {
    console.error("POST /api/blocks Error:", error);
    return createResponse(
      { success: false, error: "Internal Server Error." },
      500
    );
  }
}
