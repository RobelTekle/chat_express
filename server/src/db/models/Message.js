const { Schema, model } = require('mongoose')

const messageType = {
  id: String,
  text: String,
  date: String,
  authorId: String,
  authorName: String,
  chatBoxId: String,
}

const messageSchema = Schema(messageType)
const Message = model('Message', messageSchema)

module.exports = Message
