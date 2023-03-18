const express = require('express')
var userRouter = express.Router();


userRouter.get('/',(req,res)=>{
    res.send('all users');
});

userRouter.get('/get-user/:id',(req,res)=>{
    res.send('iddd'+req.params.id);
});

userRouter.post('/add-user',(req,res)=>{
    res.send('add product');
});

module.exports = userRouter