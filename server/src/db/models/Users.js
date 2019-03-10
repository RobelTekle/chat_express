const { Schema, model } = require('mongoose')

const usersType = {
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: String,
}

const userSchema = new Schema(usersType)
const User = model('Users', userSchema)

module.exports = User
