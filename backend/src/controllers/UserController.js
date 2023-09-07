import { pool } from "../../database.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  getUser,
  getUserById1,
  postUser,
  removeUser,
  checkEmail,
} from "../queries/UserQuery.js";

const salt = 10;

export const login = (req, res) => {
  pool.query(checkEmail, [req.body.email], (error, results) => {
    if (error) return res.status(501).json("Internal Server Error!");
    if (results.rows.length) {
      bcrypt.compare(
        req.body.password,
        results.rows[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Error for comparing password" });
          if (response) {
            const token = jwt.sign(
              { id: results.rows[0].id },
              "jwt-secret-key",
              {
                expiresIn: "7d",
              }
            );
            return res.json({
              status: "Success",
              user: {
                id: results.rows[0].id,
                firstName: results.rows[0].firstname,
                lastName: results.rows[0].lastname,
                username: results.rows[0].username,
                email: results.rows[0].email,
                profile_picture: results.rows[0].profile_picture,
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
      [
        req.body.firstName,
        req.body.lastName,
        req.body.username,
        req.body.email,
        hash,
      ],
      (error) => {
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

export const checkUser = (req, res) => {
  const token = req.header("authorization").split(" ")[1];
  if (!token) return res.status(401).json({ status: "No token provided" });
  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) return res.status(401).json({ status: "Unauthorized" });
    pool.query(getUserById1, [decoded.id], (error, results) => {
      if (error) return res.json({ Error: "Error for getting user" });
      if (!results.rows.length) return res.json({ user: null });
      return res.json({
        user: {
          id: results.rows[0].id,
          firstName: results.rows[0].firstname,
          lastName: results.rows[0].lastname,
          username: results.rows[0].username,
          email: results.rows[0].email,
          profile_picture: results.rows[0].profile_picture,
          is_verified: results.rows[0].is_verified,
        },
      });
    });
  });
};

export const becomeVerifiedUser = (req, res) => {
  const id = req.body.id;
  pool.query(getUserById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error.");
    } else {
      if (results.rows.length) {
        pool.query(
          "UPDATE users SET is_verified = true WHERE id = $1 RETURNING *",
          [id],
          (error, results) => {
            if (error) {
              res.status(500).send("There Is Not Including The Defined User");
            } else {
              res.json({
                success: results.rows[0].is_verified,
                message: "You successfully verified your account!",
              });
            }
          }
        );
      } else {
        res.status(404).send("Not Found User Id!");
      }
    }
  });
};

export const cancelVerifiedUser = (req, res) => {
  const id = req.body.id;
  pool.query(getUserById1, [id], (error, results) => {
    if (error) {
      res.status(500).send("Internal server error.");
    } else {
      if (results.rows.length) {
        pool.query(
          "UPDATE users SET is_verified = false WHERE id = $1 RETURNING *",
          [id],
          (error, results) => {
            if (error) {
              res.status(500).send("There Is Not Including The Defined User");
            } else {
              res.json({
                success: results.rows[0].is_verified,
                message: "You successfully canceled your account!",
              });
            }
          }
        );
      } else {
        res.status(404).send("Not Found User Id!");
      }
    }
  });
};
