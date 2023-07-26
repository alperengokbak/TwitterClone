import Router from "express";
import {
  getUsers,
  getUserById,
  postUsers,
  deleteUser,
} from "../../controllers/user/index.js";

const router = Router();

router.get("/users", getUsers);
router.post("/users", postUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUser);

export default router;
