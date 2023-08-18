import { Stack, SvgIcon, Typography } from "@mui/material";
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

export const PostComponentIcon = ({
  text,
  Icon,
  likes,
  retweets,
  handleLikePost,
}) => {
  return (
    <Stack flexDirection="row">
      <SvgIcon
        onClick={handleLikePost}
        sx={{
          color: text === "Like" ? "red" : "gray",
          "&:hover": {
            color: text === "Retweet" ? "#17BF63" : "red",
          },
        }}
        aria-label={text}
        className="PostComponentIcon"
      >
        <Icon />
      </SvgIcon>
      <Typography
        sx={{
          paddingTop: "5px",
          fontSize: "14px",
          color: "gray",
          cursor: "pointer",
          ":&hover": {
            color: "rgb(255,0,0)",
          },
        }}
        variant="span"
        component="span"
      >
        {likes}
      </Typography>
      <Typography
        className="retweet"
        color="#808080"
        sx={{
          paddingTop: "5px",
          fontSize: "14px",
          transition: `color 0.2s`,
          cursor: "pointer",
          ":&hover": {
            color: "#17BF63",
          },
        }}
        variant="span"
      >
        {retweets}
      </Typography>
    </Stack>
  );
};
