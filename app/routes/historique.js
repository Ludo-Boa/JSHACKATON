// ROUTES historique
var Historique = require('../models/historique.js');
module.exports 	= function(app) {
	app.get('/historiques', Historique.findAll);
	app.post('/historiques', Historique.create);
	app.put('/historiques/:id', Historique.update);
	app.delete('/historiques/:id', Historique.delete);
    
}
