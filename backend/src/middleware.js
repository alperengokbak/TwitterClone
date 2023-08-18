import jwt from "jsonwebtoken";
import { pool } from "../database.js";

export const isAuthorized = (req, res, next) => {
  if (!req.header("authorization")) {
    return res.status(401).json({ status: "Unauthorized" });
  }
  const token = req.header("authorization").split(" ")[1];
  if (token) {
    const getUserById1 = "SELECT * FROM users WHERE id = $1";
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) return res.status(401).json({ status: "Unauthorized" });
      pool.query(getUserById1, [decoded.id], (error, result) => {
        if (error) return res.json({ Error: "Error for getting user" });
        if (result.rows.length) {
          req.user = result.rows[0];
          next();
        } else {
          return res.status(401).json({ status: "Unauthorized" });
        }
      });
    });
  }
};
