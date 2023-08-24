import Router from "express";
import {
  postTweets,
  deleteTweets,
  paginationProcess,
  likeTweet,
  unlikeTweet,
  deleteRetweets,
  getRetweetsUserContent,
} from "../controllers/TweetController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.get("/", paginationProcess);
router.post("/like", likeTweet);
router.delete("/unlike", unlikeTweet);
router.post("/", postTweets);
router.delete("/:id", deleteTweets);
router.delete("/retweet/:id", deleteRetweets);
router.get("/retweet", getRetweetsUserContent);

export default router;
