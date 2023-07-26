export const getTweet = "SELECT * FROM tweets";
export const getTweetById1 = "SELECT * FROM tweets WHERE id = $1";
export const postTweet =
  "INSERT INTO tweets (user_id, content, likes, retweets) VALUES ($1, $2, $3, $4)";
export const deleteTweet = "DELETE FROM tweets WHERE id = $1";
