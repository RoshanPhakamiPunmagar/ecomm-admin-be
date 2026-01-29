import express from "express";
import {
  approveReview,
  deleteReview,
} from "../controllers/reviewController.js";

import { auth } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// 🔒 ADMIN ONLY
router.put("/:id/approve", auth, allowRoles("admin"), approveReview);
router.delete("/:id", auth, allowRoles("admin"), deleteReview);

export default router;
