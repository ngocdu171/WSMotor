let mongoose = require('mongoose');

let ProductSchema = mongoose.Schema({
    idProduct:{
        type: Number,
        require: true
    },
    nameProduct:{
        type: String,
        require: true
    },
    amountProduct:{
        type: Number,
        require: true
    },
    S:{
        type: Number,
        require: true
    },
    M:{
        type: Number,
        require: true
    },
    L:{
        type: Number,
        require: true
    },
    imgProduct:{
        type: String,
        require: true
    },
    priceProduct:{
        type: Number,
        require: true
    },
    dateUpdate:{
        type: Date,
        default: Date.now
    },
    desProduct:{
        type: String,
        require: true
    },
    idCat:{
        type: Number,
        require: true
    },
    showHide:{
        type: Number,
        require: true
    },
    views:{
        type: Number,
        require: true
    }
});

ProductSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('tbl_products', ProductSchema);