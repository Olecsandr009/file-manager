import dotenv from "dotenv"
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

dotenv.config();

interface IPayload {
    _id: number,
    login: string
}

interface IRequest extends Request {
    user: string | jwt.JwtPayload
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

export async function checkAccess(req: IRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    const token = authHeader?.split(" ")?.[1];

    if( !token ) {
        const error = new Error("Unauthorized")
        return next(error)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        console.log(error, user)

        if(error) {
            return next(error)
        }

        req.user = user;
        next()
    })
}

export async function verifyAccessToken(accessToken: string) {
    return await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
}

export async function verifyRefreshToken(refreshToken: string) {
    return await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
}

export const TokenService = {
    generateAccessToken,
    generateRefreshToken,
    checkAccess,
    verifyAccessToken,
    verifyRefreshToken
}