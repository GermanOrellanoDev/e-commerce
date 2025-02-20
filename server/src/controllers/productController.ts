import { NextFunction, Request, Response } from "express";
import Product from "../models/Product";

//crear producto
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newProduct = new Product(req.body);
    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

//obtener todos los productos
export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

//obtener producto por ID
export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

//actualizar producto
export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

//eliminar producto
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};
