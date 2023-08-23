import { pool } from "../../database.js";
import {
  getTweet,
  getTweetById1,
  deleteTweet,
  displayUserPost,
  postTweet,
  getTweetCount,
  checkLike,
  checkLike2,
  likeTweets,
  likeTweets2,
  unlikeTweets,
  likeDecrease,
  likeIncrease,
} from "../queries/TweetQuery.js";

export const getTweets = (req, res) => {
  pool.query(getTweet, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getTweetById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getTweetById1, [id], (error, results) => {
    if (error) res.status(500).send("Defined tweet not found!");
    res.status(200).json(results.rows);
  });
};

export const removeTweet = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getTweetById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error.");
    } else {
      if (results.rows.length) {
        pool.query(deleteTweet, [id], (error, results) => {
          if (error) {
            res.status(500).send("Error deleting the tweet.");
          } else {
            res.status(200).send("Tweet deleted successfully.");
          }
        });
      } else {
        res.status(404).send("Tweet not found.");
      }
    }
  });
};
export const paginationProcess = async (req, res) => {
  const user_id = req.user.id;

  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 3;

  try {
    const tweets = await pool.query(displayUserPost, [
      pageSize,
      (page - 1) * pageSize,
    ]);

    const totalCountResult = await pool.query(getTweetCount);
    const totalCount = parseInt(totalCountResult.rows[0].count, 10);
    const totalPages = Math.ceil(totalCount / pageSize);
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
      totalPages: totalPages,
    });
  } catch (error) {
    console.error("Error fetching tweets:", error);
    res.status(500).json({ error: "An error occurred while fetching tweets" });
  }
};

export const displayTweet = (req, res) => {
  pool.query(displayUserPost, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const postTweets = (req, res) => {
  const { firstname, lastname, username, profile_picture, is_verified } =
    req.user;
  const { user_id, content, image_url } = req.body;
  pool.query(postTweet, [user_id, content, image_url], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error!");
    }
    return res.status(201).json({
      user_id: results.rows[0].user_id,
      content: results.rows[0].content,
      image_url: results.rows[0].image_url,
      creation_date: results.rows[0].creation_date,
      likes: results.rows[0].likes,
      retweets: results.rows[0].retweets,
      firstname: firstname,
      lastname: lastname,
      username: username,
      profile_picture: profile_picture,
      is_verified: is_verified,
    });
  });
};
export const likeTweet = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool.query(checkLike2, [user_id, tweet_id], (error, results) => {
    if (error) return res.status(500).send("Internal Server Error!");
    if (results.rowCount === 0) {
      pool.query(likeTweets, [user_id, tweet_id]).then((results, error) => {
        if (error) return res.status(500).send("Internal Server Error!");
        if (results.rowCount === 1) {
          pool.query(likeIncrease, [tweet_id], (error, results) => {
            if (error) return res.status(500).send("Internal Server Error!");
            res.status(200).json(results.rows[0]);
          });
        }
      });
    } else {
      res.status(200).send(`Tweet already liked `);
    }
  });
};

export const unlikeTweet = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool.query(checkLike2, [user_id, tweet_id], (error, results) => {
    if (error) return res.status(500).send("Internal Server Error!");
    if (results.rowCount !== 0) {
      pool.query(unlikeTweets, [user_id, tweet_id], (error, results) => {
        if (error) return res.status(500).send("Internal Server Error!");
        if (results.rowCount === 1) {
          pool.query(likeDecrease, [tweet_id], (error, results) => {
            if (error) return res.status(500).send("Internal Server Error!");
            res.status(200).json(results.rows[0]);
          });
        } else if (results.rowCount === 0) {
          return res.status(404).json({ status: "Tweet not found" });
        }
      });
    } else {
      res.status(200).send(`Tweet already unlike `);
    }
  });
};
