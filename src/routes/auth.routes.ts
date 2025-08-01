import { Router } from "express"
import { signup, getAllUsers, login, refreshToken, logout } from "../controller/auth.controller"
import { authenticateToken } from "../middlewares/Authonicate"

const authRouter = Router()

authRouter.post("/signup", signup) // POST /api/auth/signup
authRouter.get("/users", authenticateToken, getAllUsers) // GET /api/auth/users
authRouter.post("/login", login)
authRouter.post("/refresh-token", refreshToken)
authRouter.post("/logout", logout)

export default authRouter
