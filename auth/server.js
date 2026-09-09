import app from "./src/app/app.js"
import { connectDB } from "./src/config/db.js";

await connectDB()

app.listen(1111,()=>{
    console.log(`The server is running on port 1111`);
})