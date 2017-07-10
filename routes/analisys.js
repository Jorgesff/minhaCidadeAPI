var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

router.get('/region/:id?', function(req,res){
  res.send('region '+req.query.id+' status');
});

module.exports = router;
