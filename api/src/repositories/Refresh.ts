import { RefreshEntity } from "entity/refresh.entity"
import { pool } from "../config/db"
import { FingerprintResult } from "express-fingerprint"

interface ICreateSession {
    _id: number,
    refresh_token: string,
    finger_print: string
}

export async function getRefreshSession(refreshToken: string) {
    const response = await pool.getRepository(RefreshEntity).findOneBy({refresh_token: refreshToken});

    if(!response) {
        return null
    }

    return response
}

export async function createRefreshSession(data: ICreateSession) {
    const session = await pool.getRepository(RefreshEntity).create(data)
    const results = await pool.getRepository(RefreshEntity).save(session)
}

export async function deleteRefreshSession(refreshToken: string) {
    await pool.getRepository(RefreshEntity).delete(refreshToken)
}

export const RefreshRepository = {
    getRefreshSession,
    createRefreshSession,
    deleteRefreshSession
}