import { pool } from "../../../database.js";
import {
  getLike,
  postLike,
  removeLike,
  getLikeById1,
  getLikeUserContent,
  getLikeTweetContent,
} from "../../queries/like/index.js";

export const getLikes = (req, res) => {
  pool.query(getLike, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

export const getLikeById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getLikeById1, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

export const postLikes = (req, res) => {
  const { user_id, tweet_id } = req.body;
  pool.query(postLike, [user_id, tweet_id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`Like added with ID: ${user_id}`);
  });
};

export const deleteLike = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getLikeById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error.");
    } else {
      if (results.rows.length > 0) {
        pool.query(removeLike, [id], (error, results) => {
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

export const getLikesUserContent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getLikeById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error.");
    } else {
      if (results.rows.length) {
        pool.query(getLikeUserContent, [id], (error, results) => {
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

export const getLikesTweetContent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getLikeById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error.");
    } else {
      if (results.rows.length) {
        pool.query(getLikeTweetContent, [id], (error, results) => {
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
