var express = require('express');
var router = express.Router();
var connection = require('../database/connection');


router.get('/list/:id?',function(req,res, next) {
  var data2 = {
    teste: 1
  }
  res.json(data2);
});

router.get('/user/:id?',function(req,res, next) {
  var data2 = {
    teste: 2
  }
  res.json(data2);
});

module.exports = router;
