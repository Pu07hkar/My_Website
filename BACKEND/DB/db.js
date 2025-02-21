import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        let mongo_uri = process.env.MONGO_URI;
        mongoose.connect(mongo_uri);
        console.log("mongodb is connected");
        
    } catch (error) {
        console.log(`database is not connected ${error}`)
    }
}

export default connectDB;