const mongoose = require('mongoose')
const { mongoDB } = require('./secrets')

mongoose.connect(mongoDB, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongoose : connection error'))
db.once('open', () => {
  console.log('Mongoose : connection open')
})
