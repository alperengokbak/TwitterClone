export const getTweetById = "SELECT * FROM tweets WHERE id = $1";
export const getTweet = "SELECT * FROM tweets";
export const getTweetById1 = "SELECT * FROM tweets WHERE id = $1";
export const getMainTweetByIdForComment =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.* FROM tweets t JOIN users u ON u.id = t.user_id WHERE t.id = $1";
export const getTweetByIdForComments =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.* FROM tweets t JOIN users u ON u.id = t.user_id WHERE mother_tweet_id = $1 ORDER BY creation_date DESC";
export const postTweet =
  "INSERT INTO tweets (user_id , content, image_url) VALUES ($1, $2, $3) RETURNING *";

export const postComment =
  "INSERT INTO tweets (user_id , content, image_url, mother_tweet_id) VALUES ($1, $2, $3, $4) RETURNING *";

export const displayUserPost =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.id, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM tweets t JOIN users u ON u.id = t.user_id WHERE t.mother_tweet_id IS NULL ORDER BY creation_date DESC LIMIT $1 OFFSET $2";

export const getTweetCount = "SELECT COUNT(*) FROM tweets";

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

export const checkBookmark =
  "SELECT tweet_id FROM bookmarks WHERE user_id = $1";

export const checkBookmark2 =
  "SELECT tweet_id FROM bookmarks WHERE user_id = $1 AND tweet_id = $2";

export const checkRetweet2 = "SELECT tweet_id FROM retweets WHERE user_id = $1";

export const checkRetweet =
  "SELECT tweet_id FROM retweets WHERE user_id = $1 AND tweet_id = $2";

export const retweet =
  "INSERT INTO retweets (user_id, tweet_id) VALUES ($1, $2)";

export const undoRetweet =
  "DELETE FROM retweets WHERE user_id = $1 AND tweet_id = $2";

export const retweetIncrease =
  "UPDATE tweets SET retweets = retweets + 1 WHERE id = $1 RETURNING *";

export const retweetDecrease =
  "UPDATE tweets SET retweets = retweets - 1 WHERE id = $1 RETURNING *";

export const displayBookmarks =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.* FROM users u JOIN ( SELECT DISTINCT t1.* FROM tweets t1 JOIN bookmarks b ON t1.id = b.tweet_id WHERE b.user_id = $1 ) AS t ON u.id = t.user_id ORDER BY t.creation_date DESC";

export const addTweetToBookmark =
  "INSERT INTO bookmarks (user_id, tweet_id) VALUES ($1, $2)";

export const removeTweetFromBookmark =
  "DELETE FROM bookmarks WHERE user_id = $1 AND tweet_id = $2";

export const increaseBookmarkCount =
  "UPDATE tweets SET bookmarkscount = bookmarkscount + 1 WHERE id = $1 RETURNING *";

export const decreaseBookmarkCount =
  "UPDATE tweets SET bookmarkscount = bookmarkscount - 1 WHERE id = $1 RETURNING *";

export const clearAllBookmark =
  "DELETE FROM bookmarks WHERE user_id = $1 RETURNING *";

export const clearAllBookmarkCount =
  "UPDATE tweets SET bookmarkscount = bookmarkscount - 1 WHERE id = ANY($1::int[])";
