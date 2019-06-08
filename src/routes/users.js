
const express = require('express')

const user = require('../usecases/user')
const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const newUserData = req.body

    const newUser = await user.signUp(newUserData)
    res.json({
      success: true,
      message: 'User created successfuly',
      payload: {
        user: newUser
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot create user',
      error: error.message
    })
  }
})

router.get('/', auth, auth, async (req, res) => {
  try {
    const users = await user.getAll()
    res.json({
      success: true,
      message: 'All users',
      payload: {
        users
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot get users',
      error: error.message
    })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params
    const foundUser = await user.getById(id)
    res.json({
      success: true,
      message: 'user found',
      payload: {
        user: foundUser
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(404)
    res.json({
      success: false,
      message: 'user not found',
      error: error.message
    })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await user.deleteById(id)
    res.json({
      success: true,
      message: 'User deleted',
      payload: {
        user: deletedUser
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot delete user',
      error: error.message
    })
  }
})

router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params
    const newUserData = req.body
    const updatedUser = await user.updateById(id, newUserData)
    res.json({
      success: true,
      message: 'User updated',
      payload: {
        user: updatedUser
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot update user',
      error: error.message
    })
  }
})

router.post('/auth', async (req, res) => {
  try {
    const {
      password,
      email
    } = req.body

    console.log({ password, email })

    const token = await user.logIn(email, password)

    res.json({
      success: true,
      message: 'User logged in successfuly',
      payload: {
        token
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(401)
    res.json({
      success: false,
      message: 'Wrong user credentials',
      error: error.message
    })
  }
})

module.exports = router
