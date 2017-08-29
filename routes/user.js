var express = require('express');
var router = express.Router();
var User = require('../database/modelUser');
var test = require('assert');

router.get('/all', function(req, res, next){
    User.find({})
    .then(function(response){
        var body = {
            recordCount: response.length,
            records: response
        }
        res.json(body);
    })
    .catch(function(error){
        res.send(error);
    });
});

router.post('/new', function(req, res, next){
    let today = new Date();
    try {
        var body = {
            id: req.body.id,
            email: req.body.email,
            password: req.body.password,
            sexo: req.body.sexo,
            idade: req.body.idade,
            cidade: req.body.cidade,
            createdAt: today,
            updatedAt: today
        }
        User.insertMany(body)
        .then(function(response){
            let body = {
                status: 'Ok',
                record: response
            } 
            res.json(body); 
        })
        .catch(function(error){
            res.send(error);
        });
    } catch (error) {
        res.send(error);
    }
});

router.put('/update/:id?', function(req, res, next){
    try {
        let today = new Date();
        let body = { 
            email: req.body.email,
            password: req.body.password,
            sexo: req.body.sexo,
            idade: req.body.idade,
            cidade: req.body.cidade,
            updatedAt: today
        }
        console.log(req);
        User.findOneAndUpdate({id: req.query.id}, body)
        .then(function(response){
            res.send(response);
        })
        .catch(function(err){
            res.send(err);
        });
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;