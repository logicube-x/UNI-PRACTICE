import express from "express"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js";
import mongoose, { mongo } from "mongoose";
import { authenticate } from "../middleware/auth.middleware.js";

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
        name,password,email
    })

    const token = jwt.sign(
      {
        id: user._id,
      },
      "eJVnH2IfxCqnOJ9nc2z17sJIadf8Y06kzft7jtX72y5",
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
export default app;