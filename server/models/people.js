var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
    name: String,
    messageArea: String
});

module.exports = mongoose.model("people", PeopleSchema);