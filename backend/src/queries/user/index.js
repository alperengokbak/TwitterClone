export const getUser = "SELECT * FROM users;";
export const getUserById1 = "SELECT * FROM users WHERE id = $1;";
export const postUser =
  "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
export const removeUser = "DELETE FROM users Where id = $1";
export const checkEmail = "SELECT * FROM users WHERE email = $1";
