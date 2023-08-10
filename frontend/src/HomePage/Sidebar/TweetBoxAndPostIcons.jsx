import { IconButton } from "@mui/material";
import React from "react";

export const TweetBoxForPostIcon = ({ text, Icon }) => {
  return (
    <IconButton edge="end" aria-label={text} className="TweetBoxForPostIcon">
      <Icon />
    </IconButton>
  );
};

export const TweetBoxIcon = ({ text, Icon }) => {
  return (
    <IconButton aria-label={text} className="TweetBoxIcon">
      <Icon />
    </IconButton>
  );
};

export const PostComponentIcon = ({ text, Icon }) => {
  return (
    <IconButton
      sx={{
        "&:hover": {
          borderRadius: "20px",
          color: text === "Retweet" ? "#17BF63" : "#E0245E",
        },
      }}
      aria-label={text}
      className="PostComponentIcon"
    >
      <Icon />
    </IconButton>
  );
};
