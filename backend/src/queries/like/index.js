export const getLike = "SELECT id as like_id, user_id, tweet_id FROM likes;";
export const getLikeById1 = "SELECT * FROM likes WHERE id = $1;";
export const postLike = "INSERT INTO likes (user_id, tweet_id) VALUES ($1, $2)";
export const removeLike = "DELETE FROM likes WHERE id = $1";
export const getLikeUserContent =
  "SELECT l.id AS like_id, u.id AS user_id, u.username, u.email FROM likes l JOIN users u ON l.user_id = u.id WHERE l.user_id = $1";
export const getLikeTweetContent =
  "SELECT l.id AS like_id, t.id as tweets_id, t.content, t.creation_date FROM likes l JOIN tweets t ON l.tweet_id = t.id WHERE l.tweet_id = $1";
