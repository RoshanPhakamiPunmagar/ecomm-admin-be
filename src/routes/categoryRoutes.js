import express from "express";
import {
  createCategory,
  updateCategoryById,
  deleteCategoryById,
} from "../controllers/categoryController.js";
import { auth } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

//  Admin only
router.post("/", auth, allowRoles("admin"), createCategory);
router.put("/:id", auth, allowRoles("admin"), updateCategoryById);
router.delete("/:id", auth, allowRoles("admin"), deleteCategoryById);

export default router;
