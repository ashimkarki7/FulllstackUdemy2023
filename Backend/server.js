import express from 'express';
import dotenv from "dotenv";
//esmodule so we have to use . / for your own module


import locations from "./data/location.js";
import connectDB from "./config/db.js";
import productRoutes from "./Routes/productRoute.js"
dotenv.config();

connectDB();

const port = process.env.PORT || 5000;
 const app =express();

 app.get('/', (req,res)=>{
     console?.log('f',req,res);
     res.send('API is running');
 });


 app.use('/api/products',productRoutes);


app.get('/api/locations', (req,res)=>{
     res.json(locations);
 })


//list on port above
app.listen(port, ()=>console.log('running 600'))

// //common js syntax
// const express = require('express');
console.log('hy')