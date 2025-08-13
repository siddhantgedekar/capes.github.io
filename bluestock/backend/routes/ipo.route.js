import express from "express";
import { insertIPO, getIPOData } from "../controllers/ipo.controller.js";

const router = express.Router();

router.post('/', insertIPO);
router.get('/', getIPOData);

export default router;