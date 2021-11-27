const { Schema, model } = require('mongoose');

const UsuarioShcema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  msg: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true
  }
});

module.exports = model('Usuario', UsuarioShcema)