import Router from "express";
import {
  postTweets,
  deleteTweets,
  paginationProcess,
  likeTweet,
  unlikeTweet,
  handleRetweets,
  deleteRetweets,
  displayComments,
  postComments,
  addBookmark,
  deleteBookmark,
  clearAllBookmarks,
  getBookmarks,
} from "../controllers/TweetController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.get("/getbookmarks", getBookmarks);
router.get("/", paginationProcess);
router.get("/:id", displayComments);
router.post("/", postTweets);
router.post("/comment", postComments);
router.post("/like", likeTweet);
router.post("/addbookmark", addBookmark);
router.delete("/clearallbookmarks", clearAllBookmarks);
router.delete("/deletebookmark", deleteBookmark);
router.delete("/unlike", unlikeTweet);
router.post("/retweet", handleRetweets);
router.delete("/undoretweet", deleteRetweets);
router.delete("/:id", deleteTweets);

export default router;
