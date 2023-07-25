import express from "express";

const app = express();
const port = 3000;

app.use(express.json);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => console.log(`app listening on port ${port}`));

/* 
psql -U postgres --> to login PostgreSQL
\l --> Listing the databases
\c --> Connecting the database
\! clear --> To clean the terminal page
\dt --> To list the tables
*/
