import express from "express";
import tweetRoutes from "./src/routes/tweet/index.js";
import userRoutes from "./src/routes/user/index.js";
import retweetRoutes from "./src/routes/retweet/index.js";
import likeRoutes from "./src/routes/like/index.js";
import commentRoutes from "./src/routes/comment/index.js";
import followerRoutes from "./src/routes/follower/index.js";

export {
  express,
  tweetRoutes,
  userRoutes,
  retweetRoutes,
  likeRoutes,
  commentRoutes,
  followerRoutes,
};
