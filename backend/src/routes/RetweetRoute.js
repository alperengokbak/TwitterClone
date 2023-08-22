import Router from "express";
import {
  getRetweetById,
  deleteRetweets,
  getRetweetsUserContent,
} from "../controllers/RetweetController.js";

const router = Router();

router.get("/byId/:id", getRetweetById);
router.delete("/:id", deleteRetweets);
router.get("/", getRetweetsUserContent);

export default router;
