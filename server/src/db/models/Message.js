const { Schema, model } = require('mongoose')

const messageType = {
  id: String,
  text: String,
  date: String,
  authorId: String,
  authorName: String,
  chatBoxId: String,
}

const messageSchema = new Schema(messageType, { timestamps: true })
const Message = model('Message', messageSchema)

module.exports = Message
