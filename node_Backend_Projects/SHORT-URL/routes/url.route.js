import express from "express";
import { generateShortURL, handleGetAnalytics } from "../controllers/url.controller.js";

const router = express.Router();

router.post('/',generateShortURL);

router.get("/analytics/:shortId",handleGetAnalytics);

export default router;