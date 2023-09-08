import express from "express";
import tweetRoutes from "./src/routes/TweetRoute.js";
import userRoutes from "./src/routes/UserRoute.js";
import widgetRoutes from "./src/routes/WidgetRoute.js";
import profileRoutes from "./src/routes/ProfileRoute.js";
import userProcessRoute from "./src/routes/UserProcessRoute.js";

import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/auth", userRoutes);
app.use("/userProcess", userProcessRoute);
app.use("/tweet", tweetRoutes);
app.use("/", widgetRoutes);
app.use("/profile", profileRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));
