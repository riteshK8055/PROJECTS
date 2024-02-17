import express from "express";

import {getAllUsers,
   getUserDetail, 
   register, 
   specialFunc
  }  
  from "../controllers/user.controller.js";

const router = express.Router();


router.get("/all" , getAllUsers);


  router.get("/userid/special",specialFunc);


  router.get("/userid/:id", getUserDetail );


  router.post("/new",register );



export default router;