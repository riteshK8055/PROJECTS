import express from "express";
import { config } from "dotenv";
import taskRouter from "./routes/task.router.js";
import userRouter from "./routes/user.router.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";

export const  app = express();



config({

    path: "./data/config.env",
});


app.use(express.json());
app.use(cookieParser());

 app.use("/api/v1/users", userRouter);  
 app.use("/api/v1/task",taskRouter);

 app.use(errorMiddleware);