const express = require('express')
const router = express.Router()

const chatList = require('./chatList')
const chatBoxData = require('./chatBoxData')
const postMessage = require('./postMessage')

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
        chatList(req, res)
      },
    ],
    [
      '/api/chatBox/:id',
      (req, res) => {
        chatBoxData(req, res)
      },
    ],
    [
      '/*',
      (req, res) => {
        res.status(400).json({ erro: 'Invalid route', data: null })
      },
    ],
  ],
  post: [
    [
      '/api/postMessage/:chatId',
      (req, res) => {
        postMessage(req, res)
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
    [
      '/*',
      (req, res) => {
        res.status(400).json({ erro: 'Invalid route', data: null })
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
