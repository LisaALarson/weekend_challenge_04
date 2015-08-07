var express = require("express");
var path = require("path");

var app = express();

var things = require('./routes/things');
var index = require('./routes/index');

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));

app.set("port", (process.env.PORT || 5000));

app.use("/things", things);
app.use("/", index);

app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});