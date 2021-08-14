mongoose = require('mongoose');

var esquemaUser = mongoose.Schema({

    userId:{
        type: String,
        required: true
    },

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
        type: String
    },

    password: {
        type: String,
        required: true
    },

    books: [{
        type: String
    }]

});

var User = module.exports = mongoose.model('user', esquemaUser);

module.exports.get = function (callback, limit){

    User.find(callback).limit(limit);

}