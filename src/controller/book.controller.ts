import {Request , Response, NextFunction} from "express";
import {BookModel} from "../models/Book";

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await BookModel.find()
        res.status(200).json(books)
    } catch (err) {
        next(err)
    }
}

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book = new BookModel(req.body)
        await book.save()
        res.status(201).json(book)
    } catch (err) {
        next(err)
    }
}

export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book = await BookModel.findById(req.params.id)
        res.status(200).json(book)
    } catch (err) {
        next(err)
    }
}

export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(book)
    } catch (err) {
        next(err)
    }
}

export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book = await BookModel.findByIdAndDelete(req.params.id)
        res.status(200).json(book)
    } catch (err) {
        next(err)
    }
}