import {Router} from "express";
import {createBook, deleteBook, getBookById, getBooks, updateBook} from "../controller/book.controller";
import {deleteReader} from "../controller/reader.controller";

const bookRoutes = Router();

bookRoutes.post("/", createBook)
bookRoutes.get("/", getBooks)
bookRoutes.get("/:id", getBookById)
bookRoutes.put("/:id", updateBook)
bookRoutes.delete("/:id", deleteBook)


export default bookRoutes