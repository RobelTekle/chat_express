const User = require('../db/models/Users')
const { errorSender } = require('../helpers/shortResponse')

const auth = async (req, res, next) => {
  const { chatapp_token } = req.headers
  if (!chatapp_token) {
    res.redirect('/login')
    return
  }
  await User.findOne({ token: chatapp_token }, (error, user) => {
    if (user) {
      req.chatapp_user = user
      next()
    } else if (error) {
      errorSender(500, error, res)
    } else {
      res.redirect('/login')
    }
  })
}

module.exports = auth
