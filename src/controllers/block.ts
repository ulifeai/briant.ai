import Block, { IBlock } from "@/models/Block";
import Page from "@/models/Page";
import logger from "@/lib/utils/logger";
import { generateLayout, generatePageCode } from "@/lib/ai/invoke";
import Project from "@/models/Project";

/**
 * Retrieve all blocks for a specific page.
 * @param pageId - The UUID of the page.
 * @returns An array of IBlock objects.
 */
export async function getBlocks(pageId: string) {
  try {
    const page = await Page.findOne({ _id: pageId }).exec();
    if (!page) {
      throw new Error("Page not found");
    }

    const blocks = await Block.find({ page_id: page._id })
      .sort({ order: 1 })
      .lean()
      .exec();
    return blocks;
  } catch (error) {
    logger.error("Error loading blocks: %o", error);
    throw new Error("Failed to load blocks");
  }
}

/**
 * Retrieve all blocks for a specific page.
 * @param pageId - The UUID of the page.
 * @returns An array of IBlock objects.
 */
export async function getOrCreateBlocks(validatedData: {
  page_id: string;
  app_context: string;
  page_description: string;
}) {
  try {
    const page = await Page.findOne({ _id: validatedData.page_id }).exec();
    if (!page) {
      throw new Error("Page not found");
    }
    const blocks = await Block.find({ page_id: page._id })
      .sort({ createdAt: 1 })
      .lean()
      .exec();

    if (blocks.length == 0) {
      const project = await Project.findOne({ _id: page.project_id }).exec();
      let data = await generateLayout(
        validatedData.app_context.toString(),
        validatedData.page_description.toString()
      );
      // console.log(data, "==============================================================")
      const pageCode = await generatePageCode(
        JSON.stringify(data.data),
        validatedData.page_description.toString()
      );

      let endBlocks = [];
      let pexelNb: number = 0;
      for (let index = 0; index < pageCode.data.length; index++) {
        const element = pageCode.data[index];

        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${
            project.pexel_image_keyword ?? "computer "
          } app&per_page=30`,
          {
            headers: {
              Authorization: process.env.PEXELS_API_KEY ?? "",
            },
          }
        );

        const photos = await response.json();

        if (element.type === "header" && element.data.images !== undefined) {
          element.data.images.map((image: any, index: number) => {
            if (
              image.src !== undefined &&
              photos.photos[pexelNb++].src !== undefined
            ) {
              image.src = photos.photos[pexelNb++].src.original;
            }
          });
        }
        if (element.type === "feature") {
          if (element.data.image && "src" in element.data.image) {
            element.data.image.src = photos.photos[index].src.original;
          }
          if (element.data.image && "image" in element.data.image) {
            element.data.image.image = photos.photos[index].src.original;
            element.data.image.src = photos.photos[index].src.original;
          }
          if (element.data && element.data.feature_items !== undefined) {
            element.data.feature_items.map(
              (feature_item: any, index: number) => {
                if ("image" in feature_item) {
                  feature_item.image = photos.photos[index].src.original;
                }
              }
            );
          }
        }
        if (element.type === "testimonial") {
          if ("testimonials" in element.data) {
            element.data.testimonials.map(
              (testimonials: any, index: number) => {
                if (
                  ("image" in testimonials || "avatar" in testimonials) &&
                  testimonials.image &&
                  "src" in testimonials.image
                ) {
                  testimonials.image.src = photos.photos[index].src.original;
                  testimonials.avatar.src = photos.photos[index].src.original;
                }
              }
            );
          }
        }

        const newBlock = await createBlock({
          page_id: validatedData.page_id,
          content: element,
          order: index,
        });
        endBlocks.push(newBlock);
      }
      return endBlocks;
    } else {
      //    return blocks;
    }
    return blocks;
  } catch (error) {
    logger.error("Error loading blocks: %o", error);
    throw new Error("Failed to load blocks");
  }
}

/**
 * Retrieve a single block for a specific page.
 * @param pageId - The UUID of the page.
 * @returns An array of IBlock objects.
 */
export async function getBlockById(blockId: string) {
  try {
    const blocks = await Block.findOne({ _id: blockId }).lean().exec();
    return blocks;
  } catch (error) {
    logger.error("Error loading blocks: %o", error);
    throw new Error("Failed to load blocks");
  }
}

/**
 * Create a new block within a page.
 * @param data - The block data.
 * @returns The newly created IBlock object.
 */
export async function createBlock(data: {
  page_id: string; // UUID of the page
  content: Record<string, any>;
  order: number;
}) {
  try {
    const { page_id, content, order } = data;
    console.log("page", page_id);

    // Find the page by UUID
    const page = await Page.findOne({ _id: page_id }).exec();
    console.log("page", page);
    if (!page) {
      throw new Error("Page not found");
    }

    // if (content?.data?.image?.image && !content?.data?.image?.image?.startWith("/")) {
    //     content?.data.image.image = `/${content?.data.image.image}`
    // }

    // if (content?.data?.images) {
    //     content?.data.images = content?.data?.images?.map((image: any) => {
    //         if (image?.image?.startWith("/"))
    //             image.image = "/" + image.image
    //         return image
    //     })
    //     // data.image.image=`/${data.image.image}`
    // }

    const newBlock: IBlock = new Block({
      page_id: page._id,
      content,
      order,
    });

    const savedBlock = await newBlock.save();
    logger.info("Block created successfully: %o", savedBlock);
    return savedBlock;
  } catch (error: any) {
    logger.error("Error creating block: %o", error);
    throw new Error(error.message || "Failed to create block");
  }
}

/**
 * Update an existing block by its ID.
 * @param blockId - The UUID of the block.
 * @param data - The updated block data.
 * @returns The updated IBlock object or null if not found.
 */
export async function updateBlock(
  blockId: string,
  data: {
    content?: Record<string, any>;
    // Add other fields if necessary
  }
) {
  try {
    const updatedBlock = await Block.findOneAndUpdate(
      { _id: blockId },
      { $set: data },
      { new: true, runValidators: true }
    ).exec();

    if (!updatedBlock) {
      throw new Error("Block not found");
    }

    logger.info("Block updated successfully: %o", updatedBlock);
    return updatedBlock;
  } catch (error: any) {
    logger.error("Error updating block: %o", error);
    throw new Error(error.message || "Failed to update block");
  }
}

/**
 * Delete a block by its ID.
 * @param blockId - The UUID of the block.
 * @returns An object containing the deletedCount.
 */
export async function deleteBlock(blockId: string) {
  try {
    const result = await Block.deleteOne({ _id: blockId }).exec();
    if (result.deletedCount === 0) {
      throw new Error("Block not found");
    }
    logger.info("Block deleted successfully: %s", blockId);
    return result;
  } catch (error: any) {
    logger.error("Error deleting block: %o", error);
    throw new Error(error.message || "Failed to delete block");
  }
}

export async function insertBlockWithOrder(data: {
  page_id: string;
  content: Record<string, any>;
  order: number;
}) {
  try {
    const { page_id, content, order } = data;

    const page = await Page.findOne({ _id: page_id }).exec();
    if (!page) {
      throw new Error("Page not found");
    }

    await Block.updateMany(
      { page_id: page._id, order: { $gte: order } },
      { $inc: { order: 1 } }
    ).exec();

    const newBlock = new Block({
      page_id: page._id,
      content,
      order,
    });

    await newBlock.save();

    const updatedBlocks = await Block.find({ page_id: page._id })
      .sort({ order: 1 })
      .lean()
      .exec();

    logger.info("Block inserted successfully: %o", newBlock);
    return updatedBlocks;
  } catch (error: any) {
    logger.error("Error inserting block with order: %o", error);
    throw new Error(error.message || "Failed to insert block");
  }
}

export async function reorderBlocks(blocks: any) {
  try {
   
    // Valider les données
    if (!Array.isArray(blocks)) {
      throw new Error("Invalid data format");
    }

    // Mettre à jour les ordres dans la base de données
    const bulkOps = blocks.map((block: any) => ({
      updateOne: {
        filter: { id: block.id },
        update: { $set: { order: block.order } },
      },
    }));

    await Block.bulkWrite(bulkOps);

    logger.info("Blocks reordered successfully.");
  } catch (error: any) {
    logger.error("Error reordering blocks: %o", error);
    throw new Error(error.message || "Failed to reorder blocks");
  }
}
