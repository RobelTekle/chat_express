const { v4 } = require('uuid')
const ChatBox = require('../../db/models/ChatBox')

const findChatBox = async chatId => {
  let obj = {}
  await ChatBox.findOne({ id: chatId }, (error, chatBox) => {
    if (error) {
      obj = { error, chatBox: null }
    }
    if (!chatBox) {
      obj = { error: null, chatBox: null }
    }
    obj = { error: null, chatBox }
  })

  return obj
}

const checkBody = (body = {}, chatBoxId) => {
  const requiredArgs = ['text']
  const allIsFilled = Object.keys(body).every(key => requiredArgs.includes(key))
  if (!allIsFilled || Object.keys(body).length === 0) {
    return {
      error: `Invalid arguments filled : ${JSON.stringify(
        Object.keys(body),
      )}. Required : ${JSON.stringify(requiredArgs)}`,
      message: null,
    }
  }

  const formattedBody = {
    id: v4(),
    text: body.text,
    date: new Date().toISOString(),
    authorId: '0000',
    authorName: 'Robel',
    chatBoxId,
  }

  return { message: formattedBody, error: null }
}

module.exports = {
  findChatBox,
  checkBody,
}
