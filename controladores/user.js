User = require('../modelos/user');

exports.index = function (req,res){
	
    User.get(function(err,users){
	
	if(err){
		
		res.json({
			status:"error",
			message:err
		});
	}
	res.json({
		status:"success",
		message:"users listados correctamente",
		data: users	
		
	});
	
	
});
	
};


exports.new = function (req, res) {
	
    var user = new User();
    user.userId = req.body.userId;
    user.nombres = req.body.nombres;
    user.apellidos = req.body.apellidos;
    user.usuario = req.body.usuario;
    user.password = req.body.password;
    user.books = req.body.books;
// save the user and check for errors
    user.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nuevo user creado!',
                data: user
            });
    });
};


exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles del user..',
            data: user
        });
    });
};
// Handle update user info
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.userId = req.body.userId;
        user.nombres = req.body.nombres;
        user.apellidos = req.body.apellidos;
        user.usuario = req.body.usuario;
        user.password = req.body.password;
        user.books = req.body.books;
// save the users and check for errors
        user.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creado nuevo user!',
                data: user
            });
    });
    });
};
// Handle delete luser
exports.delete = function (req, res) {
    LUser.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'user borrado'
        });
    });
};