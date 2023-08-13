import React from "react";
import { Button, Stack, Avatar, Divider, Grid } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TextField from "@mui/material/TextField";
import { TweetBoxForPostIcon } from "./TweetBoxAndPostIcons";
import axios from "axios";

export const TweetBoxForPostScreen = () => {
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const postTweet = async () => {
    try {
      const response = await axios.post("http://localhost:3000/tweet", {
        user_id: 7,
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
                  marginLeft: "5%",
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
                  marginLeft: "5%",
                  fontSize: "20px",
                }}
              />
            </Grid>
          </Grid>
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
            color="primary"
            onClick={postTweet}
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
