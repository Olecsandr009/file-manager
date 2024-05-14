import { Request, Response } from "express";

// Sign in controller
export async function signIn(req: Request, res: Response) {
    try {
        return res.sendStatus(200)

    } catch( error ) {
        console.log(error)
    }
}

// Sign up controller
export async function signUp(req: Request, res: Response) {
    try {
        return res.sendStatus(200)

    } catch( error ) {
        console.log(error)
    }
}

// Sign out controller
export async function signOut(req: Request, res: Response) {
    try {
        return res.sendStatus(200)

    } catch( error ) {
        console.log(error)
    }
}

export async function refresh(req: Request, res: Response) {
    try {
        return res.sendStatus(200)

    } catch( error ) {
        console.log(error)
    }
}