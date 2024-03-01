import express from "express";
import { config } from "dotenv";
import urlRoute from "./routes/url.route.js";
import bodyParser from "body-parser";
import { URL } from "./models/url.models.js";


export const app = express();

config({

    path: "./data/config.env",
});

app.use(bodyParser.json());
app.use("/url",urlRoute);

app.get('/:shortId', async (req,res)=>{

    const shortId  = req.params.shortId;

  const entry =  await URL.findOneAndUpdate({

        shortId,
    }, 
      
       {
           $push: {

              visitHistory: {

                timestamp : Date.now(),
              }
    
            },

        }
    
  );

  res.redirect(entry.redirectURL);

});