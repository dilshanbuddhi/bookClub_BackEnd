import mongoose from "mongoose";

const lendingSchema = new mongoose.Schema({
    bookID: {type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: "Reader", required: true},
    lendingDate: {type: Date, required: true},
    returnDate: {type: Date, required: true},
    status: {type: String, enum: ['active', 'returned', 'overdue'], required: true},
    bookName: {type: String, required: true},
    userName: {type: String, required: true},
    userEmail: {type: String, required: true}
})

const LendingModel = mongoose.model("Lending", lendingSchema)

export { LendingModel }

// bookID userId lendingDate returnDate status