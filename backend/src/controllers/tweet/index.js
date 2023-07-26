import { pool } from "../../db.js";
import { getTweetById, getTweets } from "../../queries/tweet/queries.js";

export const getTweet = (req, res) => {
  pool.query(getTweets, (error, result) => {
    try {
      const result = db.query();
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Something went wrong" });
    }
  });
};
