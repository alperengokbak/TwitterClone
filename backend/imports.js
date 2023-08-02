import express from "express";
import tweetRoutes from "./src/routes/tweet/index.js";
import userRoutes from "./src/routes/user/index.js";
import retweetRoutes from "./src/routes/retweet/index.js";
import likeRoutes from "./src/routes/like/index.js";
import commentRoutes from "./src/routes/comment/index.js";
import followerRoutes from "./src/routes/follower/index.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

export {
  express,
  tweetRoutes,
  userRoutes,
  retweetRoutes,
  likeRoutes,
  commentRoutes,
  followerRoutes,
  cors,
  jwt,
  bcrypt,
  cookieParser,
};
