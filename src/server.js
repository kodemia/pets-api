// dependenices
const express = require('express')

// app const/vars
const app = express()
const port = 8080

app.get('/hola', (req, res) => {
  res.json({
    message: 'Hello koders'
  })
})

module.exports = {
  server: app,
  port
}
