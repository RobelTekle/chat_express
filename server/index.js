const express = require('express')
const bodyParser = require('body-parser')
require('./db/index')

const router = require('./router')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('/', router)

app.listen(3000, () => {
  console.log('Listening at port 3000')
})
