import Router from "express";
import {
  getTweetById,
  postTweets,
  removeTweet,
  paginationProcess,
} from "../controllers/TweetController.js";

const router = Router();

router.get("/tweet", paginationProcess);
router.post("/tweet", postTweets);
router.get("/tweet/:id", getTweetById);
router.delete("/tweet/:id", removeTweet);

export default router;
