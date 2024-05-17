import { AuthService } from "repositories/Auth";
import bcrypt from "bcrypt"
import { generateAccessToken, generateRefreshToken } from "./Token";
import { RefreshService } from "repositories/Refresh";
import { ACCESS_TOKEN_EXPIRATION } from "../../constants"

interface ISignUp {
    email: string
    login: string
    password: string
    finger_print: any
}

interface ISignIn {
    email: string
    password: string
    finger_print: any
}

// Sign in service
export function signIn(data: ISignIn) {}

// Sigh up service
export async function signUp(data: ISignUp) {
    const {email, login, password, finger_print} = data

    if(AuthService.getUserByEmail(email)) {
        throw new Error("User with that name already exists!")
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const {_id} = await AuthService.setUser({email, login, password: hashedPassword})

    const payload = { _id, login }

    const access_token = await generateAccessToken(payload)
    const refresh_token = await generateRefreshToken(payload)

    await RefreshService.createRefreshSession({_id, refresh_token, finger_print})

    return { access_token, refresh_token, accessTokenExpiration: ACCESS_TOKEN_EXPIRATION }
}

// Sign out service
export function signOut(req: Request, res: Response) {}

// Refresh service
export function refresh(req: Request, res: Response) {}