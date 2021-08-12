mongoose = require('mongoose');

var esquemaLibro = mongoose.Schema({

    title:{
        type: String,
        required: true
    },

    authors: {
        type: String,
        required: true
    },

    categories: {
        type: String,
        required: true
    },

    publishers: {
        type: String,
        required: true        
    },

    pageCant: {
        type: String,
        required: true
    }

});

var Libro = module.exports = mongoose.model('libro', esquemaLibro);

module.exports.get = function (callback, limit){

    Libro.find(callback).limit(limit);

}