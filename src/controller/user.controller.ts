import {NextFunction , Request , Response} from "express";
import {UserModel} from "../models/User";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserModel.find().select("-password")
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserModel.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (err) {
        next(err)
    }
}
