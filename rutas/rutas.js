let rutas = require('express').Router();;
rutas.get('/',function(req,res){
	res.json({
		status: 'api funcionando',
		message: 'bienvenido al tutorial'
	});
});

var controladorLibro = require('../controladores/libro');

rutas.route('/libro')
.get(controladorLibro.index)
.post(controladorLibro.new);

rutas.route('/libro/:libro_id')
    .get(controladorLibro.view)
    .patch(controladorLibro.update)
    .put(controladorLibro.update)
    .delete(controladorLibro.delete);// Export API routes


module.exports = rutas;