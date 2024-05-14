import { Router, Response, Request } from "express";

const router = Router();

// Login endpoint
router.post("/sing-in", (req: Request, res: Response) => {
    res.send("Login")
})

// Register endpoint
router.post("/sing-up", (req: Request, res: Response) => {
    res.send("Register")
})

// Logout endpoint
router.post("/sing-out", (req: Request, res: Response) => {
    res.send("Logout")
})

// Refresh endpoint
router.post("/refresh", (req: Request, res: Response) => {
    res.send("Refresh")
})

export default router