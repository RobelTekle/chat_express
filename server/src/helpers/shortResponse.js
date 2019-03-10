const errorSender = (status, error, res) => {
  res.status(status).json({ error, data: null })
}

const successSender = (data, res) => {
  res.status(200).json({ error: null, data })
}

module.exports = {
  errorSender,
  successSender,
}
