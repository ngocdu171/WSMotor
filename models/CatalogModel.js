let mongoose = require('mongoose');

let CatalogSchema = mongoose.Schema({
    idCat:{
        type: Number,
        require: true
    },
    nameCat:{
        type: String,
        require: true
    }
});

CatalogSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('tbl_catalogs', CatalogSchema);