import {NextFunction , Request, Response} from "express";
import {LendingModel} from "../models/Lending";

export const createLending = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lending = new LendingModel(req.body)
        await lending.save()
        res.status(201).json(lending)
    } catch (err) {
        next(err)
    }
}

export const getLendings = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lendings = await LendingModel.find()
        res.status(200).json(lendings)
    } catch (err) {
        next(err)
    }
}

export const getLendingById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lending = await LendingModel.findById(req.params.id)
        res.status(200).json(lending)
    } catch (err) {
        next(err)
    }
}

export const updateLending = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lending = await LendingModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(lending)
    } catch (err) {
        next(err)
    }
}

export const deleteLending = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lending = await LendingModel.findByIdAndDelete(req.params.id)
        res.status(200).json(lending)
    } catch (err) {
        next(err)
    }
}

export const getLendingsByOverdue = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lendings = await LendingModel.find({overdue: true})
        res.status(200).json(lendings)
    } catch (err) {
        next(err)
    }
}

export const getLendingsByNotOverdue = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lendings = await LendingModel.find({overdue: false})
        res.status(200).json(lendings)
    } catch (err) {
        next(err)
    }
}

export const markAsReturned = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lending = await LendingModel.findByIdAndUpdate(
            req.params.id,
            { status: 'returned' }, // ✅ fix here
            { new: true }
        );
        res.status(200).json(lending);
    } catch (err) {
        next(err);
    }
};
