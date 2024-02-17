import  express  from "express";
import userRouter from "./routes/user.route.js"
import { config } from "dotenv";


export const app = express();


config({

    path:"./data/config.env",
});


//using middleware
app.use(express.json());
app.use("/users",userRouter);