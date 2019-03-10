const ChatBox = require('../../db/models/ChatBox')

const chatBoxData = async (req, res) => {
  const { params } = req
  if (!params || !params.id) {
    res.status(400).json({ error: 'Id argument required', data: null })
  } else {
    await ChatBox.findOne({ id: params.id }, (error, doc) => {
      if (error) {
        res.status(500).json({ error, data: null })
      } else if (!doc) {
        res.status(400).json({ error: 'Invalid id', data: null })
      } else {
        res.status(200).json({ error: null, data: doc })
      }
    })
  }
}

module.exports = chatBoxData
