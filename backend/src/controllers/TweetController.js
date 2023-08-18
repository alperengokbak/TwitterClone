import { pool } from "../../database.js";
import {
  getTweet,
  getTweetById1,
  deleteTweet,
  displayUserPost,
  postTweet,
  getTweetCount,
  checkLike,
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

    // TODO - check if user liked the tweet
    // TODO - Returning undefined
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
/* export const likeTweet = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool
    .query(likeTweets, [user_id, tweet_id])
    .then((results, error) => {
      if (error) return res.status(500).send("Internal Server Error!");
      if (results.rowCount === 1) {
        return pool.query(likeIncrease, [tweet_id]);
      } else {
        console.log("Already Liked !");
        return null;
      }
    })
    .then((results) => {
      if (results !== null) {
        console.log("Liked !");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}; */
export const likeTweet = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool
    .query(likeTweets2, [user_id, tweet_id])
    .then((results, error) => {
      if (error) return res.status(500).send("Internal Server Error!");
      if (results.rowCount === 1) return pool.query(likeIncrease, [tweet_id]);
    })
    .then((results) => {
      if (results !== null) {
        console.log("Liked !");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const unlikeTweet = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool
    .query(checkLike, [user_id])
    .then((results) => {
      if (results.rowCount === 1)
        return pool.query(unlikeTweets, [user_id, tweet_id]);
    })
    .then(() => {
      return pool.query(likeDecrease, [tweet_id]);
    })
    .then(() => {
      res.status(200).send("Tweet unlike successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error!");
    });
};
