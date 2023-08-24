import React from "react";
import {
  Grid,
  Stack,
  Typography,
  SvgIcon,
  Avatar,
  Modal,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import Verified from "@mui/icons-material/Verified";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";
import { Link } from "react-router-dom";
import NavTabs from "./NavTabs";
import axios from "axios";
import ProfilePost from "./ProfilePost";
import { EditProfile } from "./EditProfile";

export const Profile = () => {
  const [userInformation, setUserInformation] = React.useState({});
  const [userPosts, setUserPosts] = React.useState([]);
  const [userPostsCount, setUserPostsCount] = React.useState(0);
  const { user } = React.useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;

  React.useEffect(() => {
    handleUserInformation();
    handleUserPosts();
  }, []);

  const handleUserInformation = async () => {
    try {
      const response = await axios.get("http://localhost:3000/profile");
      if (response.status === 200) {
        setUserInformation(response.data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleUserPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/profile/post");
      if (response.status === 200) {
        const jsonData = response.data;
        setUserPosts((prevPosts) => [...prevPosts, ...jsonData.items]);
        setUserPostsCount(jsonData.count);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/tweet/${id}/`);
      if (response.status === 200) {
        setUserPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleLikes = async (id) => {
    await axios
      .post(`http://localhost:3000/tweet/like`, {
        user_id: user.id,
        tweet_id: id,
      })
      .then((res) => {
        setUserPosts((prevPosts) =>
          prevPosts.map((post) => {
            if (post.id === id) {
              return {
                ...post,
                likes: res.data.likes,
                liked: true,
              };
            }
            return post;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnlike = async (id) => {
    await axios
      .delete(`http://localhost:3000/tweet/unlike`, {
        data: {
          user_id: user.id,
          tweet_id: id,
        },
      })
      .then((res) => {
        setUserPosts((prevPosts) =>
          prevPosts.map((post) => {
            if (post.id === id) {
              return {
                ...post,
                likes: res.data.likes,
                liked: false,
              };
            }
            return post;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRetweet = async () => {};

  return (
    <Grid
      flexDirection="row"
      height="100vh"
      overflow="scroll"
      minWidth="fit-content"
      webkitoverflowscrolling="touch"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Grid item>
        {/*Header Section*/}
        <Stack flexDirection="row" alignItems="center">
          <SvgIcon
            className="profileBackButton"
            onClick={() => {
              window.history.back();
            }}
          >
            <ArrowBackIcon />
          </SvgIcon>
          <Stack justifyItems="flex-start" ml={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
              }}
            >
              {user?.firstName} {user?.lastName}
            </Typography>
            <Typography
              variant="span"
              sx={{
                color: "#808080",
                fontSize: "15px",
                mb: 0.5,
              }}
            >
              {userPostsCount} Tweets
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item xs={12}>
            {/*Upside Navbar(Background Image + Details)*/}
            <Grid container flexDirection="column">
              <Grid item xs={12}>
                {/*Profile Background Image*/}
                <img
                  src="IMG_4884.jpeg"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    maxHeight: "200px",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/*Profile Details*/}
                <Stack
                  flexDirection="row"
                  justifyContent="flex-end"
                  position="relative"
                >
                  <Avatar
                    alt="Alperen Gokbak"
                    src={userInformation[0]?.profile_picture}
                    sx={{
                      transform: "translateX(-50%) translateY(-50%)",
                      top: "-5px",
                      left: "80px",
                      overflow: "hidden",
                      position: "absolute",
                      paddingBottom: "100%",
                      padding: "0px",
                      paddingTop: "-50px",
                      width: "128px",
                      height: "128px",
                      border: "4px solid #FFFFFF",
                    }}
                  />
                  <Link
                    to="#"
                    onClick={() => {
                      handleOpen();
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "12px",
                      width: "90px",
                      marginRight: "20px",
                      marginTop: "10px",
                      padding: "10px",
                      backgroundColor: "#FFFFFF",
                      textDecoration: "none",
                      fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderTopStyle: "solid",
                      borderRightStyle: "solid",
                      borderBottomStyle: "solid",
                      borderLeftStyle: "solid",
                      borderTopColor: "rgb(207, 217, 222)",
                      borderRightColor: "rgb(207, 217, 222)",
                      borderBottomColor: "rgb(207, 217, 222)",
                      borderLeftColor: "rgb(207, 217, 222)",
                      borderRadius: "24px",
                      color: "#000000",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Edit profile
                  </Link>
                </Stack>
                <Stack flexDirection="column" m="24px 0px 8px 16px">
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {userInformation[0]?.firstname}{" "}
                    {userInformation[0]?.lastname}
                    {userInformation[0]?.is_verified ? (
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
                    variant="span"
                    sx={{
                      color: "#808080",
                      fontSize: "15px",
                      mb: 2,
                    }}
                  >
                    @{userInformation[0]?.username}
                  </Typography>
                  <Typography variant="body1" fontSize="15px">
                    Yasar University / Software Engineering
                  </Typography>
                  <Stack flexDirection="row" alignItems="center">
                    <LocationOnIcon
                      sx={{
                        fontSize: "15px",
                        color: "#808080",
                        mr: 0.5,
                      }}
                    />
                    <Typography
                      variant="body1"
                      fontSize="15px"
                      alignItems="center"
                    >
                      Florida, USA
                    </Typography>
                  </Stack>
                  <Stack flexDirection="row" alignItems="center">
                    <CalendarMonthIcon
                      sx={{
                        fontSize: "15px",
                        color: "#808080",
                        mr: 0.5,
                      }}
                    />
                    <Typography variant="body1" fontSize="15px">
                      Joined{" "}
                      {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </Typography>
                  </Stack>
                  <Stack flexDirection="row" alignItems="center">
                    {userInformation[0]?.birthday ? (
                      <Stack>
                        <ChildCareIcon
                          sx={{
                            fontSize: "15px",
                            color: "#808080",
                            mr: 0.5,
                          }}
                        />
                        <Typography
                          variant="body1"
                          fontSize="15px"
                          sx={{
                            alignItems: "center",
                          }}
                        >
                          Born ${userInformation[0]?.birthday.split("T")[0]}
                        </Typography>
                      </Stack>
                    ) : null}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {/*NavBar*/}
            <NavTabs user={user.username} />
          </Grid>
          <Grid item xs={12}>
            {/*Downside Navbar(Profile Posts)*/}
            <Stack>
              {userPosts.map((post) => (
                <ProfilePost
                  key={post.id}
                  firstName={post.firstname}
                  lastName={post.lastname}
                  username={post.username}
                  is_verified={post.is_verified}
                  creation_date={post.creation_date}
                  content={post.content}
                  profile_picture={post.profile_picture}
                  likes={post.likes}
                  retweets={post.retweets}
                  image_url={post.image_url}
                  id={post.id}
                  isLiked={post.liked}
                  handleDeletePost={handleDeletePost}
                  handleLikePost={handleLikes}
                  handleUnlikePost={handleUnlike}
                  handleRetweet={handleRetweet}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "650px",
            bgcolor: "background.paper",
            borderRadius: "20px",
            boxShadow: 24,
          }}
        >
          <EditProfile handleClose={handleClose} />
        </Box>
      </Modal>
    </Grid>
  );
};
