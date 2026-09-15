const mongoose = require('mongoose');
// define person schema
const personSchema = new mongoose.Schema({
    //define parameters or fields with data types
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['cheif', 'manager', 'waiter'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        required: true
    },

});

// create person  model

const person = mongoose.model('person',personSchema);
module.exports = person;

