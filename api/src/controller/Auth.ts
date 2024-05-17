import { Request, Response } from "express";
import { AuthService } from "../service/Auth";
import { COOKIE_SETTINGS } from "../../constants";

// Sign in controller
export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body;
    const { fingerprint } = req;

    try {
        const { access_token, refresh_token, accessTokenExpiration  } = await AuthService.signIn({
            email, password, finger_print: fingerprint
        })

        res.cookie("refreshToken", refresh_token, COOKIE_SETTINGS.REFRESH_TOKEN)

        return res.status(200).json({access_token, accessTokenExpiration})

    } catch( error ) {
        console.log(error)
    }
}

// Sign up controller
export async function signUp(req: Request, res: Response) {
    const {email, login, password} = req.body;
    const { fingerprint } = req;

    try {
        const { access_token, refresh_token, accessTokenExpiration  } = await AuthService.signUp({
            email, login, password, finger_print: fingerprint
        })

        res.cookie("refreshToken", refresh_token, COOKIE_SETTINGS.REFRESH_TOKEN)

        return res.status(200).json({access_token, accessTokenExpiration})
    } catch( error ) {
        console.log(error)
    }
}

// Sign out controller
export async function signOut(req: Request, res: Response) {
    const refreshToken = req.cookies.refreshToken;
    const { fingerprint } = req;

    try {
        await AuthService.signOut(refreshToken);

        res.clearCookie("refreshToken")
        
        return res.sendStatus(200)

    } catch( error ) {
        console.log(error)
    }
}

// Refresh controller
export async function refresh(req: Request, res: Response) {
    const { fingerprint } = req;
    const currentRefreshToken = req.cookies.refreshToken;

    try {
        const { access_token, refresh_token, accessTokenExpiration } = await AuthService.refresh({
            currentRefreshToken,
            fingerprint
        })

        res.cookie("refreshToken", refresh_token, COOKIE_SETTINGS.REFRESH_TOKEN)

        return res.status(200).json({access_token, accessTokenExpiration})

    } catch( error ) {
        console.log(error)
    }
}