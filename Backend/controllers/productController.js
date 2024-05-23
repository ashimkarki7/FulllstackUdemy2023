import products from "../data/products.js";

const getProducts =  (req,res) =>{

}
app.get('/api/products', (req,res)=>{
    res.json(products);
})
