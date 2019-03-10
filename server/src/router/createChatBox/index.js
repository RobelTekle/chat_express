const { v4 } = require('uuid')
const ChatBox = require('../../db/models/ChatBox')

const { errorSender, successSender } = require('../../helpers/shortResponse')

const createChatBox = (req, res) => {
  const { body } = req
  if (!body || !body.name) {
    errorSender(400, 'Required arguments: name', res)
  } else {
    const chatboxData = {
      name: body.name,
      id: v4(),
      messagesId: [],
    }
    const newChat = new ChatBox(chatboxData)
    newChat.save((error, chat) => {
      if (error) {
        errorSender(400, error, res)
      } else {
        successSender(chat, res)
      }
    })
  }
}

module.exports = createChatBox
