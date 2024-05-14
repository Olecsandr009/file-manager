import { Router, Response, Request } from "express";
import { signIn, signUp, signOut, refresh } from "../controller/Auth";

const router = Router();

// Login endpoint
router.post("/sing-in", signIn)

// Register endpoint
router.post("/sing-up", signUp)

// Logout endpoint
router.post("/sing-out", signOut)

// Refresh endpoint
router.post("/refresh", refresh)

export default router