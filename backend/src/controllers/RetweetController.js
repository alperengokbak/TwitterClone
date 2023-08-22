import { pool } from "../../database.js";
import {
  getRetweetById1,
  removeRetweets,
  getRetweetUserContent,
} from "../queries/RetweetQuery.js";

export const getRetweetById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getRetweetById1, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
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
  const { user_id } = req.body;
  pool.query(getRetweetUserContent, [user_id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
