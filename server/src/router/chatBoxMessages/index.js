const sortBy = require('lodash.sortby')

const Message = require('../../db/models/Message')
const { errorSender, successSender } = require('../../helpers/shortResponse')

const chatBoxMessages = (req, res) => {
  const { params } = req
  if (!params) {
    errorSender(400, 'No chatbox id', res)
    return
  }

  Message.find({ chatBoxId: params.id }, (error, messages) => {
    if (error) {
      errorSender(500, error, res)
    } else {
      const orderedMessages = sortBy(messages, m =>
        new Date(m.createdAt || m.date).getTime())
      successSender(orderedMessages, res)
    }
  })
}

module.exports = chatBoxMessages
