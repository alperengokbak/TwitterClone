import React from "react";
import { Avatar, Box, Stack } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Verified from "@mui/icons-material/Verified";
import RepeatIcon from "@mui/icons-material/Repeat";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }, ref) {
  return (
    <Stack
      borderBottom="1px solid #1DA1F2"
      marginBottom="10px"
      alignItems="flex-start"
    >
      <Box>
        <Stack
          display="flex"
          direction="row"
          padding="20px"
          justifyContent="space-between"
        >
          <Avatar sx={{}} src="IMG_9021.jpeg" />
          <Stack display="flex" direction="column" flex={1} padding="10px">
            <Stack display="flex" direction="row">
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginBottom: "5px",
                }}
              >
                Alperen Gokbak
              </h4>
              <Verified
                sx={{
                  marginLeft: "5px",
                  marginTop: "5px",
                  color: "#1DA1F2",
                  width: "15px",
                  height: "15px",
                }}
              />
              <span
                style={{
                  color: "gray",
                  fontSize: "15px",
                  fontWeight: "400",
                  marginLeft: "5px",
                }}
              >
                @alperengokbak
              </span>
            </Stack>
            <p
              style={{
                marginBottom: "15px",
                fontSize: "15px",
              }}
            >
              Test
            </p>
            <img
              style={{
                borderRadius: "20px",
                marginTop: "20px",
                width: "100%",
                height: "100%",
                marginBottom: "20px",
              }}
              src="https://pbs.twimg.com/media/F2BL9oSWYAQ5fzy?format=webp&name=small"
            />
            <Stack
              display="flex"
              position="relative"
              alignItems="stretch"
              direction="row"
              justifyContent="space-between"
              marginTop="20px"
              border="0 solid #1DA1F2"
              boxSizing={{ xs: "border-box", md: "content-box" }}
            >
              <ChatBubbleOutlineIcon />
              <RepeatIcon />
              <FavoriteBorderIcon />
              <PublishIcon />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Post;
