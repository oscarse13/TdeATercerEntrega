const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;
 
const cursoSchema = new Schema({
  id: { type: Number, require: true },
  nombre: { type: String, require: true },
  descripcion: { type: String, require: true },
  valor: { type: Number, require: true },
  modalidad: { type: String },
  intensidad: { type: Number },
  estado: { type: String, require: true },
});

const Curso = mongoose.model('Curso', cursoSchema);

module.exports = Curso;