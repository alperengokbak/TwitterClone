import Router from "express";
import {
  becomeVerifiedUser,
  cancelVerifiedUser,
} from "../controllers/UserController.js";
import { isAuthorized } from "../middleware.js";

const router = Router();
router.use(isAuthorized);

router.put("/becomeverifieduser", becomeVerifiedUser);
router.put("/cancelVerifiedUser", cancelVerifiedUser);

export default router;
