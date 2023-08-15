import React from "react";
import { Button, Stack, Avatar, TextField, Grid, Box } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { TweetBoxIcon } from "../Sidebar/TweetBoxAndPostIcons";
import axios from "axios";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";
import Modal from "@mui/material/Modal";
import { AddImageButton } from "./AddImageButton";

// TODO - Pagination nedir ? Ve bunu projeye implement et.
// TODO - Refetch, cache nedir ? Ve bunlar nasıl çalışır ? Bir tanesini projeye implement et.
// TODO - Hook ile logged user döndürme işlemini implement et.
// TODO - Widget component'ini düzelt. (Search box'ı ve paper'ı sağa kaydır. Box shadow'u azalt. Hover ekle.)

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "15%",
  height: "10%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

function TweetBox() {
  const [open, setOpen] = React.useState(false);
  const [tweetMessage, setTweetMessage] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const { user } = React.useContext(AuthContext);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleImgUrl = (text) => {
    setImageUrl(text);
  };

  const postTweet = async () => {
    try {
      const response = await axios.post("http://localhost:3000/tweet", {
        user_id: user.id,
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
    <>
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
              </Grid>
              {/* <Grid item>
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
              </Grid> */}
            </Grid>
          </Stack>
          <Stack flexDirection={"row"} marginLeft="auto">
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
              <TweetBoxIcon
                handleOpen={handleOpen}
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
              disabled={tweetMessage === ""}
            >
              Post
            </Button>
          </Stack>
        </form>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddImageButton onSave={handleImgUrl} onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}

export default TweetBox;
