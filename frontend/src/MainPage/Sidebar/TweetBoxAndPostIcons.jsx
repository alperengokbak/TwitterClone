import { IconButton, SvgIcon } from "@mui/material";
import React from "react";

export const TweetBoxForPostIcon = ({ text, Icon }) => {
  return (
    <SvgIcon edge="end" aria-label={text} className="TweetBoxForPostIcon">
      <Icon />
    </SvgIcon>
  );
};

export const TweetBoxIcon = ({ text, Icon, handleOpen }) => {
  return (
    <SvgIcon
      title="media"
      aria-label={text}
      className="TweetBoxIcon"
      onClick={handleOpen}
    >
      <Icon />
    </SvgIcon>
  );
};

export const PostComponentIcon = ({ text, Icon }) => {
  return (
    <SvgIcon
      sx={{
        cursor: "pointer",
        "&:hover": {
          borderRadius: "10px",
          backgroundColor:
            text === "Retweet" ? "rgba(249, 24, 128, 0.1)" : "rgba(0, 0, 0, 0)",
          color: text === "Retweet" ? "#17BF63" : "#1DA1F2",
        },
      }}
      aria-label={text}
      className="PostComponentIcon"
    >
      <Icon />
    </SvgIcon>
  );
};
