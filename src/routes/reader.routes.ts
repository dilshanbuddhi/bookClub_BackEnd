import {Router} from "express";
import {createReader, deleteReader, getReaders, updateReader} from "../controller/reader.controller";

const readerRoutes = Router();

readerRoutes.post("/" , createReader)
readerRoutes.get("/" , getReaders)
readerRoutes.delete("/:id" , deleteReader)
readerRoutes.put("/:id" , updateReader)
readerRoutes.get("/getById/:id" , updateReader)

export default readerRoutes