import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./db/mongo";
import rootRoutes from "./routes";
import {errorHandler} from "./middlewares/errorHandller";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

const corsOptions = {
/*
    origin: process.env.CORS_ORIGIN,
*/
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}
app.use(cors(corsOptions));
// ✅ Put this BEFORE your routes
app.use(express.json());
app.use(cookieParser());

// ✅ Now register routes after body parsing is enabled
app.use("/api", rootRoutes);
app.use(errorHandler);

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world");
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
