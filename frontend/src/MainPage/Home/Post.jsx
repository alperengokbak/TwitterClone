import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Verified from "@mui/icons-material/Verified";
import RepeatIcon from "@mui/icons-material/Repeat";
import UploadIcon from "@mui/icons-material/Upload";
import BarChartIcon from "@mui/icons-material/BarChart";
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
      <MoreHorizIcon
        sx={{
          marginLeft: "auto",
          marginRight: "5px",
        }}
        className="more_postScreen"
        onClick={() => handleDeletePost(id)}
      />
      <Stack
        direction="row"
        sx={{
          padding: "0px 0px 0px 14px",
          width: "100%",
          height: "100%",
        }}
      >
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
            >
              @{username} · {CurrentDateFormat(creation_date)}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              fontSize: "15px",
            }}
          >
            {content}
          </Typography>
          {image_url && (
            <Stack direction={"column"} justifyContent="flex-start">
              <img
                style={{
                  objectFit: "contain",
                  borderRadius: "15px",
                  marginTop: "15px",
                  width: "510px",
                }}
                src={image_url}
              />
            </Stack>
          )}
          <Stack
            direction="row"
            justifyContent="space-between"
            paddingTop="10px"
            width="57vh"
          >
            <PostComponentIcon text="Reply" Icon={ChatBubbleOutlineIcon} />
            <PostComponentIcon text="Retweet" Icon={RepeatIcon} />
            <PostComponentIcon text="Like" Icon={FavoriteBorderIcon} />
            <PostComponentIcon text="View" Icon={BarChartIcon} />
            <PostComponentIcon text="Upload" Icon={UploadIcon} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Post;
