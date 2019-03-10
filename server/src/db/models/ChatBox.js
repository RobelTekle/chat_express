const { Schema, model } = require('mongoose')

const chatBoxType = {
  id: String,
  name: String,
  messagesId: [String],
}

const chatBoxSchema = new Schema(chatBoxType)
const ChatBox = model('ChatBox', chatBoxSchema)

module.exports = ChatBox
