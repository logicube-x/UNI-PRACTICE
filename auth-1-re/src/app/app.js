import express from "express"
import jwt from "jsonwebtoken"

const app=express()
app.use(express.json())


app.post("/api/auth/register",(req,res)=>{

    const {name,email,password}=req.body;

    const token = jwt.sign(
      {
        name,
        email,
      },
      "KqHuadyMHqxWAoCXcYKz0dQXX9frCLAs8kR3gATPOId",
    );

    res.status(201).json({
        message:"user created successfully",
        data:{
            user:{
                name,email
            },
            token
        }
    })

})





app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Welcome to test API"
    })
})

export default app;