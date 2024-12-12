// app/api/projects/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongoose";
import { getProjects, createProject } from "@/controllers/project";
import { createProjectSchema } from "@/validators/entities"; // Ensure this is a Zod schema
import { IProject } from "@/models/Project";
import { getAuth } from "@clerk/nextjs/server";
import { generateSitemap } from "@/lib/ai/invoke";
import { createPage } from "@/controllers/page";
import { Category } from "@/models/Page";
import { createResponse, ResponseData } from "@/lib/utils/response"; // Assuming these utilities exist
import { validateSchema } from "@/lib/utils/validate"; // Assuming this utility exists
import { defaultCustomization } from "@/lib/utils/ui";

/**
 * Handle GET request to retrieve all projects for a user.
 */
export async function GET(req: NextRequest) {
  await connectDB();

  const { userId } = getAuth(req);

  if (!userId) {
    return createResponse(
      { success: false, error: "user_id is required." },
      400
    );
  }

  try {
    const projects = await getProjects(userId);
    return createResponse({ success: true, data: projects }, 200);
  } catch (error: any) {
    console.error("GET /api/projects Error:", error);
    return createResponse(
      { success: false, error: "Internal Server Error." },
      500
    );
  }
}

/**
 * Handle POST request to create a new project.
 */
export async function POST(req: NextRequest) {
  await connectDB();

  const { userId } = getAuth(req);

  if (!userId) {
    return createResponse(
        { success: false, error: "user_id is required." },
        400
    );
  }

  let body: Record<string, any>;

  try {
    body = await req.json();
  } catch (error: any) {
    console.error("POST /api/projects - Invalid JSON:", error);
    return createResponse(
      { success: false, error: "Invalid JSON payload." },
      400
    );
  }

  // Merge user_id into the body
  const dataToValidate = { ...body, user_id: userId };

  // Validate using the utility function
  const validation = validateSchema(createProjectSchema, dataToValidate);

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

  if (!validatedData)
    return createResponse(
      {
        success: false,
        error: "Validation Failed.",
        message: validation.errors,
      },
      400
    );
  try {
    if (!validatedData.customizations)
      validatedData.customizations = defaultCustomization;

    const newProject = await createProject({
      ...validatedData,
      name: "",
      pexel_image_keyword: "",
    });

    return createResponse({ success: true, data: newProject }, 201);
  } catch (error: any) {
    console.error("POST /api/projects Error:", error);
    return createResponse(
      { success: false, error: "Internal Server Error." },
      500
    );
  }
}
