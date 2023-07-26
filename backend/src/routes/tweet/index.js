import Router from "express";
import {
  getTweets,
  getTweetById,
  postTweets,
  removePost,
  updateTweet,
} from "../../controllers/tweet/index.js";

const router = Router();

router.get("/tweets", getTweets);
router.post("/tweets", postTweets);
router.get("/tweets/:id", getTweetById);
router.post("/tweets/:id", removePost);
router.post("/tweets/:id", updateTweet);

export default router;
