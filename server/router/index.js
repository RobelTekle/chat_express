const express = require('express')
const router = express.Router()

const routes = {
  get: [
    [
      '/',
      (req, res) => {
        // serve ReactApp
        res.send('React App')
      },
    ],
    [
      '/api/chatList',
      (req, res) => {
        // send ChatBox list
        res.send('chatList')
      },
    ],
    [
      '/api/chatBox/:id',
      (req, res) => {
        // send messages of a ChatBox
        res.send('chatBox')
      },
    ],
  ],
  post: [
    [
      '/api/postMessage',
      (req, res) => {
        // post a message
        res.send('post a message')
      },
    ],
    [
      '/api/createChatBox',
      (req, res) => {
        // create a ChatBox
        res.send('create a ChatBox')
      },
    ],
    [
      'api/login',
      (req, res) => {
        // check the ID
        res.send('check the ID')
      },
    ],
  ],
}

const methods = Object.keys(routes)
methods.forEach(method => {
  for (let i = 0; i < routes[method].length; i++) {
    router[method](routes[method][i][0], routes[method][i][1])
  }
})

module.exports = router
