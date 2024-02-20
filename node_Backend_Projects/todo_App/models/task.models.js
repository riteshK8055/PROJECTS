import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({

    name:{

        type:String,
        required:true
    },

    email:{

        type:String,
        required: true,
        unique: true
    },

    password:{

        type:String,
        required:true,
        select:false
    }
},
    
    {timestamps:true}
);


export const Task = mongoose.model("Task", taskSchema);