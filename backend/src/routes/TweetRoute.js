import Router from "express";
import {
  postTweets,
  deleteTweets,
  paginationProcess,
  likeTweet,
  unlikeTweet,
  handleRetweets,
  deleteRetweets,
} from "../controllers/TweetController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.get("/", paginationProcess);
router.get("/:username/status/:id");
router.post("/", postTweets);
router.post("/like", likeTweet);
router.delete("/unlike", unlikeTweet);
router.post("/retweet", handleRetweets);
router.delete("/undoretweet", deleteRetweets);
router.delete("/:id", deleteTweets);

export default router;
