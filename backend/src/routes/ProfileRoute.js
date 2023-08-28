import Router from "express";
import {
  getUserInformation,
  getUserPosts,
  displayLikedPost,
} from "../controllers/ProfileController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.get("/:username", getUserInformation);
router.get("/:username/posts", getUserPosts);
router.get("/:username/liked", displayLikedPost);

export default router;
