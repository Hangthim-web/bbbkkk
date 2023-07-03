import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
// import { exclude } from "../utils"
const prisma = new PrismaClient()

// creating user...
export const createUser = async (user: any) => {
    const { username, password, email } = user
    try {
        return await prisma.user.create({
            data: {
                id: Math.ceil(Math.random() * 100),
                username,
                password: await bcrypt.hash(password as string, 10),
                email,
            },
            select: {
                id: true,
                username: true,
                email: true,
            },
        })
    } catch (err) {
        console.error(err)
    }
}

export const getUser = async (user: any) => {
    try {
        return await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                username: true,
            },
        })
    } catch (err) {
        console.error(err)
    }
}

export const removeUser = async (id: number) => {
    try {
        await prisma.user.delete({
            where: { id },
        })
    } catch (err) {
        console.error(err)
    }
}

export const updateUser = async (id: number, user: any) => {
    const { username, email, password } = user
    try {
        return await prisma.user.update({
            where: {
                id,
            },
            data: {
                username,
                email,
                password: await bcrypt.hash(password as string, 10),
            },
            select: {
                id: true,
                username: true,
                email: true,
            },
        })
    } catch (err) {
        console.error(err)
    }
}
export const getById = async (id: number) => {
    try {
        return await prisma.user.findFirst({
            where: { id },
        })
    } catch (err) {
        console.error(err)
    }
}
