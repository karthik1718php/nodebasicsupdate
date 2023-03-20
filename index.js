const express = require('express')
const app = express()
const port = 3000;
var bodyParser = require('body-parser')
var multipart = require('connect-multiparty');

// create application/form parser
app.use(multipart());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// create application/json parser
app.use(bodyParser.json());

var users = require('./routes/User')
app.use('/web/api/users',users)
var products = require('./routes/Product')
app.use('/web/api/products',products)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})