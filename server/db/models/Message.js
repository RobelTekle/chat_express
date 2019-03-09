const { Schema, model } = require('mongoose')

const messageType = {
  id: String,
  text: String,
  data: String,
  authorId: String,
  chatBoxId: String
}

const messageSchema = Schema(messageType)
const Message = model('Message', messageSchema)

module.exports = Message
