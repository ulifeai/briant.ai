// src/models/Block.ts
import mongoose, { Document, Schema, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IBlock extends Document {
    page_id: Types.ObjectId; // References Page's _id
    id: string; // Auto-generated UUID
    content: Record<string, any>; // JSON field
    order: number,
    createdAt: Date;
    updatedAt: Date;
}

const blockSchema: Schema<IBlock> = new Schema(
    {
        page_id: {
            type: Schema.Types.ObjectId,
            ref: 'Page',
            required: true,
            index: true,
        },
        id: {
            type: String,
            default: uuidv4, // Auto-generate UUID
            unique: true, // Ensure 'id' is unique
            index: true,
        },
        order: {
            type: Number,
            default: 0, // Assign a default value
        },
        content: {
            type: Schema.Types.Mixed, // Allows any JSON structure
            default: {},
        },
    },
    {
        timestamps: true,
    }
);

// Indexes to optimize queries
blockSchema.index({ page_id: 1, id: 1 }, { unique: true }); // Prevent duplicate blocks within the same page

// Handle duplicate key errors gracefully
blockSchema.post('save', function (error: any, doc: IBlock, next: Function) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        next(new Error('Duplicate block id within page.'));
    } else {
        next(error);
    }
});

const Block = mongoose.models.Block || mongoose.model<IBlock>('Block', blockSchema);

export default Block;
