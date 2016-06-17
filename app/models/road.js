// MODEL TODO
var mongoose = require('mongoose');
var roadSchema = new mongoose.Schema({
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
var Road = {
    
    model: mongoose.model('Road', roadSchema),
    
    create: function(req, res) {
		Road.model.create({
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
	findAll: function(req, res) {
		Road.model.find(function (err, data) {	
			res.send(data);
		});
	},
	update: function(req, res){
		Road.model.findByIdAndUpdate(req.params.id, {
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
		Road.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}
module.exports = Road;
