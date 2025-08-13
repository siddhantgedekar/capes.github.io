import express from 'express';
import { createUser, getUser, login } from '../controllers/user.controller.js';

const router = express.Router();

// let's add data
router.post("/", createUser);
// get user details.
router.get("/", getUser);
// get individual
router.post("/login", login);

export default router;