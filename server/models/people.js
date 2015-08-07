var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model("people", PeopleSchema);