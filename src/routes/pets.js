const express = require('express')

const pet = require('../usecases/pet')
const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', auth, async (req, res) => {
  try {
    const newPetData = req.body

    const newPet = await pet.create(newPetData)
    res.json({
      success: true,
      message: 'Pet created successfuly',
      payload: {
        pet: newPet
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot create pet',
      error: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const pets = await pet.getAll()
    res.json({
      success: true,
      message: 'All pets',
      payload: {
        pets
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot get pets',
      error: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const foundPet = await pet.getById(id)
    res.json({
      success: true,
      message: 'pet found',
      payload: {
        pet: foundPet
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(404)
    res.json({
      success: false,
      message: 'pet not found',
      error: error.message
    })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params
    const deletedPet = await pet.deleteById(id)
    res.json({
      success: true,
      message: 'Pet deleted',
      payload: {
        pet: deletedPet
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot delete pet',
      error: error.message
    })
  }
})

router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params
    const newPetData = req.body
    const updatedPet = await pet.updateById(id, newPetData)
    res.json({
      success: true,
      message: 'Pet updated',
      payload: {
        pet: updatedPet
      }
    })
  } catch (error) {
    console.error('Error: ', error)
    res.status(400)
    res.json({
      success: false,
      message: 'Cannot update pet',
      error: error.message
    })
  }
})

module.exports = router
