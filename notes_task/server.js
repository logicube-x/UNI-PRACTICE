const express=require("express")

const app=express();

app.use(express.json());

let notes=[];

app.post('/notes',(req,res)=>{
    notes.push(req.body);

    res.status(201).json({
        message:'note created successfully'
    })
})



app.listen(1000,()=>{
    console.log("The server is running on port 1000...");
})