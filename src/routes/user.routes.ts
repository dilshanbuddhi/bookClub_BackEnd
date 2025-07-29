import {Router} from "express";
import {createUser, deleteUser, getAllUsers, updateUser} from "../controller/user.controller";

const userRoutes = Router();

userRoutes.post("/" , createUser)
userRoutes.get("/" , getAllUsers)
userRoutes.put("/:id" , updateUser)
userRoutes.delete("/:id" , deleteUser)

export default userRoutes