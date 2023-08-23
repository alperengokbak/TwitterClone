export const getTweet = "SELECT * FROM tweets";
export const getTweetById1 = "SELECT * FROM tweets WHERE id = $1";
export const postTweet =
  "INSERT INTO tweets (user_id , content, image_url) VALUES ($1, $2, $3) RETURNING *";
export const deleteTweet = "DELETE FROM tweets WHERE id = $1";

export const displayUserPost =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.id, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM tweets t JOIN users u ON u.id = t.user_id  ORDER BY creation_date DESC LIMIT $1 OFFSET $2";

export const getTweetCount = "SELECT COUNT(*) FROM tweets";

export const likeTweets2 =
  "INSERT INTO likes (user_id, tweet_id)SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM likes WHERE user_id = $1 AND tweet_id = $2)RETURNING tweet_id";

export const likeIncrease =
  "UPDATE tweets SET likes = likes + 1 WHERE id = $1 RETURNING *";

export const likeDecrease =
  "UPDATE tweets SET likes = likes - 1 WHERE id = $1 RETURNING *";

export const likeTweets =
  "INSERT INTO likes (user_id, tweet_id) VALUES ($1, $2)";

export const unlikeTweets =
  "DELETE FROM likes WHERE user_id = $1 AND tweet_id = $2";

export const checkLike = "SELECT tweet_id FROM likes WHERE user_id = $1 ";

export const checkLike2 =
  "SELECT tweet_id FROM likes WHERE user_id = $1 AND tweet_id = $2";
