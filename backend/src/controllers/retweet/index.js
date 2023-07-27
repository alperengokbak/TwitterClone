import { pool } from "../../../database.js";
import {
  getRetweet,
  getRetweetById1,
  postRetweet,
  removeRetweets,
  getRetweetUserContent,
  getRetweetTweetContent,
} from "../../queries/retweet/index.js";

export const getRetweets = (req, res) => {
  pool.query(getRetweet, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

export const getRetweetById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getRetweetById1, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

export const postRetweets = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool.query(postRetweet, [user_id, tweet_id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`Like added with ID: ${user_id}`);
  });
};

export const deleteRetweets = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getRetweetById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error.");
    } else {
      if (results.rows.length > 0) {
        pool.query(removeRetweets, [id], (error, results) => {
          if (error) {
            res.status(500).send("Internal server error.");
          } else {
            res.status(200).send(`Like deleted with ID: ${id}`);
          }
        });
      } else {
        res.status(404).send("Not found.");
      }
    }
  });
};

export const getRetweetsUserContent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getRetweetById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error.");
    } else {
      if (results.rows.length) {
        pool.query(getRetweetUserContent, [id], (error, results) => {
          if (error) {
            res.status(500).send("Internal server error.");
          } else {
            res.status(200).json(results.rows);
          }
        });
      } else {
        res.status(404).send("Not found.");
      }
    }
  });
};

export const getRetweetsTweetContent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getRetweetById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error.");
    } else {
      if (results.rows.length) {
        pool.query(getRetweetTweetContent, [id], (error, results) => {
          if (error) {
            res.status(500).send("Internal server error.");
          } else {
            res.status(200).json(results.rows);
          }
        });
      } else {
        res.status(404).send("Not found.");
      }
    }
  });
};
