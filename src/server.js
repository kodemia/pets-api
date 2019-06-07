// dependenices
const express = require('express')

const usersRouter = require('./routes/users')

// app const/vars
const app = express()
const port = 8080

app.use(express.json())

app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'pets-api v1'
  })
})

module.exports = {
  server: app,
  port
}
