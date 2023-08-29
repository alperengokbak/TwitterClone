export const userInformations =
  "SELECT id, firstname, lastname, username, profile_picture, birthday, is_verified, profile_wallpaper FROM users WHERE username = $1";
export const checkUsername =
  "SELECT id, username FROM users WHERE username = $1";
export const updateProfile =
  "UPDATE users SET firstname = $1, lastname = $2, username = $3, email = $4, profile_picture = $5, birthday = $6 WHERE id = $7";
export const updatePassword = "UPDATE users SET password = $1 WHERE id = $2";
export const updateProfilePicture =
  "UPDATE users SET profile_picture = $1 WHERE id = $2";
export const updateCoverPicture =
  "UPDATE users SET cover_picture = $1 WHERE id = $2";

export const getFollowedCount =
  "SELECT COUNT(*) FROM followers WHERE follower_user_id = $1";
export const getFollowersCount =
  "SELECT COUNT(*) FROM followers WHERE followed_user_id = $1";

export const followUp =
  "INSERT INTO followers (follower_user_id, followed_user_id) VALUES ($1, $2)";

export const unfollowUp =
  "DELETE FROM followers WHERE follower_user_id = $1 AND followed_user_id = $2";

export const checkFollow =
  "SELECT * FROM followers WHERE follower_user_id = $1 AND followed_user_id = $2";

export const checkLike = "SELECT * FROM likes WHERE user_id = $1";

export const displayUserPost =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.id, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM tweets t JOIN users u ON u.id = t.user_id WHERE u.id = $1 ORDER BY creation_date DESC";

export const checkRetweet2 = "SELECT tweet_id FROM retweets WHERE user_id = $1";

export const likedPost =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.id, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM likes l JOIN tweets t ON t.id = l.tweet_id JOIN users u ON t.user_id = u.id WHERE l.user_id = $1 ORDER BY creation_date DESC";
