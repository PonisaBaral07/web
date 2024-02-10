import mongoose from "mongoose";

const connectDB = async () =>
{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to database");
    }
    
    catch(err){
        console.log(err);
        console.log("Error in connecting Database");
        }
}
export default connectDB