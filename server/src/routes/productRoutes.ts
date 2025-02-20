import { Router } from "express";
import {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import { authenticateJWT } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authenticateJWT, createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", authenticateJWT, updateProduct);
router.delete("/:id", authenticateJWT, deleteProduct);

export default router;
