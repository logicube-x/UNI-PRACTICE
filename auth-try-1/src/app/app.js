import express from "express"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js";
import mongoose, { mongo } from "mongoose";
import { authenticate } from "../middleware/auth.middleware.js";
import dotenv from "dotenv"
import bycrypt from "bcryptjs"
import { use } from "react";
dotenv.config()

const app=express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.status(200).json({
        message:"you are going great"
    })
})

app.post("/api/auth/register",async(req,res)=>{

    const {name,email,password}=req.body

    const user =await userModel.create({
        name,email,password:await bycrypt.hash(password,10)
    })

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );


    res.status(201).json({
        message:"user created successfully",
        data:{
            user:{
                email,
                name,
                id:user._id
            },
            token
        }
    })

})


app.get("/api/auth/me",authenticate,async(req,res)=>{

    console.log(req.user);

    res.status(200).json({
        data:{
            user:req.user
        }
    })

})

app.post("/api/auth/login",async(req,res)=>{

    const {email,password}=req.body

    const user=await userModel.findOne({
        email
    })

    if (!user) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    const isValidPass=bycrypt.compare(password,user.password)

    if(!isValidPass){
        return res.status(400).json({
            message:"invalid pass or email"
        })
    }

    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

     res.status(200).json({
       message: "loggedIn successfully",
       data: {
         user: {
           email: user.email,
           name: user.name,
         },
       },
       token,
     });


})

   
export default app;