import Router from "express";
import {
  postTweets,
  deleteTweets,
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
router.delete("/:id", deleteTweets);

export default router;
