import express from 'express';
import dotenv from "dotenv";
//esmodule so we have to use . / for your own module

import products from "./data/products.js";
dotenv.config();


const port = process.env.PORT || 5000;
 const app =express();

 app.get('/', (req,res)=>{
     console?.log('f',req,res);
     res.send('API is running');
 });

 app.get('/api/products', (req,res)=>{
     res.json(products);
 })

app.get('/api/products/:id', (req,res)=>{
    const responseToSend = products?.find((Productres)=> Productres?.id === req?.id)
     res.json(responseToSend);
 })


//list on port above
app.listen(port, ()=>console.log('running 600'))

// //common js syntax
// const express = require('express');
console.log('hy')