mongoose = require('mongoose');

var esquemaLibro = mongoose.Schema({


    notaId:{
        type: String,
        required: true
    },

    userId:{
        type: String,
        required: true
    },

    bookId: {
        type: String,
        required: true
    },

    title:{
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    }

});

var Nota = module.exports = mongoose.model('nota', esquemaNota);

module.exports.get = function (callback, limit){

    Nota.find(callback).limit(limit);

}