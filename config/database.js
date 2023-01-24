import mongoose from "mongoose";

export const connectDb =async ()=>{
    mongoose.set('strictQuery', false);
    const {connection} = await mongoose.connect(process.env.MONGO_URI)
    console.log(`database is running at ${connection.host}`);
}