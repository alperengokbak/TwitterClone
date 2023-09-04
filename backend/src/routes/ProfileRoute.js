import Router from "express";
import {
  getUserInformation,
  getUserPosts,
  displayLikedPost,
  followUser,
  unfollowUser,
  displayImagePost,
  displayRetweetedPosts,
  updateProfile,
} from "../controllers/ProfileController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.get("/:username", getUserInformation);
router.get("/:username/posts", getUserPosts);
router.get("/:username/media", displayImagePost);
router.get("/:username/liked", displayLikedPost);
router.get("/:username/retweeted", displayRetweetedPosts);
router.put("/:username", updateProfile);
router.post("/follow", followUser);
router.delete("/unfollow", unfollowUser);

export default router;
