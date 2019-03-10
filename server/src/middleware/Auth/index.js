const User = require('../db/models/Users')
const { errorSender } = require('../helpers/shortResponse')

const auth = async (req, res, next) => {
  const { chatapp_token: token } = req.headers
  if (!token) {
    res.redirect('/login')
    return
  }
  await User.findOne({ token }, (error, user) => {
    if (error) {
      errorSender(500, error, res)
    } else if (user) {
      req.chatapp_user = user
      next()
    } else {
      res.redirect('/login')
    }
  })
}

module.exports = auth
