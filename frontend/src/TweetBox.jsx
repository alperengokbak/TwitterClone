import React from "react";
import { Button, Stack, Avatar } from "@mui/material";

function TweetBox() {
  /* const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState(""); */

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
        borderBottom: "3px solid #1DA1F2",
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
          <Avatar alt="Travis Howard" src="..//public/IMG_9021.jpeg" />
          <input
            placeholder="What's happening?"
            type="text"
            style={{
              flex: 1,
              marginLeft: "20px",
              fontSize: "20px",
              border: "none",
              outline: "none",
            }}
          />
        </Stack>
        <Button
          color="secondary"
          //onClick={sendTweet}
          type="submit"
          sx={{
            background: "#1DA1F2",
            border: "none",
            borderRadius: "30px",
            fontWeight: "900",
            marginTop: "20px",
            marginLeft: "auto",
            height: "40px",
            width: "80px",
            textTransform: "inherit",
          }}
        >
          Tweet
        </Button>
      </form>
    </Stack>
  );
}

export default TweetBox;
