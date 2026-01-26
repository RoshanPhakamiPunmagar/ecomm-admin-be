import express from "express";
import {
  addProduct,
  editProduct,
  removeProduct,
} from "../controllers/productController.js";

import { auth } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Admin-only routes
router.post("/", auth, isAdmin, addProduct);
router.put("/:id", auth, isAdmin, editProduct);
router.delete("/:id", auth, isAdmin, removeProduct);

export default router;
