const mongoose = require('mongoose')
const { mongoDB } = require('./secrets')

const Users = require('./models/Users')
const ChatBox = require('./models/ChatBox')
const Message = require('./models/Message')

mongoose.connect(mongoDB, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongoose : connection error'))
db.once('open', () => {
  console.log('Mongoose : connection open')
})

module.exports = {
  Users,
  ChatBox,
  Message,
}
