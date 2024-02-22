import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.router.js"
import cookieParser from "cookie-parser";

export const  app = express();



config({

    path: "./data/config.env",
});


app.use(express.json());
app.use(cookieParser());
 app.use("/api/v1/users", userRouter);