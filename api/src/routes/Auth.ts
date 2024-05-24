import { Router, Response, Request } from "express";
import { signIn, signUp, signOut, refresh } from "../controller/Auth";

const router = Router();

// Login endpoint
router.post("/sign-in", signIn)

// Register endpoint
router.post("/sign-up", signUp)

// Logout endpoint
router.post("/sign-out", signOut)

// Refresh endpoint
router.post("/refresh", refresh)

export default router