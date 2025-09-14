import { Router } from "express";
import { getOffers } from "../controllers/offersController";

const router = Router();
router.get("/", getOffers);

export default router;
