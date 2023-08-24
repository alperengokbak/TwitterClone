export const getTweet = "SELECT * FROM tweets";
export const getTweetById1 = "SELECT * FROM tweets WHERE id = $1";
export const postTweet =
  "INSERT INTO tweets (user_id , content, image_url) VALUES ($1, $2, $3) RETURNING *";
export const deleteTweet = "DELETE FROM tweets WHERE id = $1";

export const displayUserPost =
  "SELECT u.firstName, u.lastName, u.username, u.profile_picture, u.is_verified, t.id, t.content, t.image_url, t.creation_date, t.likes, t.retweets FROM tweets t JOIN users u ON u.id = t.user_id  ORDER BY creation_date DESC LIMIT $1 OFFSET $2";

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

export const getRetweetById1 = "SELECT * FROM retweets WHERE id = $1;";
export const removeRetweets = "DELETE FROM retweets WHERE id = $1";
export const getRetweetUserContent =
  " SELECT retweets.id AS retweet_id, retweeter.id AS retweeter_id, retweeter.firstName AS retweeter_firstName, retweeter.lastName AS retweeter_lastName, retweeter.username AS retweeter_username, retweeter.profile_picture AS retweeter_profile_picture, original_tweet.id AS original_tweet_id, original_tweet.user_id AS tweet_author_id, tweet_author.firstName AS tweet_author_firstName, tweet_author.lastName AS tweet_author_lastName, tweet_author.username AS tweet_author_username, original_tweet.content AS original_tweet_content, original_tweet.creation_date AS original_tweet_creation_date, original_tweet.likes AS original_tweet_likes,original_tweet.retweets AS original_tweet_retweets FROM retweets JOIN users AS retweeter ON retweets.user_id = retweeter.id JOIN tweets AS original_tweet ON retweets.tweet_id = original_tweet.id JOIN users AS tweet_author ON original_tweet.user_id = tweet_author.id WHERE retweets.user_id = $1 ORDER BY retweets.id DESC";
//TODO - retweet edilen post'u tekrardan retweet ettiğinde eden kişiyi değil, ilk tweet eden kişiy al
//TODO - Retweet eden kişinin ismini postun üzerine yaz, kullanıcı ettiyse "you" keyword'ünü kullan.
