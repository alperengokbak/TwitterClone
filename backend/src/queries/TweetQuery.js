export const getTweet = "SELECT * FROM tweets";
export const getTweetById1 = "SELECT * FROM tweets WHERE id = $1";
export const postTweet =
  "INSERT INTO tweets (user_id, content, likes, retweets, image_url) VALUES ($1, $2, $3, $4, $5)";
export const deleteTweet = "DELETE FROM tweets WHERE id = $1";
export const displayUserPost =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM users u JOIN tweets t ON u.id = t.user_id ORDER BY t.id DESC";
