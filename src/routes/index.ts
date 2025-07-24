import {Router} from "express";
import authRouter from "./auth.routes";
import readerRoutes from "./reader.routes";
import bookRoutes from "./book.routes";
import lendingRoutes from "./Lending.routes";


const rootRoutes = Router();
rootRoutes.use("/auth", authRouter)// add auth routes here
rootRoutes.use("/reader", readerRoutes)
rootRoutes.use("/book", bookRoutes)
rootRoutes.use("/lending", lendingRoutes)


export default rootRoutes;