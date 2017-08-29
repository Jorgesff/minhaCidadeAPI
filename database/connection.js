var mongoose = require('mongoose');
var opt = {
  useMongoClient: true
};
var conn = mongoose.connect('mongodb://localhost/minhaCidade', opt);
conn.on('error', console.error.bind(console, 'connection error'));
conn.once('open', function(){
  console.log('Success!');
});
module.exports = conn;
