/* eslint-disable @typescript-eslint/no-unused-vars */
import signupRoute from "./signup.route"
import { Router } from "express"
const router = Router()

router.use("/signup", signupRoute)

export default router
