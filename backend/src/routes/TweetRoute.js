import Router from "express";
import {
  getTweetById,
  postTweets,
  removeTweet,
  paginationProcess,
  likeTweet,
  unlikeTweet,
} from "../controllers/TweetController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.get("/", paginationProcess);
router.post("/like", likeTweet);
router.delete("/unlike", unlikeTweet);
router.post("/", postTweets);
router.get("/:id", getTweetById);
router.delete("/:id", removeTweet);

export default router;
