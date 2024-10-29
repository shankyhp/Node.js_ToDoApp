import express from "express"

import {  getMyProfile, login, logout, register } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()



    router.post("/new",register)

    router.post("/login",login)

    router.get("/logout",logout)

    
    
    //  router.get("/userid/:id",getUserDetails)

    //  router.put("/userid/:id",updateUser)

    //  router.delete("/userid/:id",deleteUser) // if id is same with different request just chain them with router.route just like below

     //router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser)

    
  router.get("/me",isAuthenticated,getMyProfile)

export default router