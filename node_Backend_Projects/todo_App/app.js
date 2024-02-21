import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.router.js"

export const  app = express();


config({

    path: "./data/config.env",
});


app.use(express.json());
 app.use("/api/v1/users", userRouter);