import { Router } from "express"
import * as userController from "../controllers/user.controllers"
const router = Router()

router.post("/", userController.createUser)
router.get("/", userController.getUser)
router.delete("/:id", userController.removeUser)
router.patch("/:id", userController.updateUser)
router.get("/:id", userController.getById)

export default router
