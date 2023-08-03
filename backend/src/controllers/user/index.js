import { pool } from "../../../database.js";
import {
  getUser,
  getUserById1,
  postUser,
  removeUser,
  checkEmail,
} from "../../queries/user/index.js";

import { bcrypt, jwt } from "../../../imports.js";

const salt = 10;

export const login = (req, res) => {
  pool.query(checkEmail, [req.body.email], (error, results) => {
    if (error) return res.json({ Error: "Login Error In Server" });
    if (results.rows.length) {
      bcrypt.compare(
        req.body.password,
        results.rows[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Error for comparing password" });
          if (response) {
            const username = results.rows[0].username;
            const token = jwt.sign({ username }, "jwt-secret-key", {
              expiresIn: "1d",
            });
            return res.json({
              status: "Success",
              user: {
                id: results.rows[0].id,
                username: results.rows[0].username,
                email: results.rows[0].email,
              },
              token,
            });
          } else {
            return res.status(401).json({ status: "Wrong password" });
          }
        }
      );
    } else {
      return res.status(404).json({ status: "Not found email" });
    }
  });
};

export const register = (req, res) => {
  bcrypt.hash(req.body.password, salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    pool.query(
      postUser,
      [req.body.username, req.body.email, hash],
      (error, results) => {
        if (error) throw error;
        return res.status(200).json({ status: "Success" });
      }
    );
  });
};
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
