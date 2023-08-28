import { pool } from "../../database.js";
import {
  userInformation,
  checkLike,
  displayUserPost,
  checkRetweet2,
  likedPost,
  checkUsername,
} from "../queries/ProfileQuery.js";

export const getUserInformation = (req, res) => {
  const { username } = req.params;
  pool.query(checkUsername, [username], (error, results) => {
    if (error) throw error;
    if (results.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    pool.query(userInformation, [username], (error, results) => {
      if (error) throw error;
      return res.status(200).json(results.rows);
    });
  });
};

export const getUserPosts = async (req, res) => {
  const { username } = req.params;
  const current_user_id = req.user.id;

  const user = await pool.query(checkUsername, [username]);
  if (user.rows.length === 0) {
    return res.status(404).json({ error: "User not found" });
  }
  const id = user.rows[0].id;

  const countTweet = "SELECT COUNT(*) FROM tweets WHERE user_id = $1";
  try {
    const countTweets = await pool.query(countTweet, [id]);
    const tweets = await pool.query(displayUserPost, [id]);
    const likedTweets = await pool.query(checkLike, [current_user_id]);
    const retweetedTweets = await pool.query(checkRetweet2, [current_user_id]);

    tweets.rows.map((tweet) => {
      if (likedTweets.rows.length) {
        tweet.liked = likedTweets.rows.some(
          (likedTweet) => likedTweet.tweet_id === tweet.id
        );
      } else {
        tweet.liked = false;
      }
      if (retweetedTweets.rows.length) {
        tweet.retweeted = retweetedTweets.rows.some(
          (retweetedTweet) => retweetedTweet.tweet_id === tweet.id
        );
      } else {
        tweet.retweeted = false;
      }
    });
    return res.json({
      items: tweets.rows,
      count: countTweets.rows[0].count,
    });
  } catch (error) {
    console.error("Error fetching tweets:", error);
    res.status(500).json({ error: "An error occurred while fetching tweets" });
  }
};

export const displayLikedPost = async (req, res) => {
  const user_id = req.user.id;
  pool.query(checkLike, [user_id], (error, results) => {
    if (error) throw error;
    pool.query(likedPost, [user_id], (error, results) => {
      if (error) throw error;
      return res.status(200).json(results.rows);
    });
  });
};
