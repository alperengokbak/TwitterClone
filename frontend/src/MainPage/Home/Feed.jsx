import React from "react";
import { Stack } from "@mui/material";
import TweetBox from "./TweetBox";
import Post from "./Post";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

function Feed() {
  const [isUsername, setIsUsername] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const handlePosts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/tweet`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const jsonData = await response.json();
          setPosts(jsonData);
          setIsUsername(true);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    handlePosts();
  }, []);

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
        {isUsername ? (
          <Stack>
            {posts.map((post, index) => (
              <Post
                key={index}
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
              />
            ))}
          </Stack>
        ) : (
          ""
        )}
      </Stack>
    </Stack>
  );
}
export default Feed;
