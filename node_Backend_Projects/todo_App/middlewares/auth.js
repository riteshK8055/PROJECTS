import { request } from "express";
import { User } from "../models/users.models.js";
import jwt from "jsonwebtoken";


export const isAuthenticated = async(req,res,next)=>{

    console.log(req.cookies);
    const {token} = req.cookies;

    if(!token) 

    return res.status(404).json({

        success:false,
        message:"Login First",
    });

    const decoded = jwt.verify(token , process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    next();

};