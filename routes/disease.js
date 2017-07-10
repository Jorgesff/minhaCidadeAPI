var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

router.get('/all', function(req,res){
  res.send('all disease');
});

module.exports = router;
