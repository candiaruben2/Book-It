mongoose = require('mongoose');

var esquemaUser = mongoose.Schema({

    nombres: {
        type: String,
        required: true
    },

    apellidos: {
        type: String,
        required: true
    },

    usuario: {
        type: String,
        required: true        
    },

    correo: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    books: [{
        type: String
    }]

});

var user = module.exports = mongoose.model('user', esquemaUser);

module.exports.get = function (callback, limit){

    user.find(callback).limit(limit);

}