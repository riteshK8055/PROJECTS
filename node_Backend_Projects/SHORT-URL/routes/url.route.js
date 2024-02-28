import express from "express";
import { generateShortURL } from "../controllers/url.controller.js";

const router = express.Router();

router.post('/',generateShortURL);

export default router;