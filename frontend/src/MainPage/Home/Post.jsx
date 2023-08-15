import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Verified from "@mui/icons-material/Verified";
import RepeatIcon from "@mui/icons-material/Repeat";
import PublishIcon from "@mui/icons-material/Publish";
import { PostComponentIcon } from "../Sidebar/TweetBoxAndPostIcons";
import { CurrentDateFormat } from "./CurrentDateFormat";

// TODO - Create a Profile Page, redirect the profile page when the user clicks on the username

function Post({
  firstName,
  lastName,
  username,
  is_verified,
  creation_date,
  content,
  profile_picture,
  image_url,
  id,
  handleDeletePost,
}) {
  return (
    <Stack
      borderBottom="2px solid #e6ecf0"
      marginBottom="10px"
      alignItems="flex-start"
      padding="10px"
    >
      <Stack direction="row">
        <Avatar src={profile_picture} />
        <Stack paddingLeft="10px" flexDirection="column">
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              {firstName} {lastName}
            </Typography>
            {is_verified ? (
              <Verified
                sx={{
                  m: 0.3,
                  marginLeft: "5px",
                  color: "#1DA1F2",
                  width: "15px",
                  height: "15px",
                  cursor: "pointer",
                }}
              />
            ) : (
              ""
            )}
            <Typography
              variant="body2"
              component="span"
              justifyItems={"center"}
              sx={{
                color: "gray",
                fontSize: "15px",
                fontWeight: "400",
                cursor: "pointer",
                marginLeft: is_verified ? "1px" : "5px",
              }}
              onClick={() => console.log("Clicked")}
            >
              @{username} · {CurrentDateFormat(creation_date)}
            </Typography>
            <MoreHorizIcon
              className="more_postScreen"
              onClick={() => handleDeletePost(id)}
            />
          </Stack>
          <Typography
            variant="body2"
            sx={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            {content}
          </Typography>
          {image_url && (
            <Stack direction={"column"} justifyContent="flex-start">
              <img
                style={{
                  borderRadius: "15px",
                  marginTop: "15px",
                  width: "100%",
                  height: "100%",
                }}
                src={image_url}
              />
            </Stack>
          )}
          <Stack
            direction="row"
            justifyContent="space-between"
            marginTop={"20px"}
            marginRight={"20px"}
            paddingTop="10px"
            width="50vh"
            height="100%"
          >
            <PostComponentIcon text="Reply" Icon={ChatBubbleOutlineIcon} />
            <PostComponentIcon text="Retweet" Icon={RepeatIcon} />
            <PostComponentIcon text="Like" Icon={FavoriteBorderIcon} />
            <PostComponentIcon text="Share" Icon={PublishIcon} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Post;
