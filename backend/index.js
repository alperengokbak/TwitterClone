import {
  express,
  tweetRoutes,
  userRoutes,
  retweetRoutes,
  likeRoutes,
  commentRoutes,
  followerRoutes,
} from "./imports.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", tweetRoutes);
app.use("/api", followerRoutes);
app.use("/api", commentRoutes);
app.use("/api", likeRoutes);
app.use("/api", retweetRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));

/* 
psql -U postgres --> to login PostgreSQL
\l --> Listing the databases
\c --> Connecting the database
\! clear --> To clean the terminal page
\dt --> To list the tables
*/
