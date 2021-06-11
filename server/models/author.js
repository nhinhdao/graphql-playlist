const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const authorSchema = new Schema({
    // id is being autogenerated
    name: String,
    age: Number
});

module.exports = model('Author', authorSchema);