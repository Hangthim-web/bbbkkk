import { Router } from "express"
import userRouter from "../routes/user.route"

const routers = Router()

routers.use("/user", userRouter)

export default routers
