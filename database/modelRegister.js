var conn = require('./connection');

var Register = conn.model('registros', {
  id: Number,
  userId: Number,
  createdAt: Date,
  sintomas: Boolean,
  febre: Boolean,
  manchas: Boolean,
  dor: Boolean,
  sangramento: Boolean,
  comeco: String,
  termino: String,
  localX: String,
  localY: String
});
module.exports = Register;
