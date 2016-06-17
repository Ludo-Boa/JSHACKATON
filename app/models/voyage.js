// MODEL TODO
var mongoose = require('mongoose');
var voyageSchema = new mongoose.Schema({
  nameHoli: String,
  destHoli: String,
  dateHoli: String,
  dayHoli: String,
  firstnameFriend: String,
  lastnameFriend: String,
  emailFriend: String,
  budget: String,
  prix1: String,
  prix2: String
});
var Voyage = {
    
    model: mongoose.model('Voyage', voyageSchema),
    
    create: function(req, res) {
		Voyage.model.create(req.body, function(err){
			if (err){
				res.send(err)
			}
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Voyage.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Voyage.model.findByIdAndUpdate(req.params.id, {
			nameHoli: req.body.nameHoli,
			destHoli: req.body.destHoli,
			dateHoli: req.body.dateHoli,
			dayHoli: req.body.dayHoli,
			firstnameFriend: req.body.FirstnameFriend,
			lastnameFriend: req.body.LastnameFriend,
			emailFriend: req.body.EmailFriend,
			budget: req.body.budget,
			prix1: req.body.prix1,
			prix2: req.body.prix2
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Voyage.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}
module.exports = Voyage;
