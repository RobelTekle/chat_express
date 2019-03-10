const express = require('express')
require('./src/db')

const bodyParser = require('body-parser')
const router = require('./src/router')
const auth = require('./src/middleware/Auth')

const app = express()

app.get('/login', (req, res) => {
  res.send('Login page')
})

app.use('*', auth)
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())
app.use('/', router)

app.listen(4000, () => {
  console.log('Listening at port 4000')
})
