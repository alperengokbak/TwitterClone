export const getRetweet = "SELECT * FROM retweets;";
export const getRetweetById1 = "SELECT * FROM retweets WHERE id = $1;";
export const postRetweet =
  "INSERT INTO retweets (user_id, tweet_id) VALUES ($1, $2)";
export const removeRetweets = "DELETE FROM retweets WHERE id = $1";
export const getRetweetUserContent =
  "SELECT r.id AS retweet_id, r.user_id, u.username FROM retweets r JOIN users u ON r.user_id = u.id WHERE r.user_id = $1";
export const getRetweetTweetContent =
  "SELECT r.id AS retweet_id, r.tweet_id, t.content, t.likes FROM retweets r JOIN tweets t ON r.tweet_id = t.id WHERE r.tweet_id = $1";
