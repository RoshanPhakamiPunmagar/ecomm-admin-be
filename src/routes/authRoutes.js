import express from "express";
import { adminLogin } from "../controllers/authController.js";
import { loginValidation } from "../middleware/joiValidation.js";

const router = express.Router();

// POST /api/admin/v1/auth/login
router.post("/login", loginValidation, adminLogin);

export default router;
