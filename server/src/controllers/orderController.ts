import { NextFunction, Request, Response } from "express";
import Order from "../models/Order";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newOrder = new Order(req.body);
    const createdOrder = await newOrder.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    next(error);
  }
};

export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const orders = await Order.find();
  res.json(orders);
  try {
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
    res.json(deletedOrder);
  } catch (error) {
    next(error);
  }
};
