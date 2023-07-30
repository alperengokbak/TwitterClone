import React from "react";
import { Stack } from "@mui/material";

function Feed() {
  return (
    <Stack
      sx={{
        flex: "0.4",
        overflowY: "scroll",
        borderRight: "1px solid #e6ecf0",
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
          position: "sticky",
          top: 0,
          backgroundColor: "#FFFFFF",
          zIndex: 100,
          borderRight: "1px solid #e6ecf0",
          padding: "15px 20px",
        }}
      >
        <h2>Home</h2>
      </Stack>
    </Stack>
  );
}
export default Feed;
