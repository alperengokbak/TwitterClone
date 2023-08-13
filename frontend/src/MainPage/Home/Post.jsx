import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Verified from "@mui/icons-material/Verified";
import RepeatIcon from "@mui/icons-material/Repeat";
import PublishIcon from "@mui/icons-material/Publish";
import { PostComponentIcon } from "../Sidebar/TweetBoxAndPostIcons";
import { CurrentDateFormat } from "./CurrentDateFormat";

// TODO - Improve the styling of the Post component
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
}) {
  const [currentDate, setCurrentDate] = React.useState("");
  React.useEffect(() => {
    const currentDate = CurrentDateFormat(creation_date);
    setCurrentDate(currentDate);
  }, [creation_date]);
  return (
    <Stack
      borderBottom="2px solid #e6ecf0"
      marginBottom="10px"
      alignItems="flex-start"
      padding="20px"
    >
      <Stack direction="row" alignItems="flex-start" justifyItems="flex-start">
        <Avatar src={profile_picture} />
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
            >
              {firstName} {lastName}
            </Typography>
            {is_verified ? (
              <Verified
                sx={{
                  marginLeft: "1px",
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
              @{username} · {currentDate}
            </Typography>
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
