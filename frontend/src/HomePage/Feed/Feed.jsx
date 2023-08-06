import React from "react";
import { Stack } from "@mui/material";
import TweetBox from "./TweetBox";
import Post from "./Post";
import Divider from "@mui/material/Divider";

function Feed() {
  return (
    <Stack
      sx={{
        flex: "0.4",
        overflowY: "scroll",
        borderRight: "1px solid #e6ecf0",
        minWidth: "fit-content", // TODO - Ask about what is the difference between fit-content and max-content.
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Stack
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderRight: "1px solid #e6ecf0",
          paddingRight: "1px 20px",
        }}
      >
        <h2>Home</h2>
        <Divider />
        <TweetBox />
        <Divider
          sx={{
            border: "1px solid #1DA1F2",
            borderRadius: "30px",
          }}
        />
        <Post />
        <Post />
      </Stack>
    </Stack>
  );
}
export default Feed;
