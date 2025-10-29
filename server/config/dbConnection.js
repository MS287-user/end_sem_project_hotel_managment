const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/hotel-managment-db");
        console.log("MongoDB Connected Successfully");
    }
    catch(err){
        console.log(err);
    }
    
}

module.exports = connectDB;

