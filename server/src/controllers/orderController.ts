import { NextFunction, Request, Response } from "express";
import Order from "../models/Order";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId, products, totalPrice } = req.body;
    console.log("Backend recibe:", req.body);
    const newOrder = new Order({ userId, products, totalPrice });
    const createdOrder = await newOrder.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    next(error);
  }
};

export const getUserOrders = async (
  req: Request & { user?: { id: string } },
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.id;
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ error: "Orden no encontrada" });
      return;
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedOrder) {
      res.status(404).json({ error: "Orden no encontrada" });
      return;
    }
    res.json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      res.status(404).json({ error: "Orden no encontrada" });
      return;
    }
    res.json({ message: "Orden eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};
