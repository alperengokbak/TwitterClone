import Router from "express";
import {
  getLikes,
  postLikes,
  getLikeById,
  deleteLike,
  getLikesUserContent,
  getLikesTweetContent,
} from "../../controllers/like/index.js";

const router = Router();

router.get("/likes", getLikes);
router.post("/likes", postLikes);
router.get("/likes/byId/:id", getLikeById);
router.delete("/likes/:id", deleteLike);
router.get("/likes/userContent/:id", getLikesUserContent);
router.get("/likes/tweetContent/:id", getLikesTweetContent);
export default router;
