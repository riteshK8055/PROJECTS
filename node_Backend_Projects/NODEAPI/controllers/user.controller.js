import { User } from "../models/user.models.js";

export const getAllUsers = async(req,res)=>{

    const users=await User.find({})
      
  
  
      res.json({
  
          success:true,
          users,
      }); 
 };


 export const register = async(req,res)=>{

    const{name,email,password} = req.body;
     await User.create({

        name,  
        email,
        password
    });

    res.status(201).cookie("tempi","lol").json({

        success:true,
        message:"Registered Successfully",
    });
};


export const specialFunc = (req,res)=>{

    res.json({

        success:true,
        message:"just joking",
    });
  };



export const getUserDetail = async (req,res)=>{

    const {id} = req.params;
    const user = await User.findById(id);


    res.json({

        success:true,
        user,
    });
  };