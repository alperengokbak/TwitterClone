import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Verified from "@mui/icons-material/Verified";
import RepeatIcon from "@mui/icons-material/Repeat";
import PublishIcon from "@mui/icons-material/Publish";
import { PostComponentIcon } from "../Sidebar/TweetBoxAndPostIcons";

// TODO - Improve the styling of the Post component
// TODO - Create a Profile Page, redirect the profile page when the user clicks on the username

function Post({ displayName, username, verified, text, image, avatar }, ref) {
  return (
    <Stack
      borderBottom="2px solid #e6ecf0"
      marginBottom="10px"
      alignItems="flex-start"
      padding="20px"
    >
      <Stack direction="row" alignItems="flex-start" justifyItems="flex-start">
        <Avatar src="IMG_9021.jpeg" />
        <Stack paddingLeft="20px" flexDirection="column">
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
              }}
              onClick={() => console.log("Clicked")}
            >
              Alperen Gokbak
            </Typography>
            <Verified
              sx={{
                color: "#1DA1F2",
                width: "15px",
                height: "15px",
                cursor: "pointer",
              }}
              onClick={() => console.log("Clicked")}
            />
            <Typography
              variant="body2"
              component="span"
              sx={{
                color: "gray",
                fontSize: "15px",
                fontWeight: "400",
                cursor: "pointer",
              }}
              onClick={() => console.log("Clicked")}
            >
              @alperengokbak
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{
                color: "gray",
                fontSize: "15px",
                fontWeight: "400",
                paddingLeft: "5px",
              }}
            >
              1h
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Test
          </Typography>
          <Stack direction={"column"} justifyContent="flex-start">
            <img
              style={{
                borderRadius: "15px",
                marginTop: "15px",
                width: "100%",
                height: "100%",
              }}
              src="https://pbs.twimg.com/media/F2BL9oSWYAQ5fzy?format=webp&name=small"
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              marginTop={"20px"}
              marginRight={"20px"}
              paddingTop="10px"
            >
              <PostComponentIcon text="Reply" Icon={ChatBubbleOutlineIcon} />
              <PostComponentIcon text="Retweet" Icon={RepeatIcon} />
              <PostComponentIcon text="Like" Icon={FavoriteBorderIcon} />
              <PostComponentIcon text="Share" Icon={PublishIcon} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Post;
