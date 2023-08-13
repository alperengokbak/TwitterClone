import Router from "express";
import {
  register,
  login,
  deleteUser,
  checkUser,
} from "../controllers/UserController.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.delete("/delete/:id", deleteUser);
router.get("/checkuser", checkUser);

export default router;
