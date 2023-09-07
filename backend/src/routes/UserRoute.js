import Router from "express";
import {
  register,
  login,
  deleteUser,
  checkUser,
  becomeVerifiedUser,
  cancelVerifiedUser,
} from "../controllers/UserController.js";

const router = Router();

router.post("/login", login);
router.put("/register", register);
router.put("/becomeverifieduser", becomeVerifiedUser);
router.post("/cancelVerifiedUser", cancelVerifiedUser);
router.get("/checkuser", checkUser);
router.delete("/delete/:id", deleteUser);

export default router;
