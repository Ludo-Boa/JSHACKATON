// ROUTES road
var Road = require('../models/road.js');
module.exports 	= function(app) {
	app.get('/roads', Road.findAll);
	app.post('/roads', Road.create);
	app.put('/roads/:id', Road.update);
	app.delete('/roads/:id', Road.delete);
    
}
