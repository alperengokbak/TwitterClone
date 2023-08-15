import React from "react";
import { Button, Stack } from "@mui/material";
import TweetBox from "./TweetBox";
import Post from "./Post";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showMore, setShowMore] = React.useState(true);

  React.useEffect(() => {
    handlePosts();
  }, [currentPage]);

  const handlePosts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/tweet?page=${currentPage}&pageSize=3`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const jsonData = await response.json();
        setPosts((prevPosts) => [...jsonData.items, ...prevPosts]);
        setShowMore(currentPage !== jsonData.totalPages);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleShowMore = async () => {
    console.log("show more");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleDeletePost = (id) => {
    axios
      .delete(`http://localhost:3000/tweet/${id}/`)
      .then((res) => {
        setDeletePost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Stack
      sx={{
        height: "100vh",
        borderRight: "2px solid #e6ecf0",
        borderLeft: "2px solid #e6ecf0",
        overflowY: "scroll",
        minWidth: "fit-content",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
      }}
    >
      <Stack
        sx={{
          position: "-webkit-sticky",
          top: 0,
          zIndex: 100,
          paddingRight: "1px 20px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            paddingTop: "10px",
            paddingLeft: "20px",
            fontWeight: "bold",
          }}
        >
          Home
        </Typography>
        <TweetBox />
        <Divider />
      </Stack>
      <Stack>
        {showMore && (
          <Stack>
            <Button
              className="showMoreButton"
              disabled={!showMore}
              onClick={handleShowMore}
            >
              Show More Tweets
            </Button>
          </Stack>
        )}
        {posts.map((post) => (
          <Post
            key={post.id}
            firstName={post.firstName}
            lastName={post.lastName}
            username={post.username}
            is_verified={post.is_verified}
            creation_date={post.creation_date}
            content={post.content}
            profile_picture={post.profile_picture}
            likes={post.likes}
            retweets={post.retweets}
            image_url={post.image_url}
            id={post.id}
            handleDeletePost={handleDeletePost}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default Feed;
