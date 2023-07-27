import Router from "express";
import {
  getRetweets,
  getRetweetById,
  postRetweets,
  deleteRetweets,
  getRetweetsUserContent,
  getRetweetsTweetContent,
} from "../../controllers/retweet/index.js";

const router = Router();

router.get("/retweet", getRetweets);
router.post("/retweet", postRetweets);
router.get("/retweet/byId/:id", getRetweetById);
router.delete("/retweet/:id", deleteRetweets);
router.get("/retweet/userContent/:id", getRetweetsUserContent);
router.get("/retweet/tweetContent/:id", getRetweetsTweetContent);

export default router;
