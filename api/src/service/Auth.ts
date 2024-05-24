import { AuthRepository } from "../repositories/Auth";
import bcrypt from "bcrypt"
import { generateAccessToken, generateRefreshToken, TokenService } from "./Token";
import { RefreshRepository } from "../repositories/Refresh";
import { ACCESS_TOKEN_EXPIRATION } from "../../constants"
import { FingerprintResult } from "express-fingerprint";

interface ISignUp {
    email: string
    login: string
    password: string
    finger_print: FingerprintResult
}

interface ISignIn {
    email: string
    password: string
    finger_print: FingerprintResult
}

interface IRefresh {
    currentRefreshToken: string
    fingerprint: FingerprintResult
}

// Sign in service
export async function signIn(data: ISignIn) {
    const {email, password, finger_print} = data
    const userData = await AuthRepository.getUserByEmail(email)

    if(!userData) {
        throw new Error("User is not found!")
    }

    const isPasswordValid = bcrypt.compareSync(password, userData.password)

    if(!isPasswordValid) {
        throw new Error("Incorrect login or password")
    }

    const payload = { _id: userData._id, login: userData.login, email: userData.email }

    const access_token = await generateAccessToken(payload)
    const refresh_token = await generateRefreshToken(payload)

    await RefreshRepository.createRefreshSession({_id: userData._id, refresh_token, finger_print: finger_print.hash})

    return { access_token, refresh_token, accessTokenExpiration: ACCESS_TOKEN_EXPIRATION }
}

// Sigh up service
export async function signUp(data: ISignUp) {
    const {email, login, password, finger_print} = data
    const userData = await AuthRepository.getUserByEmail(email)

    if(userData) {
        throw new Error("User with that name already exists!")
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const {_id} = await AuthRepository.setUser({email, login, password: hashedPassword})

    const payload = { _id, login, email }

    const access_token = await generateAccessToken(payload)
    const refresh_token = await generateRefreshToken(payload)

    await RefreshRepository.createRefreshSession({_id, refresh_token, finger_print: finger_print.hash})

    return { access_token, refresh_token, accessTokenExpiration: ACCESS_TOKEN_EXPIRATION }
}

// Sign out service
export async function signOut(refreshToken: string) {
    await RefreshRepository.deleteRefreshSession(refreshToken)
}

// Refresh service
export async function refresh({currentRefreshToken, fingerprint}: IRefresh) {
    if (!currentRefreshToken) {
        throw new Error("Unauthorized")
    }

    const refreshSession = await RefreshRepository.getRefreshSession(currentRefreshToken)

    if(!refreshSession) {
        throw new Error("Unauthorized")
    }

    if(refreshSession.finger_print !== fingerprint.hash) {
        throw new Error("Forbidden")
    }

    await RefreshRepository.deleteRefreshSession(currentRefreshToken)

    let payload: any;
    try {
        payload = await TokenService.verifyRefreshToken(currentRefreshToken)
    } catch( error ) {
        throw new Error(error)
    }

    const {
        _id,
        email
    } = await AuthRepository.getUserByEmail(payload.email)

    const actualPayload = { _id, email }

    const access_token = await generateAccessToken(payload)
    const refresh_token = await generateRefreshToken(payload)

    await RefreshRepository.createRefreshSession({
        _id,
        refresh_token,
        finger_print: fingerprint.hash
    })

    return {
        access_token,
        refresh_token,
        accessTokenExpiration: ACCESS_TOKEN_EXPIRATION
    }
}

export const AuthService = {
    signIn,
    signUp,
    signOut,
    refresh
}