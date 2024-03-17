const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const valid=require('validator');

const UserSchema = new Schema({

    email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate:{
            validator: function(v){
                return valid.isEmail(v);
                // return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    }

});

const User=mongoose.model('User',UserSchema);
module.exports = User