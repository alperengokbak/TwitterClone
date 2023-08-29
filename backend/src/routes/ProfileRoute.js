import Router from "express";
import {
  getUserInformation,
  getUserPosts,
  displayLikedPost,
  followUser,
  unfollowUser,
} from "../controllers/ProfileController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.get("/:username", getUserInformation);
router.get("/:username/posts", getUserPosts);
router.get("/:username/liked", displayLikedPost);
router.post("/follow", followUser);
router.delete("/unfollow", unfollowUser);

export default router;
