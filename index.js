//core modules or built in modules
// var http = require('http');
// http.createServer(function (req, res) {
//     console.log('localhost running');
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Welcome to this page!');
//   res.end();
// }).listen(3000);
// //--------------------------------------------------

// // Third-party Modules or external modules
// var lodash = require('lodash');

// var users = [
//     { 'user': 'barney',  'active': true },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': false }
//   ];

// let a = lodash.findLastIndex(users, ['active', false]);
// // console.log(a);
// // => 2
// let b = lodash.findLastIndex(users, 'active');
// // console.log(b);
// // => 0
// //--------------------------------------------------

// //local modules or custom modules
// var calculator = require('./calc'); 
    
// var x = 50, y = 10; 
    
// console.log("Addition of 50 and 10 is: "
//                    + calculator.add(x, y)); 
    
// // console.log("Subtraction of 50 and 10 is "
// //                    + calculator.sub(x, y)); 
    
// // console.log("Multiplication of 50 and 10 is "
// //                    + calculator.mult(x, y)); 
    
// // console.log("Division of 50 and 10 is " 
// //                    + calculator.div(x, y)); 

//------------------------------------------------------
import mul from './calc.js'; 
    
var x = 50, y = 10; 
    
console.log("multiplication of 50 and 10 is: "
                   + mul(x, y)); 


//-----------------------------------
// const fs = require('fs');

// //console.log(fs);

// //writing file in async way

// var myArray = ['a','434234234'];
// // var jsonContent = JSON.stringify(myArray);

// let student = { 
//   name: 'Mike',
//   age: 23, 
//   gender: 'Male',
//   department: 'English',
//   car: 'Honda' 
// };

// fs.writeFile('message.txt',  JSON.stringify(student), (error) => {
//   if (error) throw error;
//   console.log('File message.txt is added');
// });

//reading file in async way
// fs.readFile('./message.txt', 'utf-8', (err, data) => {
//   //if we don't pass utf-8 it will return buffer not string
//   if (err) throw err;
//   console.log(data);
// });
//--------------------------------------------------
