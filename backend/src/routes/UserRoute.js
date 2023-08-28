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
router.get("/checkuser", checkUser);
router.delete("/delete/:id", deleteUser);

export default router;
