// MODEL TODO
var mongoose = require('mongoose');
var historiqueSchema = new mongoose.Schema({
  description: String
});
var Historique = {
    
    model: mongoose.model('Historique', historiqueSchema),
    
    create: function(req, res) {
		Historique.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Historique.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Historique.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Historique.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}
module.exports = Historique;
