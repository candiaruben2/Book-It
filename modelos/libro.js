mongoose = require('mongoose');

var esquemaLibro = mongoose.Schema({

    title:{
        type: String,
        required: true
    },

    bookId:{
        type: String,
        required: true
    },

    userId:{
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    publication_date:{
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true        
    },

    tags:{
        type: String,
        required: true
    },

    progress:{
        type: String,
        required: true
    },

    notes: {
        type: String,
        required: true
    }

});

var Libro = module.exports = mongoose.model('libro', esquemaLibro);

module.exports.get = function (callback, limit){

    Libro.find(callback).limit(limit);

}