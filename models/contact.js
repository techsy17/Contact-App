const mongoose = require('mongoose');
const { type } = require('os');

const contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String
    }
},{timestamps : true});

module.exports = mongoose.model('Contacts',contactSchema);