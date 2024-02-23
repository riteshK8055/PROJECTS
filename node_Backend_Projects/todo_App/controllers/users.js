import { User } from "../models/users.models.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";


//Login User

export const login = async(req,res,next) =>{

    const{email , password} = req.body;

    const user = await User.findOne({email}).select("+password");

    if(!user) 

        return res.status(404).json({

            success:false,
            message:"Invalid Email or Password",
        });


        const isMatch = await bcrypt.compare(password , user.password);

        if(!isMatch)

        return res.status(404).json({

            success:false,
            message:"Invalid Email or Password",
        });

    
        sendCookie(user,res,`welcome back, ${user.name}`,200);
          
};


//Register User
export const register = async(req,res)=>{


    const {name, email, password} = req.body;

    let user = await User.findOne({email});

    if(user) 

        return res.status(404).json({

            success:false,
            message:"User already Exist",
        });
    

       
        const hashedPassword = await bcrypt.hash(password,10);
        user = await User.create({name , email , password:hashedPassword});

        sendCookie(user,res,"Registered Successfully",201);
        
};

//get user details

export const getMyProfile = async(req,res,next)=>{


    res.status(200).json({

        success:true,
        user:req.user,
    });


};

//Logout

export const logout = async(req,res,next) =>{

    res.status(200)
    .cookie("token", "", {expires:new Date(Date.now()) })
    .json({

        success:true,
        user:req.user,
    });
};