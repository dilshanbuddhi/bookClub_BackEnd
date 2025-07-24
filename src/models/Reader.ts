import mongoose from "mongoose";

const readerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        trim: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
})

const ReaderModel = mongoose.model("Reader", readerSchema)

export { ReaderModel }