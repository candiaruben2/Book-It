Nota = require('../modelos/nota');

exports.index = function (req,res){
	
    Nota.get(function(err,notas){
	
	if(err){
		
		res.json({
			status:"error",
			message:err
		});
	}
	res.json({
		status:"success",
		message:"notas listadas correctamente",
		data: notas	
		
	});
	
	
});
	
};


exports.new = function (req, res) {
	
    var nota = new Nota();
    nota.title = req.body.notaId
    nota.userId = req.body.userId;
    nota.bookId = req.body.bookId;
    nota.title = req.body.title;
    nota.text = req.body.text;
// save the nota and check for errors
    nota.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nueva nota creada!',
                data: nota
            });
    });
};


exports.view = function (req, res) {
    Nota.findById(req.params.nota_id, function (err, nota) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles de la nota..',
            data: nota
        });
    });
};
// Handle update nota info
exports.update = function (req, res) {
    Nota.findById(req.params.nota_id, function (err, nota) {
        if (err)
            res.send(err);
        nota.title = req.body.notaId
        nota.userId = req.body.userId;
        nota.bookId = req.body.bookId;
        nota.title = req.body.title;
        nota.text = req.body.text;
// save the notas and check for errors
        nota.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creada nueva nota!',
                data: nota
            });
    });
    });
};
// Handle delete nota
exports.delete = function (req, res) {
    Nota.remove({
        _id: req.params.nota_id
    }, function (err, nota) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'nota borrada'
        });
    });
};