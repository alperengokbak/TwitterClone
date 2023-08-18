import express from "express";
import tweetRoutes from "./src/routes/TweetRoute.js";
import userRoutes from "./src/routes/UserRoute.js";
import widgetRoutes from "./src/routes/WidgetRoute.js";
/* import retweetRoutes from "./src/routes/retweet/index.js";
import likeRoutes from "./src/routes/like/index.js";
import commentRoutes from "./src/routes/comment/index.js";
import followerRoutes from "./src/routes/follower/index.js"; */
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/auth", userRoutes);
app.use("/tweet", tweetRoutes);
app.use("/", widgetRoutes);

/* app.use("/", followerRoutes);
app.use("/", commentRoutes);
app.use("/", likeRoutes);
app.use("/", retweetRoutes);
 */
app.listen(port, () => console.log(`App listening on port ${port}`));

/* 
psql -U postgres --> to login PostgreSQL
\l --> Listing the databases
\c --> Connecting the database
\! clear --> To clean the terminal page
\dt --> To list the tables
*/
