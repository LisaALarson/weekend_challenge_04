var express = require('express');
var router = express.Router();
var path = require('path');
var People = require('../models/people');

router.post("/", function(req, res, next){
   console.log("Post Hit: ", req.body);
   People.create(req.body, function(err, post){
      res.send("Yes");
   });
});

router.get("/", function(req, res, next){
   People.find(function(err, people){
      res.json(people);
   });
});

module.exports = router;