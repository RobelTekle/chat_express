const Message = require('../../db/models/Message')
const { findChatBox, checkBody } = require('./helpers')
const { errorSender, successSender } = require('../../helpers/shortResponse')

const postMessage = async (req, res) => {
  const { params, body } = req
  if (!params || !params.chatId) {
    errorSender(400, 'ChatBox Id argument required', res)
    return
  } else {
    const { error, chatBox } = await findChatBox(params.chatId)

    if (error) {
      errorSender(500, error, res)
      return
    } else if (!chatBox) {
      errorSender(400, 'ChatBox not found', res)
      return
    }

    const messageFormat = checkBody(body, params.chatId)

    if (messageFormat.error) {
      errorSender(400, messageFormat.error, res)
      return
    }

    const message = new Message(messageFormat.message)
    message.save((error, message) => {
      if (error) {
        errorSender(400, error, res)
      } else {
        successSender(message, res)
      }
    })
  }
}

module.exports = postMessage
