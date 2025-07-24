import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        trim: true,
    },
    publicationYear: {
        type: Number,
        required: [true, "Publication year is required"],
        trim: true,
    },
    totalCopies: {
        type: Number,
        required: [true, "Total copies is required"],
        trim: true,
    },
    availableCopies: {
        type: Number,
        required: [true, "Available copies is required"],
        trim: true,
    },
    status: {
        type: String,
        enum: ["available", "unavailable"],
        default: "available",
    }
});

const BookModel = mongoose.model("Book", bookSchema);

export { BookModel };

//name title author publicationYear totalCopies availableCopies status