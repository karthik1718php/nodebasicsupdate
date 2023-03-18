const express = require('express')
var productRouter = express.Router();


productRouter.get('/',(req,res)=>{
    res.send('all products');
});

productRouter.get('/get-product/:id',(req,res)=>{
    res.send('iddd'+req.params.id);
});

productRouter.post('/add-product',(req,res)=>{
    res.send('add product');
});

module.exports = productRouter