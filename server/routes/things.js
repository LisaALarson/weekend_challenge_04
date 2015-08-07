var express = require('express');
var router = express.Router();
var path = require('path');

router.post("/", function(req, res, next){
   console.log("Post Hit: ", req.body);
});

router.get("/", function(req, res, next){

});

module.exports = router;