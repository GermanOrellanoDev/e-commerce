import { Router } from "express";
import {
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import { authenticateJWT } from "../middlewares/authMiddleware";
import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

const router = Router();

router.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("price", "El valor debe ser numérico").isNumeric(),
    check("category", "La categoría es obligatoria"),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    next();
  },
  /* authenticateJWT, */
  createProduct
);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", /* authenticateJWT, */ updateProduct);
router.delete("/:id", /* authenticateJWT, */ deleteProduct);

export default router;
