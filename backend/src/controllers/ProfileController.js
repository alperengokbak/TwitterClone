import { pool } from "../../database.js";
import {
  userInformation,
  checkLike,
  displayUserPost,
  getTweetCount,
  displayOwnPost,
} from "../queries/ProfileQuery.js";

export const getUserInformation = (req, res) => {
  const { id } = req.user;
  pool.query(userInformation, [id], (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
};

/* export const getUserOwnPost = (req, res) => {
  const { id } = parseInt(req.params.id);
  pool.query(displayOwnPost, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
}; */

export const getUserPosts = async (req, res) => {
  const user_id = req.user.id;
  const countTweet = "SELECT COUNT(*) FROM tweets WHERE user_id = $1";
  try {
    const countTweets = await pool.query(countTweet, [user_id]);
    const tweets = await pool.query(displayUserPost, [user_id]);
    const likedTweets = await pool.query(checkLike, [user_id]);

    tweets.rows.map((tweet) => {
      if (likedTweets.rows.length) {
        tweet.liked = likedTweets.rows.some(
          (likedTweet) => likedTweet.tweet_id === tweet.id
        );
      } else {
        tweet.liked = false;
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
