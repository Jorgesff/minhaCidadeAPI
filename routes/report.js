var express = require('express');
var router = express.Router();
var Register = require('../database/modelRegister');


router.get('/user/:id?',function(req,res, next) {
  Register.find({userId: req.query.id})
  .then(function(response){
    res.json(response);
  })
  .catch(function(error){
    res.send(error);
  });
});

router.post('/new', function(req, res, next) {
  var today = new Date();
  // res.send(JSON.stringify(req.body.id));
  try {
    var payload = {
      id: req.body.id,
      userId: req.body.userId,
      createdAt: today,
      sintomas: req.body.sintomas,
      febre: req.body.febre,
      manchas: req.body.manchas,
      dor: req.body.dor,
      sangramento: req.body.sangramento,
      comeco:  JSON.stringify(req.body.comeco),
      termino: JSON.stringify(req.body.termino),
      localX: JSON.stringify(req.body.localX),
      localY: JSON.stringify(req.body.localY)
    };
    Register.insertMany(payload)
    .then(function(response){
      res.json(response);
    })
    .catch(function(error){
      console.log(error);
      res.send(error);
    });
  } catch (error) {
    res.send(error);
  }
  // console.log(Report);
})
module.exports = router;
