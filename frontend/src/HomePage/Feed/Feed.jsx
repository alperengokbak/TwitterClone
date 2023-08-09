import React from "react";
import { Stack } from "@mui/material";
import TweetBox from "./TweetBox";
import Post from "./Post";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

function Feed() {
  return (
    <Stack
      sx={{
        borderRight: "2px solid #e6ecf0",
        borderLeft: "2px solid #e6ecf0",
        overflowY: "scroll",
        minWidth: "fit-content",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Stack
        sx={{
          position: "-webkit-sticky",
          top: 0,
          zIndex: 100,
          paddingRight: "1px 20px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            paddingTop: "10px",
            paddingLeft: "20px",
            fontWeight: "bold",
          }}
        >
          Home
        </Typography>
        <TweetBox />
        <Divider
          sx={{
            border: "1px solid #e6ecf0",
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
