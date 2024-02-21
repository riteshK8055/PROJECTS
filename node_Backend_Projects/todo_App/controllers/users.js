import { User } from "../models/users.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// export const login = async(req,res,next) =>{

//     const{name , password} = req.body;
// };



export const register = async(req,res)=>{


    const {name, email, password} = req.body;

    console.log(req.body);
    let user = await User.findOne({email});

    if(user) 

        return res.status(404).json({

            success:false,
            message:"User already Exist",
        });
    

       
        const hashedPassword = await bcrypt.hash(password,10);
        user = await User.create({name , email , password:hashedPassword});

        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);

        res.status(201).cookie("token",token,{
            httpOnly: true,
            maxAge:15*60*1000,

        }).json({

            success :true,
            message: "user registered successfully",
        });

};