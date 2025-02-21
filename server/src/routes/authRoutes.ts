import { Router } from "express";
import { login, register, verifyUser } from "../controllers/authController";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/verify", verifyUser);

export default router;
