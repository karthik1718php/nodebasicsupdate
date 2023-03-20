const express = require('express')
var userRouter = express.Router();
const userlist = require('../static-records/userlist')

userRouter.get('/',(req,res)=>{
    var userRecords = '<h2>List of users</h2><hr>';
    userlist.map((data)=>{
        userRecords = userRecords + 
        `<h3>ID - ${data.id}</h3>
        <h3>Username - ${data.name}</h3>
        <h3>Place of Birth - ${data.place}</h3><hr>
        `
    })
    res.send(userRecords);
});
userRouter.post('/add-user',(req,res)=>{
console.log(req.body);
    newRecord = {
        id:req.body.id,
        name:req.body.name,
        place:req.body.place
    }
userlist.push(newRecord);
    res.send({users:userlist,status:"New user added successfully"})
});

module.exports = userRouter