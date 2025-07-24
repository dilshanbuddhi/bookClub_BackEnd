import { Request, Response, NextFunction} from "express";
import {ReaderModel} from "../models/Reader";

export const createReader = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reader = new ReaderModel(req.body)
        await reader.save()
        res.status(201).json(reader)
    } catch (err) {
        next(err)
    }
}

export const getReaders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const readers = await ReaderModel.find()
        res.status(200).json(readers)
    } catch (err) {
        next(err)
    }
}

export const deleteReader = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reader = await ReaderModel.findByIdAndDelete(req.params.id)
        res.status(200).json(reader)
    } catch (err) {
        next(err)
    }
}

export const updateReader = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reader = await ReaderModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(reader)
    } catch (err) {
        next(err)
    }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reader = await ReaderModel.findById(req.params.id)
        res.status(200).json(reader)
    } catch (err) {
        next(err)
    }
}