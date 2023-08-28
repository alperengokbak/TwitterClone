export const getUser = "SELECT * FROM users";
export const getUserById1 = "SELECT * FROM users WHERE id = $1";
export const postUser =
  "INSERT INTO users (firstName, lastName, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *";
export const removeUser = "DELETE FROM users Where id = $1";
export const checkEmail = "SELECT * FROM users WHERE email = $1";
export const navigateProfilePage =
  "SELECT u.id AS user_id, u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.id AS tweet_id, t.user_id AS ownerpost_id, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM users u JOIN tweets t ON t.user_id = u.id WHERE u.id = $1";
