import {Router} from "express";
import {
    createLending, deleteLending, getLendingById,
    getLendings,
    getLendingsByNotOverdue,
    getLendingsByOverdue, updateLending
} from "../controller/lending.controller";

const lendingRoutes = Router();

lendingRoutes.post("/", createLending)
lendingRoutes.get("/", getLendings)
lendingRoutes.get("/overdue", getLendingsByOverdue)
lendingRoutes.get("/not-overdue", getLendingsByNotOverdue)
lendingRoutes.get("/:id", getLendingById)
lendingRoutes.put("/:id", updateLending)
lendingRoutes.delete("/:id", deleteLending)


export default lendingRoutes