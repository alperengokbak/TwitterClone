import React from "react";
import { Button, Stack, Avatar, TextField, Grid } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { TweetBoxIcon } from "../Sidebar/TweetBoxAndPostIcons";
import axios from "axios";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const postTweet = async () => {
    try {
      const response = await axios.post("http://localhost:3000/tweet", {
        user_id: 1,
        content: tweetMessage,
        image_url: imageUrl,
        likes: 0,
        retweets: 0,
      });

      if (response.status === 201) {
        console.log("Tweet posted successfully!");
        setTweetMessage("");
        setImageUrl("");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

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
          <Grid container direction="column">
            <Grid item>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
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
            </Grid>
            <Grid item>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                placeholder="Enter image URL:"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                multiline
                sx={{
                  flex: 1,
                  marginLeft: "20px",
                  fontSize: "20px",
                }}
              />
            </Grid>
          </Grid>
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
            onClick={postTweet}
            type="submit"
            disabled={tweetMessage === "" && imageUrl === ""}
          >
            Post
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default TweetBox;
