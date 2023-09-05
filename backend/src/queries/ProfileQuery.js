export const userInformations =
  "SELECT id, firstname, lastname, username, profile_picture, birthday, is_verified, profile_wallpaper, bio, location FROM users WHERE username = $1";
export const checkUsername =
  "SELECT id, username FROM users WHERE username = $1";
export const updateUserProfile =
  "UPDATE users SET firstname = $1, lastname = $2, profile_picture = $3, profile_wallpaper = $4, bio = $5, location = $6 WHERE username = $7";
export const updatePassword = "UPDATE users SET password = $1 WHERE id = $2";
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
  "SELECT u.username, u.firstName, u.lastName, u.profile_picture, u.is_verified,t.id ,t.content,t.image_url,t.creation_date ,t.likes,t.retweets,ru.username AS retweeter_username FROM tweets t JOIN users u ON t.user_id = u.id LEFT JOIN retweets r ON t.id = r.tweet_id AND r.user_id = $1 LEFT JOIN users ru ON r.user_id = ru.id WHERE t.mother_tweet_id IS NULL AND t.user_id = $1 OR r.user_id = $1 ORDER BY t.creation_date DESC";

export const checkRetweet2 = "SELECT tweet_id FROM retweets WHERE user_id = $1";

export const likedPost =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.id, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM likes l JOIN tweets t ON t.id = l.tweet_id JOIN users u ON t.user_id = u.id WHERE t.mother_tweet_id IS NULL AND l.user_id = $1 ORDER BY creation_date DESC";

export const imagePost =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.id, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM users u JOIN tweets t ON u.id = t.user_id WHERE t.mother_tweet_id IS NULL AND t.image_url IS NOT NULL AND u.id = $1 ORDER BY creation_date DESC";

export const retweetedPost =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.id, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM users u JOIN tweets t ON u.id = t.user_id JOIN retweets r ON t.id = r.tweet_id WHERE t.mother_tweet_id IS NULL AND r.user_id = $1 ORDER BY r.creation_date DESC";
