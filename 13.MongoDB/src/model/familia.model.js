const mongoose = require('mongoose');
const conn = require('../../config/mongo');

conn()
const familiaSchema = mongoose.Schema({
  nome: String,
  idade: String,
  profissao: String
});

const familiaModel = mongoose.model('familia', familiaSchema);

module.exports = familiaModel;
