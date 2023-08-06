import React from "react";
import { Button, Stack, Avatar } from "@mui/material";
import { PostProcessContext } from "./PostProcessContext";

function TweetBox() {
  const [postProcess, setPostProcess, tweetMessage, setTweetMessage] =
    React.useContext(PostProcessContext);

  const handleModalOpen = () => {
    setPostProcess(true);
  };

  const handleModalClose = () => {
    setPostProcess(false);
  };

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    // Your tweet submission logic here...
    console.log("Tweet message:", tweetMessage);
    setTweetMessage("");
    handleModalClose();
  };

  return (
    <TweetContext.Provider
      value={{
        tweetMessage,
        setTweetMessage,
        isModalOpen,
        handleModalOpen,
        handleModalClose,
        handleTweetSubmit,
      }}
    >
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
            <Avatar alt="Alperen Gokbak" src="..//public/IMG_9021.jpeg" />
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
    </TweetContext.Provider>
  );
}

export default TweetBox;
