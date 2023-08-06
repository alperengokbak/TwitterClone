import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
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
      padding="20px"
    >
      <Stack direction="row" alignItems="flex-start" justifyItems="flex-start">
        <Avatar src="IMG_9021.jpeg" />
        <Stack flex={0.8} paddingLeft="20px" flexDirection="column">
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
          >
            <Typography
              variant="h5"
              component="h4"
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                marginRight: "5px",
              }}
            >
              Alperen Gokbak
            </Typography>
            <Verified
              sx={{
                color: "#1DA1F2",
                width: "15px",
                height: "15px",
              }}
            />
            <Typography
              variant="body2"
              component="span"
              style={{
                color: "gray",
                fontSize: "15px",
                fontWeight: "400",
                marginLeft: "5px",
              }}
            >
              @alperengokbak
            </Typography>
          </Stack>
          <p
            style={{
              marginTop: "5px",
              marginBottom: "1px",
              fontSize: "15px",
            }}
          >
            Test
          </p>
          <Stack direction={"column"} justifyContent="flex-start">
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
              direction="row"
              justifyContent="space-between"
              marginTop="20px"
              border="0 solid #1DA1F2"
              marginRight="10px"
            >
              <ChatBubbleOutlineIcon s />
              <RepeatIcon />
              <FavoriteBorderIcon />
              <PublishIcon />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Post;
