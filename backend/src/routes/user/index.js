import Router from "express";
import { register, login, deleteUser } from "../../controllers/user/index.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.delete("/delete/:id", deleteUser);

export default router;
