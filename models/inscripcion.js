const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;
 
const inscripcionSchema = new Schema({
  idUsuario: { type: Number, require: true },
  idCurso: { type: Number, require: true },
});

const Inscripcion = mongoose.model('Inscripcion', inscripcionSchema);

module.exports = Inscripcion;