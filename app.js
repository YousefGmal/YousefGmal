const express = require('express')
const connectDB = require('./DB/connectDB')
require('dotenv').config()
const router = require('./modules/user/user.router')
const app = express()
app.use(express.json())
app.use(router)
connectDB()
let port = process.env.port
app.listen(port, () => {
    console.log('Example app listening on port 3000!')
  })
  