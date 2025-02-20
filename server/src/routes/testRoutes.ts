import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
  res.json({ message: "¡El backend está funcionando correctamente!" });
});

export default router;
