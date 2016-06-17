// ROUTES voyage
var Voyage = require('../models/voyage.js');
module.exports 	= function(app) {
	app.get('/voyage', Voyage.findAll);
	app.post('/voyage', Voyage.create);
	app.put('/voyage/:id', Voyage.update);
	app.delete('/voyage/:id', Voyage.delete);
    
}
