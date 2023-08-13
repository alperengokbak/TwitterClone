import Router from "express";
import { getTrends } from "../controllers/WidgetController.js";

const router = Router();

router.get("/trends", getTrends);

export default router;
