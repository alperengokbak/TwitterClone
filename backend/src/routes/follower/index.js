import Router from "express";
import {
  getFollowers,
  getFollowerUserContent,
  postFollowers,
  getFollowerById,
  deleteFollower,
} from "../../controllers/follower/index.js";

const router = Router();

router.get("/followers", getFollowers);
router.get("/followers/:id", getFollowerUserContent);
router.post("/followers", postFollowers);
router.get("/followers/byId/:id", getFollowerById);
router.delete("/followers/:id", deleteFollower);

export default router;
