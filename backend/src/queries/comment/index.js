export const getComment = "SELECT * FROM comments;";
export const getCommentById1 = "SELECT * FROM comments WHERE id = $1;";
export const postComment =
  "INSERT INTO comments (user_id, tweet_id, content) VALUES ($1, $2, $3)";
export const removeComment = "DELETE FROM comments Where id = $1";
export const getCommentUserContent =
  "SELECT c.id, c.user_id, u.username, u.email, u.birthday, c.content AS Content FROM comments c JOIN users u ON c.user_id = u.id WHERE c.user_id = $1";
