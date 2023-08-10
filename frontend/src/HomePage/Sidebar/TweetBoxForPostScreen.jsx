import React, { useState } from "react";
import { Button, Stack, Avatar, Divider } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TextField from "@mui/material/TextField";
import { TweetBoxForPostIcon } from "./TweetBoxAndPostIcons";

export const TweetBoxForPostScreen = () => {
  // TODO - Make TweetBoxForPostScreen responsive for mobile devices.
  const [tweetMessage, setTweetMessage] = useState("");
  /*const [tweetImage, setTweetImage] = useState("");

  /* const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Rafeh Qazi",
      username: "cleverqazi",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    });

    setTweetMessage("");
    setTweetImage("");
  }; */

  return (
    <Stack
      sx={{
        paddingBottom: "10px",
        paddingRight: "10px",
      }}
    >
      <form
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Avatar alt="Alperen Gokbak" src="..//public/IMG_9021.jpeg" />
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            rows={4}
            multiline
            sx={{
              flex: 1,
              marginLeft: "5%",
              fontSize: "20px",
            }}
          />
        </Stack>
        <Divider
          variant="fullWidth"
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#808080",
            border: "none",
          }}
          textAlign="left"
        />
        <Stack flexDirection={"row"} marginTop="20px" alignItems={"center"}>
          <Stack
            color={"#1DA1F2"}
            sx={{
              flexDirection: "row",
              marginRight: "auto",
              justifyContent: "space-between",
              width: "45%",
            }}
          >
            <TweetBoxForPostIcon text="ImageIcon" Icon={ImageIcon} />
            <TweetBoxForPostIcon text="GifIcon" Icon={GifIcon} />
            <TweetBoxForPostIcon text="PollIcon" Icon={PollIcon} />
            <TweetBoxForPostIcon
              text="EmojiEmotionsIcon"
              Icon={EmojiEmotionsIcon}
            />
            <TweetBoxForPostIcon text="ScheduleIcon" Icon={ScheduleIcon} />
          </Stack>
          <Button
            className="tweetBox__tweetButton"
            variant="contained"
            color="secondary"
            //onClick={sendTweet}
            type="submit"
            sx={{
              width: "80px",
              textTransform: "inherit",
            }}
          >
            Post
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
