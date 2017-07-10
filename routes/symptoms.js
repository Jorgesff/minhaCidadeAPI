var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

router.get('/all', function(req,res){
  res.send('all symptoms');
});
router.get('/disease/:id?',function(req,res){
  res.send('disease id='+req.query.id);
});

module.exports = router;
