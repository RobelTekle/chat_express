const ChatBox = require('../../db/models/ChatBox')

const chatList = async (req, res) => {
  await ChatBox.find({}, (error, docs) => {
    if (error) {
      res.status(500).json({ error, data: null })
    } else {
      res.status(200).json({ error: null, data: docs })
    }
  })
}

module.exports = chatList
