import {Router} from "express";
import {sendEmail} from "../controller/gmail.controller";

const emailRoutes = Router();

emailRoutes.post("/" , sendEmail)

export default emailRoutes