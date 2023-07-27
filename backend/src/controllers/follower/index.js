import { pool } from "../../../database.js";
import {
  getFollower,
  getFollowerUser,
  postFollower,
  getFollowerById1,
  removeFollower,
} from "../../queries/follower/index.js";

export const getFollowers = (req, res) => {
  pool.query(getFollower, (error, results) => {
    if (results.rows.length) {
      res.status(200).json(results.rows);
    } else {
      res.status(500).send("Followers Table Is Empty!");
    }
  });
};

export const getFollowerUserContent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getFollowerUser, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error");
    } else if (results.rows.length) {
      res.status(200).json(results.rows);
    } else {
      res
        .status(500)
        .send(
          "Followers table is empty or no followers found for the specified user!"
        );
    }
  });
};

export const postFollowers = (req, res) => {
  const { follower_user_id, followed_user_id } = req.body;
  pool.query(
    postFollower,
    [follower_user_id, followed_user_id],
    (error, results) => {
      if (error) {
        res.status(500).send("Internal server error");
      } else {
        res.status(201).send("Follower added successfully!");
      }
    }
  );
};

export const getFollowerById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getFollowerById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error");
    } else if (results.rows.length) {
      res.status(200).json(results.rows);
    } else {
      res
        .status(500)
        .send(
          "Followers table is empty or no followers found for the specified user!"
        );
    }
  });
};

export const deleteFollower = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(removeFollower, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error");
    } else {
      res.status(200).send("Follower deleted successfully!");
    }
  });
};
