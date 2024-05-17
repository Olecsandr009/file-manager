import dotenv from "dotenv"
import { NextFunction } from "express";
import jwt from "jsonwebtoken";

dotenv.config();

interface IPayload {
    _id: number,
    login: string
}

export async function generateAccessToken(payload: IPayload) {
    return await jwt.sign(payload, process.env.ACCESS_TOKEN, {
        expiresIn: "30m"
    })
}

export async function generateRefreshToken(payload: IPayload) {
    return await jwt.sign(payload, process.env.REFRESH_TOKEN, {
        expiresIn: "7d"
    })
}

export async function checkAccess(req: Request, res: Response, next: NextFunction) {
    next()
}

export const TokenService = {
    generateAccessToken,
    generateRefreshToken,
    checkAccess
}