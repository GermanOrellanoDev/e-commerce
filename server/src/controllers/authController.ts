import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";
import User, { IUser } from "../models/User";
import { sendVerificationEmail } from "../utils/emailService";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(401).json({ message: "Credenciales inválidas" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch || user.verified === false) {
      res.status(401).json({ message: "Credenciales inválidas" });
      return;
    }

    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, lastname, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "El usuario ya existe" });
      return;
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser: Partial<IUser> = {
      name,
      lastname,
      email,
      password: hashedPass,
    };

    const savedUser = await User.create(newUser);

    const verificationCode = crypto.randomBytes(3).toString("hex");
    savedUser.verificationCode = verificationCode;
    await savedUser.save();

    sendVerificationEmail(savedUser.email, verificationCode);

    const {
      password: removedPassword,
      verificationCode: removedCode,
      ...userToReturn
    } = savedUser.toObject();

    res.status(201).json(userToReturn);
  } catch (error) {
    next(error);
  }
};

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, code } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    if (user.verificationCode === code) {
      user.verified = true;
      user.verificationCode = undefined;
      await user.save();
      res.status(200).json({ message: "Usuario verificado correctamente" });
    } else {
      res.status(400).json({ message: "Código de verificación incorrecto" });
    }
  } catch (error) {
    next(error);
  }
};
