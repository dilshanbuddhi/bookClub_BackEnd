import mongoose from "mongoose";

const lendingSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    lendingDate: {
        type: Date,
        required: true,
    },
    returnDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "returned"],
        default: "pending",
    },
})

const LendingModel = mongoose.model("Lending", lendingSchema)

export { LendingModel }

// bookID userId lendingDate returnDate status