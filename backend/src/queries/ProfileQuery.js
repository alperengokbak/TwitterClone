export const userInformation =
  "SELECT firstname, lastname, username, profile_picture, birthday, is_verified FROM users WHERE id = $1";
export const updateProfile =
  "UPDATE users SET firstname = $1, lastname = $2, username = $3, email = $4, profile_picture = $5, birthday = $6 WHERE id = $7";
export const updatePassword = "UPDATE users SET password = $1 WHERE id = $2";
export const updateProfilePicture =
  "UPDATE users SET profile_picture = $1 WHERE id = $2";
export const updateCoverPicture =
  "UPDATE users SET cover_picture = $1 WHERE id = $2";
export const getFollowers = "SELECT * FROM followers WHERE user_id = $1";
export const getFollowings = "SELECT * FROM followers WHERE follower_id = $1";
export const getFollowersCount =
  "SELECT COUNT(*) FROM followers WHERE user_id = $1";
export const getFollowingsCount =
  "SELECT COUNT(*) FROM followers WHERE follower_id = $1";
export const getFollowersUserContent =
  "SELECT followers.id AS follower_id, follower.id AS follower_id, follower.firstName AS follower_firstName, follower.lastName AS follower_lastName, follower.username AS follower_username, follower.profile_picture AS follower_profile_picture, user.id AS user_id, user.firstName AS user_firstName, user.lastName AS user_lastName, user.username AS user_username, user.profile_picture AS user_profile_picture FROM followers JOIN users AS follower ON followers.follower_id = follower.id JOIN users AS user ON followers.user_id = user.id WHERE followers.user_id = $1 ORDER BY followers.id DESC";
export const getFollowingsUserContent =
  "SELECT followers.id AS follower_id, follower.id AS follower_id, follower.firstName AS follower_firstName, follower.lastName AS follower_lastName, follower.username AS follower_username, follower.profile_picture AS follower_profile_picture, user.id AS user_id, user.firstName AS user_firstName, user.lastName AS user_lastName, user.username AS user_username, user.profile_picture AS user_profile_picture FROM followers JOIN users AS follower ON followers.follower_id = follower.id JOIN users AS user ON followers.user_id = user.id WHERE followers.follower_id = $1 ORDER BY followers.id DESC";

export const getTweetCount = "SELECT COUNT(*) FROM tweets";
export const checkLike = "SELECT tweet_id FROM likes WHERE user_id = $1";

export const displayUserPost =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.id, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM tweets t JOIN users u ON u.id = t.user_id  ORDER BY creation_date DESC LIMIT $1 OFFSET $2";

export const displayOwnPost =
  "SELECT t.id, t.content, t.creation_date, t.likes, t.retweets, t.image_url FROM tweets t INNER JOIN users u ON t.user_id = u.id WHERE u.id = $1 OR t.id IN (SELECT rt.tweet_id FROM retweets rt WHERE rt.user_id = $1) ORDER BY t.creation_date DESC";
