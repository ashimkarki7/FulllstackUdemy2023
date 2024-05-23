import mongoose from "mongoose";

const connectDB = async () =>{
   try {
       const connection = await mongoose.connect(process.env.MONGO_URI);
       console.log(`monog db connect L # ${connection.connection.host}`)
   }
   catch (error){
       console.log(`monog db connect L # ${error.connection.host}`)
       process.exit(1);
   }
};

export default connectDB ;