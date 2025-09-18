import { Router } from "express";
import { createOrder, captureOrder } from "../controllers/paypalController";

const router = Router();

// إنشاء order
router.post("/create-order", createOrder);

// capture order
router.post("/capture-order", captureOrder);

export default router;