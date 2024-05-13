import express from 'express';
//esmodule so we have to use . / for your own module
import products from "./data/products.js";

const port = 5000;
 const app =express();

 app.get('/', (req,res)=>{
     console?.log('f',req,res);
     res.send('API is running');
 });

 app.get('/api/products', (req,res)=>{
     res.json(products);
 })


//list on port above
app.listen(port, ()=>console.log('running 600'))

// //common js syntax
// const express = require('express');
console.log('hy')