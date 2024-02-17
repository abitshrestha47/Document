import mongoose from 'mongoose';

export const connectDB=async(req,res)=>{
    try {
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to mongodb');
    } catch (error) {
        console.log(error);
    }
}