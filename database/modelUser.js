var conn = require('./connection');

var User = conn.model('user',{
  id: Number,
  email: {
    type: String,
    lowecase: true
  },
  password: String,
  sexo: String,
  idade: Number,
  cidade: String,
  createdAt: Date,
  updatedAt: Date
});
module.exports = User;
