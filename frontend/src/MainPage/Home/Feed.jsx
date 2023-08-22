import React from "react";
import { Button, Stack } from "@mui/material";
import TweetBox from "./TweetBox";
import Post from "./Post";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { AuthContext } from "../../AuthenticationSystem/AuthenticationSystem";

// Bir postu beğenip, diğer postuda beğendiğinde isLiked true oluyor. Bu yüzden beğen butonu kırmızı oluyor. Ve düzelmiyor.
function Feed() {
  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showMore, setShowMore] = React.useState(true);
  const { user } = React.useContext(AuthContext);
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const jsonData = await response.json();
        setPosts((prevPosts) => [...prevPosts, ...jsonData.items]);
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

  const handleDeletePost = async (id) => {
    await axios
      .delete(`http://localhost:3000/tweet/${id}/`)
      .then((res) => {
        setDeletePost(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleUnlike = async (id) => {
    await axios
      .delete(`http://localhost:3000/tweet/unlike`, {
        data: {
          user_id: user.id,
          tweet_id: id,
        },
      })
      .catch((err) => console.log(err));
  };

  const handleLikes = async (id) => {
    await axios
      .post(`http://localhost:3000/tweet/like`, {
        user_id: user.id,
        tweet_id: id,
      })
      .catch((err) => console.log(err));
  };
  const handleRetweet = async () => {};

  return (
    <Stack
      sx={{
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
      <Stack
        sx={{
          zIndex: 100,
          position: "-webkit-sticky",
          top: 0,
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
        <Divider />
        <TweetBox />
      </Stack>
      <Divider />
      <Stack>
        {posts.map((post) => (
          <Post
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
      </Stack>
    </Stack>
  );
}

export default Feed;
