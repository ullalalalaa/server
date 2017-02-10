var express = require('express');
var multer  = require('multer');
var db = require('../db');

var upload = multer({dest: './images/'})
var api = express.Router();

api.get('/', function (req, res, next) {
  res.json({});
});

api.get('/images', function (req, res, next) {
  db('images').orderBy('id', 'DESC').then(function(result) {
    res.json(result);
  });
});

api.post('/images', upload.single('file'), function (req, res, next) {
  db('images').insert({
     file: req.file.filename,
     created: Date.now()
   }).then(function(result) {
     var imageurl = 'http://localhost:8081/' + req.file.filename;
     res.json({"imageurl": imageurl});
   }).catch(function (err) {
     res.status(500).json({status: "error", message: err.message});
   });
});

api.get('/images/:id', function (req, res, next) {
  db('images').where({id: req.params.id}).then(function(result) {
    res.json(result[0]);
  });
});

api.delete('/images/:id', function (req, res, next) {
  db('images').where({id: req.params.id}).del().then(function(result) {
    res.json({'message': 'success'});
  });
});

module.exports = api;
