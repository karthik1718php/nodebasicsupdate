const express = require('express')
const app = express()
const port = 3000;

var users = require('./routes/User')
app.use('/web/api/users',users)
var products = require('./routes/Product')
app.use('/web/api/products',products)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})