import React from "react";
import {
  Button,
  Stack,
  Avatar,
  TextField,
  Grid,
  IconButton,
  Card,
  CardMedia,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CloseIcon from "@mui/icons-material/Close";
import { TweetBoxIcon } from "../Sidebar/TweetBoxAndPostIcons";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";

function TweetBox({ postTweet }) {
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const { user } = React.useContext(AuthContext);
  const fileInputRef = React.useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const selectedFile = event.target.files[0];
    selectedFile && setImageUrl(URL.createObjectURL(selectedFile));
  };

  const handleClearImage = () => {
    fileInputRef.current.value = "";
    setImageUrl("");
  };

  const handlePostTweet = (e) => {
    e.preventDefault();
    postTweet(imageUrl, tweetMessage);
    setTweetMessage("");
    setImageUrl("");
  };

  return (
    <Stack padding={1}>
      <form
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack padding="16px 8px 16px 8px" flexDirection="row">
          <Avatar
            className="Profile Image"
            alt="Alperen Gokbak"
            src={user.profile_picture}
          />
          <Stack direction={"column"}>
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
                marginLeft: 3,
                fontSize: "20px",
              }}
            />
            {imageUrl ? (
              <Stack
                position={"relative"}
                display={"inline-block"}
                alignItems="flex-start"
                marginLeft={1}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    marginTop: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    src={imageUrl}
                    alt="Image"
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                  <IconButton aria-label="close" onClick={handleClearImage}>
                    <CloseIcon
                      sx={{
                        height: "20px",
                        width: "20px",
                        color: "#FFFFFF",
                      }}
                    />
                  </IconButton>
                </Card>
              </Stack>
            ) : (
              ""
            )}
          </Stack>
        </Stack>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                marginLeft: 6.5,
              }}
            >
              <TweetBoxIcon
                handleOpen={handleFileUpload}
                text="ImageIcon"
                Icon={ImageIcon}
              />
              <TweetBoxIcon text="GifIcon" Icon={GifIcon} />
              <TweetBoxIcon text="PollIcon" Icon={PollIcon} />
              <TweetBoxIcon text="EmojiEmotionsIcon" Icon={EmojiEmotionsIcon} />
              <TweetBoxIcon text="ScheduleIcon" Icon={ScheduleIcon} />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={handlePostTweet}
              disabled={tweetMessage === "" && imageUrl === ""}
              sx={{
                marginRight: 0.5,
              }}
            >
              Post
            </Button>
          </Grid>
        </Grid>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelected}
        />
      </form>
    </Stack>
  );
}

export default TweetBox;
