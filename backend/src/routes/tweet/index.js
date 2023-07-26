import Router from "express";
import {} from "../../controllers/tweet/index.js";

const router = Router();

router.get("/tweets");
router.post("/tweets");

export default router;
