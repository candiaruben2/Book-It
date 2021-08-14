Libro = require('../modelos/libro');

exports.index = function (req,res){
	
    Libro.get(function(err,libros){
	
	if(err){
		
		res.json({
			status:"error",
			message:err
		});
	}
	res.json({
		status:"success",
		message:"libros listados correctamente",
		data: libros	
		
	});
	
	
});
	
};


exports.new = function (req, res) {
	
    var libro = new Libro();
    libro.title = req.body.title ? req.body.title : libro.title;
    libro.authors = req.body.authors;
    libro.categories = req.body.categories;
    libro.publishers = req.body.publishers;
    libro.pageCant = req.body.pageCant;
// save the libro and check for errors
    libro.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nuevo libro creado!',
                data: libro
            });
    });
};


exports.view = function (req, res) {
    Libro.findById(req.params.libro_id, function (err, libro) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles del libro..',
            data: libro
        });
    });
};
// Handle update libro info
exports.update = function (req, res) {
    Libro.findById(req.params.libro_id, function (err, libro) {
        if (err)
            res.send(err);
        libro.title = req.body.title ? req.body.title : libro.nombre;
        libro.authors = req.body.authors;
        libro.categories = req.body.categories;
        libro.publishres = req.body.publishres;
        libro.pageCant = req.body.pageCant;
// save the libros and check for errors
        libro.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creado nuevo libro!',
                data: libro
            });
    });
    });
};
// Handle delete libro
exports.delete = function (req, res) {
    Libro.remove({
        _id: req.params.libro_id
    }, function (err, libro) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'libro borrado'
        });
    });
};
