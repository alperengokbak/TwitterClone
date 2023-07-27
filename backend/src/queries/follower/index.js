export const getFollower = "SELECT * FROM followers;";
export const getFollowerById1 = "SELECT * FROM followers WHERE id = $1;";
export const postFollower =
  "INSERT INTO followers (follower_user_id, followed_user_id) VALUES ($1, $2)";
export const removeFollower = "DELETE FROM followers Where id = $1";
export const getFollowerUser =
  "SELECT f.follower_user_id, uf.username AS follower_username, ut.username AS followed_username, f.follow_date FROM followers f JOIN users uf ON f.follower_user_id = uf.id JOIN users ut ON f.followed_user_id = ut.id WHERE f.follower_user_id = $1;";
