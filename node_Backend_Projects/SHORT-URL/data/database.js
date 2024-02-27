import mongoose from "mongoose";


export const connnectDB = ()=>{

    mongoose.connect(process.env.MONGO_URI, {

        dbName:"short_url",
    })
    .then(()=>console.log("DATABASE CONNECTED")) 
    .catch((e)=>console.log(e));
};