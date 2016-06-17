// ROUTES voyage
var Voyage = require('../models/voyage.js');
module.exports 	= function(app) {
	app.get('/voyages', Voyage.findAll);
	app.post('/voyages', Voyage.create);
	app.put('/voyages/:id', Voyage.update);
	app.delete('/voyages/:id', Voyage.delete);
    
}
