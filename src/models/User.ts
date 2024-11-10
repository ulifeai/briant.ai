// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interface representing a User document in MongoDB
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema: Schema<IUser> = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, // Unique index to prevent duplicate usernames
            trim: true,
            minlength: 3,
            maxlength: 30,
        },
        email: {
            type: String,
            required: true,
            unique: true, // Unique index to prevent duplicate emails
            trim: true,
            lowercase: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        // Add other fields as necessary
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

// Create indexes to optimize queries
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });

// Handle duplicate key errors gracefully
userSchema.post('save', function (error: any, doc: IUser, next: Function) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        const field = Object.keys(error.keyValue)[0];
        next(new Error(`Duplicate value for field: ${field}`));
    } else {
        next(error);
    }
});

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
