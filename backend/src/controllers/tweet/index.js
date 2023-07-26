import { pool } from "../../../database.js";
import {
  getTweet,
  getTweetById1,
  postTweet,
  deletePost,
} from "../../queries/tweet/queries.js";

export const getTweets = (req, res) => {
  pool.query(getTweet, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getTweetById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getTweetById1, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const postTweets = (req, res) => {
  const { user_id, content, creation_date, retweets } = req.body;
  pool.query(
    postTweet,
    [user_id, content, creation_date, retweets],
    (error, result) => {
      if (error) throw error;
      res.status(201).send("Posted A New Tweet Successfully!");
    }
  );
};

export const removePost = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getTweetById, [id], (error, results) => {
    if (error) throw error;
    if (results.rows.length) {
      pool.query(deletePost, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Post deleted successfully.");
      });
    } else {
      res.status(404).send("Post not found.");
    }
  });
};

export const updateTweet = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age, dob } = req.body;

  pool.query(getTweetById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) res.send("Student does not exist in the database.");
  });

  pool.query(updatingStudent, [name, email, age, dob, id], (error, results) => {
    if (error) throw error;
    res.status(200).send("Student updated successfully.");
  });
};
