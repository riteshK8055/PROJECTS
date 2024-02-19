 import mongoose from "mongoose";
 
 
console.log(process.env.PORT);
console.log(process.env.MONGO_URI);
 export const connnectDB = ()=>{

    mongoose.connect(process.env.MONGO_URI, {

        dbName:"todo",
    })
    .then(()=>console.log("DATABASE CONNECTED")) 
    .catch((e)=>console.log(e));
};

