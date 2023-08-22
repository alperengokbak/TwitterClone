import React from "react";
import { Avatar, Stack, Typography, Paper, Grid, Divider } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Verified from "@mui/icons-material/Verified";
import RepeatIcon from "@mui/icons-material/Repeat";
import UploadIcon from "@mui/icons-material/Upload";
import BarChartIcon from "@mui/icons-material/BarChart";
import { PostComponentIcon } from "../Sidebar/TweetBoxAndPostIcons";

function ProfilePost({
  firstName,
  lastName,
  username,
  is_verified,
  creation_date,
  likes,
  retweets,
  content,
  profile_picture,
  image_url,
  id,
  isLiked,
}) {
  return (
    <Stack>
      <Divider
        sx={{
          color: "gray",
        }}
      />
      <Paper style={{ padding: "16px 0px 16px 16px" }}>
        <Grid container spacing={1.3}>
          <Grid item>
            <Avatar
              className="Profile Image"
              alt="Profile Image"
              src={profile_picture}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1.5}>
              <Grid item xs>
                <Stack flexDirection="row">
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {firstName} {lastName}
                    {is_verified ? (
                      <Verified
                        sx={{
                          marginLeft: "5px",
                          color: "#1DA1F2",
                          width: "15px",
                          height: "15px",
                          cursor: "pointer",
                        }}
                      />
                    ) : null}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    alignItems="center"
                    sx={{
                      color: "gray",
                      fontSize: "14px",
                      fontWeight: "400",
                      cursor: "pointer",
                      marginLeft: is_verified ? "1px" : "5px",
                      marginRight: "1vw",
                    }}
                  >
                    @{username} · {/* {CurrentDateFormat(creation_date)} */}
                  </Typography>
                  <MoreHorizIcon
                    sx={{
                      marginLeft: "9vw",
                    }}
                    className="more_postScreen"
                    /* onClick={() => handleDeletePost(id)} */
                  />
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: 1,
                    fontSize: "15px",
                  }}
                >
                  {content}
                </Typography>
                {image_url && (
                  <Stack direction="column" justifyItems="flex-start">
                    <img
                      alt="Post"
                      style={{
                        borderRadius: "16px",
                        marginTop: "15px",
                        maxHeight: "55vh",
                        height: "100%",
                        maxWidth: "55vw",
                        width: "100%",
                      }}
                      src={image_url}
                    />
                  </Stack>
                )}
              </Grid>
              <Grid item>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  paddingTop="10px"
                  width="100%"
                >
                  <PostComponentIcon
                    text="Reply"
                    Icon={ChatBubbleOutlineIcon}
                  />
                  <PostComponentIcon
                    text="Retweet"
                    Icon={RepeatIcon}
                    retweets={retweets}
                    /* handleRetweet={() => handleRetweet()} */
                  />
                  <PostComponentIcon
                    text="Like"
                    Icon={isLiked ? FavoriteIcon : FavoriteBorderIcon}
                    likes={likes}
                    /* handleLikePost={() => {
                      if (isLiked) {
                        handleUnlikePost(id);
                      } else {
                        handleLikePost(id);
                      }
                    }} */
                  />
                  <PostComponentIcon text="View" Icon={BarChartIcon} />
                  <PostComponentIcon text="Upload" Icon={UploadIcon} />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
}

export default ProfilePost;
