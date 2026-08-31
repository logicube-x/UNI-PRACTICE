const mongoose=require("mongoose")


 async function connectDB(){

     await mongoose.connect(
      "mongodb+srv://arshaminmay2006_db_user:B7rJbg4LOFXsSu4N@temp-p-cluster.e3o9sqx.mongodb.net/notes",
    );

    console.log('connected to database');
}

module.exports=connectDB;