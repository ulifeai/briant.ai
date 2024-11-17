// src/models/Project.ts
import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { IPage } from './Page';

const defaultCustummizations = {};

export interface IProject extends Document {
    user_id: string; // From Clerk
    id: string; // Auto-generated UUID
    name: string;
    pexel_image_keyword: string;
    description: string;
    customizations: Record<string, any>; // JSON field
    createdAt: Date;
    updatedAt: Date;
    pages: IPage[]
}

const projectSchema: Schema<IProject> = new Schema(
    {
        user_id: {
            type: String,
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
        pexel_image_keyword: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        customizations: {
            type: Schema.Types.Mixed, // Allows any JSON structure
            default: defaultCustummizations,
        },

        pages: [{ type: Schema.Types.ObjectId, ref: 'Page' }]

    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

// Indexes to optimize queries
projectSchema.index({ user_id: 1, id: 1 }, { unique: true }); // Prevent duplicate projects for the same user

// Handle duplicate key errors gracefully
projectSchema.post('save', function (error: any, doc: IProject, next: Function) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        next(new Error('Duplicate project id.'));
    } else {
        next(error);
    }
});

const Project = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);

export default Project;
