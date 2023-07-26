import { pool } from "../../../database.js";
import {
  getUser,
  getUserById1,
  postUser,
  removeUser,
} from "../../queries/user/index.js";

export const getUsers = (req, res) => {
  pool.query(getUser, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getUserById1, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const postUsers = (req, res) => {
  const { username, email, password, profile_picture, birthday } = req.body;
  pool.query(
    postUser,
    [username, email, password, profile_picture, birthday],
    (error, results) => {
      if (error) throw error;
      res.status(200).send(`User added with username: ${username}`);
    }
  );
};

export const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getUserById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error.");
    } else {
      if (results.rows.length) {
        pool.query(removeUser, [id], (error, results) => {
          if (error) {
            res.status(500).send("There Is Not Including The Defined User");
          } else {
            res.status(200).send("Successfully deleted The Defined User Id!");
          }
        });
      } else {
        res.status(404).send("Not Found User Id!");
      }
    }
  });
};
