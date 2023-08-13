import { pool } from "../../database.js";

import { displayTrends } from "../queries/WidgetQuery.js";

export const getTrends = (req, res) => {
  pool.query(displayTrends, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
