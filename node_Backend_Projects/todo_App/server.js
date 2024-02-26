import {app} from "./app.js";
import { connnectDB } from "./data/database.js";


connnectDB();

app.listen(process.env.PORT,()=>{

    console.log(`server is working on port: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
});