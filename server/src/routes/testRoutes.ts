import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
  res.json({ message: "El back funciona" });
});

export default router;
