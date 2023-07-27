import Router from "express";
import {
  getComments,
  postComments,
  deleteComment,
  getCommentsById,
  getCommentsTheDefinedUser,
} from "../../controllers/comment/index.js";

const router = Router();

router.get("/comments", getComments);
router.post("/comments", postComments);
router.get("/comments/byId/:id", getCommentsById);
router.delete("/comments/:id", deleteComment);
router.get("/comments/:id", getCommentsTheDefinedUser);
export default router;
