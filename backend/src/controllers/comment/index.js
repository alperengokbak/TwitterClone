import { pool } from "../../../database.js";
import {
  getComment,
  postComment,
  removeComment,
  getCommentById1,
  getCommentUserContent,
} from "../../queries/comment/index.js";

export const getComments = (req, res) => {
  pool.query(getComment, (error, results) => {
    if (error) {
      res.status(500).send("Internal Server Error!");
    } else {
      res.status(200).json(results.rows);
    }
  });
};

export const postComments = (req, res) => {
  const { user_id, tweet_id, content } = req.body;

  pool.query(postComment, [user_id, tweet_id, content], (error, results) => {
    if (error) {
      res.status(500).send("Internal Server Error!");
    } else {
      res.status(201).send("Comment created!");
    }
  });
};

export const getCommentsById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getCommentById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal Server Error!");
    } else {
      if (results.rows.length) {
        res.status(200).json(results.rows);
      } else {
        res.status(404).send("Comment not found!");
      }
    }
  });
};

export const deleteComment = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getCommentById1, [id], (error, req) => {
    if (error) {
      res.status(500).send("Internal Server Error!");
    } else {
      if (req.rows.length) {
        pool.query(removeComment, [id], (error, results) => {
          if (error) {
            res.status(500).send("Internal Server Error!");
          } else {
            res.status(200).send("Comment deleted!");
          }
        });
      } else {
        res.status(404).send("Comment not found!");
      }
    }
  });
};

export const getCommentsTheDefinedUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getCommentById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal Server Error!");
    } else {
      if (results.rows.length) {
        pool.query(getCommentUserContent, [id], (error, results) => {
          if (error) {
            res.status(500).send("Internal Server Error!");
          } else {
            res.status(200).json(results.rows);
          }
        });
      } else {
        res.status(404).send("Comment not found!");
      }
    }
  });
};
