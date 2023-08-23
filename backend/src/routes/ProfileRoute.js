import Router from "express";
import {
  getUserInformation,
  getUserPosts,
} from "../controllers/ProfileController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.get("/", getUserInformation);
router.get("/post", getUserPosts);

export default router;
