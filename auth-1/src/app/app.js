import express from "express"
import jwt from "jsonwebtoken"
const app=express();

app.use(express.json())

app.post("/api/auth/register",(req,res)=>{

    const {name,email,password}=req.body

    const token = jwt.sign(
      {
        name,
        email,
      },
      "IFBFoKUc7B2v3jpys1AzrB3PuP1tiZo9DggJh58bQca",
    );

    res.status(201).json({
        data:{
            user:{
                name,email
            },
            token
        }
    })
})










export default app