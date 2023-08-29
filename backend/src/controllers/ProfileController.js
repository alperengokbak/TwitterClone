import { pool } from "../../database.js";
import {
  userInformations,
  checkLike,
  displayUserPost,
  checkRetweet2,
  likedPost,
  checkUsername,
  getFollowedCount,
  getFollowersCount,
  followUp,
  unfollowUp,
  checkFollow,
} from "../queries/ProfileQuery.js";

// TODO - Complete follow and unfollow functions

export const getUserInformation = async (req, res) => {
  const { username } = req.params;
  const current_user_id = req.user.id; // Follower id

  const user = await pool.query(checkUsername, [username]);
  if (user.rows.length === 0) {
    return res.status(404).json({ error: "User not found" });
  }
  const id = user.rows[0].id; // Followed id

  try {
    const userInformationResult = await pool.query(userInformations, [
      username,
    ]);
    const countFollower = await pool.query(getFollowersCount, [id]);
    const countFollowed = await pool.query(getFollowedCount, [id]);
    const followUser = await pool.query(checkFollow, [current_user_id, id]);

    const userInformation = userInformationResult.rows[0];
    userInformation.followers = countFollower.rows[0].count;
    userInformation.followed = countFollowed.rows[0].count;

    if (followUser.rows.length) {
      userInformation.following = true;
    } else {
      userInformation.following = false;
    }

    return res.json(userInformation);
  } catch (error) {
    console.error("Error fetching user information:", error);
    res.status(500).json({ error: "An error occurred while fetching tweets" });
  }
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

export const followUser = async (req, res) => {
  const { follower_user_id, followed_user_id } = req.body;
  pool.query(
    checkFollow,
    [follower_user_id, followed_user_id],
    (error, results) => {
      if (error) throw error;
      if (results.rowCount === 0) {
        pool.query(
          followUp,
          [follower_user_id, followed_user_id],
          (error, results) => {
            if (error) throw error;
            return res.status(200).json(results.rows);
          }
        );
      } else {
        res.status(200).send(`Already following `);
      }
    }
  );
};

export const unfollowUser = (req, res) => {
  const { follower_user_id, followed_user_id } = req.body;
  pool.query(
    checkFollow,
    [follower_user_id, followed_user_id],

    (error, results) => {
      if (error) return res.status(500).send("Internal Server Error!");
      if (results.rowCount !== 0) {
        pool.query(
          unfollowUp,
          [follower_user_id, followed_user_id],
          (error, results) => {
            if (error) throw error;
            return res.status(200).json(results.rows);
          }
        );
      } else {
        res.status(200).send(`You didn't follow this user`);
      }
    }
  );
};
