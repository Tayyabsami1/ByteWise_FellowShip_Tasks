import Mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    firstName: {
        type: "String",
        required: true,
    },
    lastName: {
        type: "String",
        required: true,
    },
    email: {
        type: "String",
        required: true,
        unique: true,
    },
    gender: {
        type: "String",
        required: true,
    }
}, { timestamps: true })

export const User=Mongoose.model("User",UserSchema);