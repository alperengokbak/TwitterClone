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
import axios from "axios";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";

// TODO - TweetBox'a resim ekleyip post atmadan siliyorum, aynı resmi bir daha ekleyemiyorum.
// TODO - Refetch, cache nedir ? Ve bunlar nasıl çalışır ? Bir tanesini projeye implement et.

function TweetBox() {
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
    setImageUrl("");
  };

  const postTweet = async () => {
    try {
      const response = await axios.post("http://localhost:3000/tweet", {
        user_id: user.id,
        content: tweetMessage,
        image_url: imageUrl,
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
            padding: "20px 0px 20px 20px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Avatar alt="Alperen Gokbak" src={user.profile_picture} />
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
              {imageUrl ? (
                <Stack position={"relative"} display={"inline-block"}>
                  <Card
                    sx={{
                      borderRadius: "20px",
                      marginTop: "10px",
                      width: "510px",
                      height: "340px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={imageUrl}
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
            </Grid>
          </Grid>
        </Stack>
        <Stack flexDirection={"row"}>
          <Stack
            color={"#1DA1F2"}
            sx={{
              flexDirection: "row",
              marginRight: "23vh",
              justifyContent: "space-between",
              width: "230px",
              marginLeft: "4.5vh",
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
          </Stack>
          <Button
            variant="contained"
            onClick={postTweet}
            type="submit"
            disabled={tweetMessage === "" && imageUrl === ""}
          >
            Post
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelected}
          />
        </Stack>
      </form>
    </Stack>
  );
}

export default TweetBox;
