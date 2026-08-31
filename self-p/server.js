const app=require("./src/app");
const connectDB = require("./src/db/db");


connectDB()

app.listen(2000,()=>{
    console.log('The server is running on port 2000..');
})