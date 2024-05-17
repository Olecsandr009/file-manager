import { RefreshEntity } from "entity/refresh.entity"
import { pool } from "../config/db"
import { FingerprintConfig, FingerprintResult, FingerprintResultComponent } from "express-fingerprint"

interface ICreateSession {
    _id: number,
    refresh_token: string,
    finger_print: any
}

export async function getRefreshSession(refreshToken: string) {}

export async function createRefreshSession(data: ICreateSession) {
    const session = await pool.getRepository(RefreshEntity).create(data)
    const results = await pool.getRepository(RefreshEntity).save(session)
}

export async function deleteRefreshSession(refreshToken: string) {}

export const RefreshService = {
    getRefreshSession,
    createRefreshSession,
    deleteRefreshSession
}