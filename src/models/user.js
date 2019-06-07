const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxLength: 100,
    unique: true
  },
  name: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true
  },
  lastName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true
  },
  age: {
    type: Number,
    min: 18
  },
  password: {
    type: String,
    required: true,
    minLength: '1',
    maxLength: '200'
  },
  type: {
    type: String,
    default: 'adopter',
    enum: [
      'admin',
      'adopter'
    ]
  },
  address: {
    type: String,
    required: true,
    maxLength: 200
  },
  phone: {
    type: String,
    required: true,
    pattern: /^[0-9]{8,15}$/
  }
})

module.exports = {
  schema: userSchema,
  model: model('Users', userSchema)
}
