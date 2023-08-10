import React from "react";
import { Button, Stack, Avatar, TextField } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { TweetBoxIcon } from "../Sidebar/TweetBoxAndPostIcons";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = React.useState("");
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
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            rows={2}
            multiline
            sx={{
              flex: 1,
              marginLeft: "20px",
              fontSize: "20px",
            }}
          />
        </Stack>
        <Stack flexDirection={"row"} marginTop="20px" marginLeft="auto">
          <Stack
            color={"#1DA1F2"}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "auto",
              justifyContent: "space-between",
              width: "230px",
              marginLeft: "45px",
            }}
          >
            <TweetBoxIcon text="ImageIcon" Icon={ImageIcon} />
            <TweetBoxIcon text="GifIcon" Icon={GifIcon} />
            <TweetBoxIcon text="PollIcon" Icon={PollIcon} />
            <TweetBoxIcon text="EmojiEmotionsIcon" Icon={EmojiEmotionsIcon} />
            <TweetBoxIcon text="ScheduleIcon" Icon={ScheduleIcon} />
          </Stack>

          <Button
            variant="contained"
            onClick={() => {
              console.log(tweetMessage);
              setTweetMessage("");
            }}
            /* type="submit" */
            disabled={tweetMessage === ""}
          >
            Post
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default TweetBox;
