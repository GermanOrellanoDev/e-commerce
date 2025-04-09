import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController";
import { authenticateJWT } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", /* authenticateJWT */ createOrder);
router.get("/", /* authenticateJWT */ getAllOrders);
router.get("/:id", authenticateJWT, getOrderById);
router.put("/:id", authenticateJWT, updateOrder);
router.delete("/:id", authenticateJWT, deleteOrder);

export default router;
