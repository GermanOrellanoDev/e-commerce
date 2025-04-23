import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getUserOrders,
} from "../controllers/orderController";
import { authenticateJWT } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authenticateJWT, createOrder);
router.get("/", authenticateJWT, getUserOrders);
router.get("/all", authenticateJWT, getAllOrders); //proteger ruta para que solo accesa admin
router.get("/:id", authenticateJWT, getOrderById);
router.put("/:id", authenticateJWT, updateOrder);
router.delete("/:id", authenticateJWT, deleteOrder);

export default router;
