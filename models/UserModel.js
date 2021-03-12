let mongoose = require('mongoose');

//User Schema
let UserSchema = mongoose.Schema({
    idUser:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

UserSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        // returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('tbl_users', UserSchema);