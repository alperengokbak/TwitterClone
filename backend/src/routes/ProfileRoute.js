import Router from "express";
import { getUserInformation } from "../controllers/ProfileController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.get("/:id", getUserInformation);
router.get("/pagination", getUserInformation);

export default router;
