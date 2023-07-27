export const getLike = "SELECT * FROM comments;";
export const getLikeById1 = "SELECT * FROM comments WHERE id = $1;";
export const postLike =
  "INSERT INTO comments (user_id, tweet_id, content) VALUES ($1, $2, $3)";
export const removeLike = "DELETE FROM comments Where id = $1";
export const getLikeUserContent =
  "SELECT c.id, c.user_id, u.username, u.email, u.birthday, c.content AS Content FROM comments c JOIN users u ON c.user_id = u.id WHERE c.user_id = $1";
