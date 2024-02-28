import express from "express";
import { config } from "dotenv";
import urlRoute from "./routes/url.route.js";
import bodyParser from "body-parser";


export const app = express();

config({

    path: "./data/config.env",
});

app.use(bodyParser.json());
app.use("/url",urlRoute);