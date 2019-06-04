// dependenices
const express = require('express')

// own packages
const routes = require('./routes')

//app const/vars
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

