// dependenices
const express = require('express')

const usersRouter = require('./routes/users')
const petsRouter = require('./routes/pets')
const cors = require('cors')

// app const/vars
const app = express()
const port = 8080

app.use(cors())
app.use(express.json())

app.use('/users', usersRouter)
app.use('/pets', petsRouter)

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
