const { Schema, model } = require('mongoose')

const petSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  age: {
    type: Number,
    min: 1
  }
})

module.exports = {
  schema: petSchema,
  model: model('Pets', petSchema)
}
