//es6
// exports.add = (x,y) =>{
//     return x+y;
// }
// //or
// var add = (x,y) => {
//     return x+y;
// }
// module.exports = {
//     add
// }

//es5
// function add(x,y){
//     return x+y;
// }
// module.exports = {
//     add
// }
//------------------------------

// use import in other file to get below function
//also add "type": "module", in package.json file
// //another way
// export default function mul(x,y){
//     return x*y;
// }

//another way using arrow functions
var mul = (x,y)=>{
    return x*y;
}
export default mul
//------------------------------
//steps
// create nodejs folder
// > npm init [ it will created package.json file ]
// > npm install  [it will created package-lock.json file]
// create test.js file
// configure localhost in test.js file
// express framework in node js
// mongoose package to connect mongodb
// run sudo start mongodb start

// collections= table (users)
// documents = columns (name,age)