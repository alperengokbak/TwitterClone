import Router from "express";
import {
  getTweets,
  getTweetById,
  postTweets,
  removeTweet,
} from "../../controllers/tweet/index.js";

const router = Router();

router.get("/tweets", getTweets);
router.post("/tweets", postTweets);
router.get("/tweets/:id", getTweetById);
router.delete("/tweets/:id", removeTweet);

export default router;
