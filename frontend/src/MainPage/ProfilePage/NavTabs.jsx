import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Box, Tab } from "@mui/material";
import ProfilePost from "./ProfilePost";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function NavTabs({
  userPosts,
  handleDeletePost,
  handleLikes,
  handleUnlike,
  handleRetweet,
  handleRemoveRetweet,
  userLikes,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Profile nav tabs"
        variant="fullWidth"
        centered
        sx={{
          "&:hover": {
            color: "#1DA1F2",
          },
        }}
      >
        <Tab label="Posts" />
        <Tab label="Replies" />
        <Tab label="Highlights" />
        <Tab label="Media" />
        <Tab label="Likes" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
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
            isRetweeted={post.retweeted}
            handleDeletePost={handleDeletePost}
            handleLikePost={handleLikes}
            handleUnlikePost={handleUnlike}
            handleRetweet={handleRetweet}
            handleRemoveRetweet={handleRemoveRetweet}
          />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}></CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* Render the content for the Highlights tab */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {/* Render the content for the Media tab */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        {userLikes.map((post) => (
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
            isRetweeted={post.retweeted}
            handleDeletePost={handleDeletePost}
            handleLikePost={handleLikes}
            handleUnlikePost={handleUnlike}
            handleRetweet={handleRetweet}
            handleRemoveRetweet={handleRemoveRetweet}
          />
        ))}
      </CustomTabPanel>
    </Box>
  );
}
