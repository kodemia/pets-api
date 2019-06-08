const { model: Pet } = require('../models/pet')

const create = async (petData = {}) => {
  const {
    name,
    ageInMonths,
    size,
    species,
    breed,
    description,
    photo,
    userId
  } = petData

  const pet = new Pet({
    name,
    ageInMonths,
    size,
    species,
    breed,
    description,
    photo,
    isAdopted: false,
    userId
  })

  const error = pet.validateSync()
  if (error) throw error

  return pet.save()
}

const getAll = async () => {
  const allPets = await Pet.find().lean()
  const cleanPets = allPets.map((pet) => {
    const { ...cleanPet } = pet
    return cleanPet
  })

  return cleanPets
}

const getById = async (petId) => {
  const pet = await Pet.findById(petId).lean()
  if (!pet) throw new Error('Pet not found')
  const { cleanPet } = pet
  return cleanPet
}

const deleteById = (petId) => Pet.findByIdAndDelete(petId)

const updateById = (petId, petData) => Pet.findByIdAndUpdate(petId, petData)

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById
}
