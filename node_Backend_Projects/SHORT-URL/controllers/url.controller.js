import { nanoid } from "nanoid";
import { URL } from "../models/url.models.js";

export const generateShortURL = async (req,res)=>{

    const body = req.body;

    if(!body.url) return res.status(400).json({

        success:false,
        error:"url is required"
    })

    const shortID = nanoid(8);

    await URL.create({

        
        shortId:shortID,
        redirectURL:body.url,
        visitedHistory : [],

    });


    return res.json({id: shortID});

}

