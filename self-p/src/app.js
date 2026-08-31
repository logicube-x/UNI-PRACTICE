const express = require("express");
const noteModel=require("./models/note.model")


const app = express();

app.use(express.json())

app.post("/notes", async(req,res)=>{

    await noteModel.create({
        title:req.body.title,
        description:req.body.description
    })

    res.status(201).json({
        message:'note created successfully'
    })

})



module.exports=app;
