import {
  express,
  tweetRoutes,
  /* userRoutes,
  retweetRoutes,
  likeRoutes,
  commentRoutes,
  followRoutes, */
} from "./imports.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", tweetRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));

/* 
psql -U postgres --> to login PostgreSQL
\l --> Listing the databases
\c --> Connecting the database
\! clear --> To clean the terminal page
\dt --> To list the tables
*/
