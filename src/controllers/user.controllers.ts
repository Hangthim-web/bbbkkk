import * as userService from "../services/user.services"
import { Request, Response, NextFunction } from "express"

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newUser = await userService.createUser(req.body)
        res.status(200).send(newUser)
    } catch (err) {
        console.error(err)
    }
}
export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const getUsers = await userService.getUser(req.body)
        res.status(200).send(getUsers)
    } catch (err) {
        console.error(err)
    }
}
export const removeUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const deletedUser = await userService.removeUser(Number(req.params.id))
        res.status(200).send("user has been deleted")
    } catch (err) {
        console.error(err)
    }
}
export const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const updatedUser = await userService.updateUser(
            Number(req.params.id),
            req.body
        )
        res.status(200).send(updatedUser)
    } catch (err) {
        console.error(err)
    }
}
export const getById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const getUserById = await userService.getById(Number(req.params.id))
        res.status(200).send(getUserById)
    } catch (err) {
        console.error(err)
    }
}
