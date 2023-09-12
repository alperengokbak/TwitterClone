import { pool } from "../../database.js";
import {
  getTweetById1,
  getMainTweetByIdForComment,
  getTweetByIdForComments,
  displayUserPost,
  postTweet,
  postComment,
  getTweetCount,
  checkLike,
  checkLike2,
  likeTweets,
  unlikeTweets,
  likeDecrease,
  likeIncrease,
  checkRetweet,
  checkRetweet2,
  retweet,
  undoRetweet,
  retweetIncrease,
  retweetDecrease,
  checkBookmark,
  addTweetToBookmark,
  removeTweetFromBookmark,
  increaseBookmarkCount,
  decreaseBookmarkCount,
  checkBookmark2,
  clearAllBookmark,
  displayBookmarks,
  clearAllBookmarkCount,
} from "../queries/TweetQuery.js";

export const paginationProcess = async (req, res) => {
  const user_id = req.user.id;

  const page = req.query.page;
  const pageSize = req.query.pageSize;

  try {
    const tweets = await pool.query(displayUserPost, [
      pageSize,
      (page - 1) * pageSize,
    ]);

    const totalCountResult = await pool.query(getTweetCount);
    const totalCount = parseInt(totalCountResult.rows[0].count, 10);
    const totalPages = Math.ceil(totalCount / pageSize);
    const likedTweets = await pool.query(checkLike, [user_id]);
    const retweetedTweets = await pool.query(checkRetweet2, [user_id]);

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
      totalPages: totalPages,
    });
  } catch (error) {
    console.error("Error fetching tweets:", error);
    res.status(500).json({ error: "An error occurred while fetching tweets" });
  }
};

export const displayComments = async (req, res) => {
  const motherTweetId = parseInt(req.params.id);
  const currentUserId = req.user.id;

  const mainTweet = await pool.query(getMainTweetByIdForComment, [
    motherTweetId,
  ]);
  const comment = await pool.query(getTweetByIdForComments, [motherTweetId]);
  try {
    const likedTweets = await pool.query(checkLike, [currentUserId]);
    const retweetedTweets = await pool.query(checkRetweet2, [currentUserId]);
    const bookmarkedTweets = await pool.query(checkBookmark, [currentUserId]);

    if (likedTweets.rows.length) {
      mainTweet.rows[0].liked = likedTweets.rows.some(
        (likedTweet) => likedTweet.tweet_id === mainTweet.rows[0].id
      );
      comment.rows.map((tweet) => {
        tweet.liked = likedTweets.rows.some(
          (likedTweet) => likedTweet.tweet_id === tweet.id
        );
      });
    } else {
      comment.rows[0].liked = false;
      mainTweet.rows[0].liked = false;
    }
    if (retweetedTweets.rows.length) {
      mainTweet.rows[0].retweeted = retweetedTweets.rows.some(
        (retweetedTweet) => retweetedTweet.tweet_id === mainTweet.rows[0].id
      );
      comment.rows.map((tweet) => {
        tweet.retweeted = retweetedTweets.rows.some(
          (retweetedTweet) => retweetedTweet.tweet_id === tweet.id
        );
      });
    } else {
      comment.rows[0].retweeted = false;
      mainTweet.rows[0].retweeted = false;
    }
    if (bookmarkedTweets.rows.length) {
      mainTweet.rows[0].bookmarked = bookmarkedTweets.rows.some(
        (bookmarkedTweet) => bookmarkedTweet.tweet_id === mainTweet.rows[0].id
      );
    } else {
      mainTweet.rows[0].bookmarked = false;
    }

    return res.status(200).json({
      mainTweet: mainTweet.rows[0],
      comments: comment.rows,
    });
  } catch (error) {
    console.error("Error fetching tweets:", error);
    res.status(500).json({ error: "An error occurred while fetching tweets" });
  }
};

export const deleteTweets = async (req, res) => {
  const user_id = req.user.id;
  const id = parseInt(req.params.id);
  const tweetId = id;

  try {
    const tweetQueryResult = await pool.query(getTweetById1, [id]);

    if (tweetQueryResult.rows.length === 0) {
      return res.status(404).send("Tweet not found.");
    }

    const tweetUserId = tweetQueryResult.rows[0].user_id;

    if (tweetUserId !== user_id) {
      return res
        .status(401)
        .send("You are not authorized to delete this tweet.");
    }

    await pool.query("BEGIN");
    await pool.query("DELETE FROM retweets WHERE tweet_id = $1", [tweetId]);
    await pool.query("DELETE FROM likes WHERE tweet_id = $1", [tweetId]);
    await pool.query("DELETE FROM tweets WHERE id = $1", [tweetId]);
    await pool.query("COMMIT");

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error(error);
    res.status(500).json({ message: "Error deleting post" });
  }
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
      id: results.rows[0].id,
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

export const postComments = (req, res) => {
  const { firstname, lastname, username, profile_picture, is_verified } =
    req.user;
  const { user_id, content, image_url, mother_tweet_id } = req.body;
  pool.query(
    postComment,
    [user_id, content, image_url, mother_tweet_id],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error!");
      }
      return res.status(201).json({
        id: results.rows[0].id,
        user_id: results.rows[0].user_id,
        content: results.rows[0].content,
        image_url: results.rows[0].image_url,
        creation_date: results.rows[0].creation_date,
        likes: results.rows[0].likes,
        retweets: results.rows[0].retweets,
        mother_tweet_id: results.rows[0].mother_tweet_id,
        firstname: firstname,
        lastname: lastname,
        username: username,
        profile_picture: profile_picture,
        is_verified: is_verified,
      });
    }
  );
};

export const likeTweet = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool.query(checkLike2, [user_id, tweet_id], (error, results) => {
    if (error) return res.status(500).send("Internal Server Error!");
    if (results.rowCount === 0) {
      pool.query(likeTweets, [user_id, tweet_id], (error, results) => {
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

export const handleRetweets = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool.query(checkRetweet, [user_id, tweet_id], (error, results) => {
    if (error) return res.status(500).send("Internal Server Error!");
    if (results.rowCount === 0) {
      pool.query(retweet, [user_id, tweet_id]).then((results, error) => {
        if (error) return res.status(500).send("Internal Server Error!");
        if (results.rowCount === 1) {
          pool.query(retweetIncrease, [tweet_id], (error, results) => {
            if (error) return res.status(500).send("Internal Server Error!");
            res.status(200).json(results.rows[0]);
          });
        }
      });
    } else {
      res.status(200).send(`Tweet already retweeted `);
    }
  });
};

export const deleteRetweets = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool.query(checkRetweet, [user_id, tweet_id], (error, results) => {
    if (error) return res.status(500).send("Internal Server Error!");
    if (results.rowCount !== 0) {
      pool.query(undoRetweet, [user_id, tweet_id], (error, results) => {
        if (error) return res.status(500).send("Internal Server Error!");
        if (results.rowCount === 1) {
          pool.query(retweetDecrease, [tweet_id], (error, results) => {
            if (error) return res.status(500).send("Internal Server Error!");
            res.status(200).json(results.rows[0]);
          });
        } else if (results.rowCount === 0) {
          return res.status(404).json({ status: "Tweet not found" });
        }
      });
    } else {
      return res.status(200).send(`Tweet already retweeted `);
    }
  });
};

export const addBookmark = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool.query(checkBookmark2, [user_id, tweet_id], (error, results) => {
    if (error) return res.status(500).send("There is an error!");
    if (results.rowCount === 0) {
      pool.query(addTweetToBookmark, [user_id, tweet_id], (error, results) => {
        if (error) return res.status(500).send("Won't add bookmark!");
        if (results.rowCount === 1) {
          pool.query(increaseBookmarkCount, [tweet_id], (error, results) => {
            if (error) return res.status(500).send("Can't increase bookmark!");
            res.status(200).json(results.rows[0]);
          });
        }
      });
    } else {
      res.status(200).send(`Tweet already added to bookmark `);
    }
  });
};

export const deleteBookmark = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool.query(checkBookmark2, [user_id, tweet_id], (error, results) => {
    if (error) return res.status(500).send("Internal Server Error!");
    if (results.rowCount !== 0) {
      pool.query(
        removeTweetFromBookmark,
        [user_id, tweet_id],
        (error, results) => {
          if (error) return res.status(500).send("Internal Server Error!");
          if (results.rowCount === 1) {
            pool.query(decreaseBookmarkCount, [tweet_id], (error, results) => {
              if (error) return res.status(500).send("Internal Server Error!");
              res.status(200).json(results.rows[0]);
            });
          } else if (results.rowCount === 0) {
            return res.status(404).json({ status: "Tweet not found" });
          }
        }
      );
    } else {
      res.status(200).send(`Tweet already deleted from bookmark `);
    }
  });
};

export const clearAllBookmarks = async (req, res) => {
  const { id } = req.user;

  const tweetIds = await pool.query(
    `SELECT tweet_id FROM bookmarks WHERE user_id = ${id}`
  );

  if (tweetIds.rows.length === 0)
    return res.status(404).json({ message: "No bookmarks found" });

  try {
    pool.query(clearAllBookmark, [id], (error, results) => {
      if (error) return res.status(500).send("Internal Server Error!");
      pool.query(
        clearAllBookmarkCount,
        [tweetIds.rows.map((tweet) => parseInt(tweet.tweet_id))],
        (error, results) => {
          if (error) return res.status(500).send("Internal Server Error!");
          res.status(200).json({ message: "Deleted All Bookmarks!" });
        }
      );
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting post" });
  }
};

export const getBookmarks = async (req, res) => {
  const { id } = req.user;
  try {
    const bookmarks = await pool.query(displayBookmarks, [id]);
    const likedTweets = await pool.query(checkLike, [id]);
    const retweetedTweets = await pool.query(checkRetweet2, [id]);

    bookmarks.rows.map((tweet) => {
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
    res.status(200).json({ status: "success", bookmarks: bookmarks.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error displaying post" });
  }
};
