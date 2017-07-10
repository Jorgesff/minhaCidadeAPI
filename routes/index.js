var express = require('express');
var router = express.Router();
var connection = require('../database/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

module.exports = router;
