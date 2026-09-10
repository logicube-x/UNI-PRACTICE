import express from "express"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js";

const app=express();
app.use(express.json())

app.post("/api/auth/register",async(req,res)=>{

    const {name,password,email}=req.body

    const user=await userModel.create({
        name,email,password
    })

    const token = jwt.sign(
      {
        id: user._id,
      },
      "1f1a845f99c5cbd9bc900462d61e029f30b0d253649d50960abf66b7ff6aa2ec0bdc545ca60fe2cd00498006",
    );

    res.status(200).json({
        data:{
            user:{
                name,
                email,
                id:user._id
            },
            token,
        },
    });

});


export default app;

// this is temp commit 