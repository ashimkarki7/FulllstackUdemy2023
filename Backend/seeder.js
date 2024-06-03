import mongoose from 'mongoose';
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/user.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import user from "./data/user.js";



dotenv.config();

connectDB();

const importData = async ()=>{
    try{
      await Order?.deleteMany();
      await User?.deleteMany();
      await Product?.deleteMany();

      const createdUser = await User?.insertMany(users);
      const adminuser = await createdUser[0]._id;

      const sampleProducts = products?.map((productsItem)=>{
          return {...productsItem,user: adminuser};
      });

      await Product.insertMany(sampleProducts);

      console.log('fff')

      process.exit();
    }
    catch(err){
  console.log(err,'seedingImport data',err);
    }

};


const destroyData = async ()=>{
    try{
        await Order?.deleteMany();
        await User?.deleteMany();
        await Product?.deleteMany();
        process.exit();
    }
    catch(err){
        console.log(err,'seedingImport data destroyed'.red.inverse);
        process.exit(1);
    }

}
console.log('tpt',process.argv,process.argv[2]);
if (process.argv[2] === '-d'){
    destroyData();
}else{
    importData();
}