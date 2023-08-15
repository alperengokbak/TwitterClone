import { pool } from "../../database.js";
import {
  getTweet,
  getTweetById1,
  deleteTweet,
  displayUserPost,
  postTweet,
  getTweetCount,
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
  const { user_id, content, likes, retweets, image_url } = req.body;
  pool.query(
    postTweet,
    [user_id, content, likes, retweets, image_url],
    (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error!");
      }
      return res.status(201).json(results.rows);
    }
  );
};
