import React from "react";
import { Grid, Stack, Typography, SvgIcon, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";
import { Link } from "react-router-dom";
import NavTabs from "./NavTabs";
import axios from "axios";
import ProfilePost from "./ProfilePost";

/*
TODO - image geç yükleniyor
*/
export const Profile = () => {
  const [userProfile, setUserProfile] = React.useState([]);
  const [userPosts, setUserPosts] = React.useState([]);
  const { user } = React.useContext(AuthContext);
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;

  const handleUserInformation = async () => {
    await axios
      .get(`http://localhost:3000/profile/${user.id}`)
      .then((response) => {
        setUserProfile(response.data);
      });
  };
  React.useEffect(() => {
    handleUserInformation();
    handleUserPosts();
  }, []);
  console.log(userProfile);
  console.log(userProfile[0]?.profile_picture);

  const handleUserPosts = async () => {};

  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        height: "100vh",
        overflowY: "scroll",
        minWidth: "fit-content",
        WebkitOverflowScrolling: "touch",
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
              6 posts
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
                    src={userProfile[0]?.profile_picture}
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
                    to="/settings/profile"
                    className="editProfileButton"
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
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="#000000"
                      fontWeight="bold"
                    >
                      Edit profile
                    </Typography>
                  </Link>
                </Stack>
                <Stack flexDirection="column" m="24px 0px 8px 16px">
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {userProfile[0]?.firstname} {userProfile[0]?.lastname}
                  </Typography>
                  <Typography
                    variant="span"
                    sx={{
                      color: "#808080",
                      fontSize: "15px",
                      mb: 2,
                    }}
                  >
                    @{userProfile[0]?.username}
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
                      {new Date(user?.creation_date).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                        }
                      )}
                    </Typography>
                  </Stack>
                  <Stack flexDirection="row" alignItems="center">
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
                      Born {userProfile[0]?.birthday.split("T")[0]}
                    </Typography>
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
              {userProfile.map((post) => (
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
                  /* handleDeletePost={handleDeletePost}
                  handleLikePost={handleLikes}
                  handleUnlikePost={handleUnlike}
                  handleRetweet={handleRetweet} */
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};