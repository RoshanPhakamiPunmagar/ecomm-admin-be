import express from "express";
import {
  getAllOrdersAdmin,
  updateOrderStatusByAdmin,
} from "../controllers/orderController.js";
import { auth } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// ADMIN ONLY
router.get("/", auth, allowRoles("admin"), getAllOrdersAdmin);
router.put("/:id/status", auth, allowRoles("admin"), updateOrderStatusByAdmin);

export default router;
