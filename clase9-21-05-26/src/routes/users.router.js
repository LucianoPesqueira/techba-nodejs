import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Juan" },
    { id: 2, name: "Maria" },
  ]);
});

export default router;
