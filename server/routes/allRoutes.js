import express from "express";

import {
  getHomeData,
  createNewUserData,
  updateUserData,
} from "../controllers/noteCafe.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getHomeData);
router.post("/", auth, createNewUserData);
router.patch("/:id", auth, updateUserData);
export default router;
