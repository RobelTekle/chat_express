const Message = require('../../db/models/Message')
const { findChatBox, checkBody } = require('./helpers')
const { errorSender, successSender } = require('../../helpers/shortResponse')

const postMessage = async (req, res) => {
  const { params, body } = req
  if (!params || !params.chatId) {
    errorSender(400, 'ChatBox Id argument required', res)
  } else {
    const { error, chatBox } = await findChatBox(params.chatId)

    if (error) {
      errorSender(500, error, res)
      return
    }
    if (!chatBox) {
      errorSender(400, 'ChatBox not found', res)
      return
    }

    const messageFormat = checkBody(body, params.chatId)

    if (messageFormat.error) {
      errorSender(400, messageFormat.error, res)
      return
    }

    const newMessage = new Message(messageFormat.message)
    newMessage.save((err, message) => {
      if (err) {
        errorSender(400, err, res)
      } else {
        successSender(message, res)
      }
    })
  }
}

module.exports = postMessage
