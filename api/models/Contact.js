const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        minlength: 5
    },
    phone:{
        type: String,
        trim: true,
        required: true,
        minlength: 10,
        unique: true
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true

        //validator npm 
    }
})

const Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;

