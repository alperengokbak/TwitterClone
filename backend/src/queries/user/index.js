export const getUser = "SELECT * FROM users;";
export const getUserById1 = "SELECT * FROM users WHERE id = $1;";
export const postUser =
  "INSERT INTO users (username, email, password, profile_picture, birthday) VALUES ($1, $2, $3, $4, $5)";
export const removeUser = "DELETE FROM users Where id = $1";
