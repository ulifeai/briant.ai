// src/models/Page.ts
import mongoose, { Document, Schema, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export enum Category {
    AUTH = "auth",
    authenticated = "authenticated",
    public = "public"
}


export interface IPage extends Document {
    project_id: Types.ObjectId;
    id: string;
    name: string;
    path: string;
    description: string;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
}

const pageSchema: Schema<IPage> = new Schema(
    {
        project_id: {
            type: Schema.Types.ObjectId,
            ref: 'Project',
            required: true,
            index: true,
        },
        id: {
            type: String,
            default: uuidv4, // Auto-generate UUID
            unique: true, // Ensure 'id' is unique
            index: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        path: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        description: {
            type: String,
            default: ""
        },
        category: {
            type: String,
            enum: Object.values(Category),
            required: true,
            default: Category.public
        },
    },
    {
        timestamps: true,
    }
);

// Indexes to optimize queries
pageSchema.index({ project_id: 1, id: 1 }, { unique: true }); // Prevent duplicate pages within the same project

// Handle duplicate key errors gracefully
pageSchema.post('save', function (error: any, doc: IPage, next: Function) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        next(new Error('Duplicate page id within project.'));
    } else {
        next(error);
    }
});

const Page = mongoose.models.Page || mongoose.model<IPage>('Page', pageSchema);

export default Page;
