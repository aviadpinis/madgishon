var mongoose = require('mongoose');

//User scheme
var userScheme = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var User = module.exports = mongoose.model('User', userScheme);

//Get Genres
module.exports.getUsers = function(callback, limit){
  User.find(callback).limit(limit);
};

//Add Genre
module.exports.addUser = function(user, callback){
  User.create(user, callback);
};

//Update Genre
module.exports.updateUser = function(id, user, options, callback){
  var query = {_id : id};
  var update = {
    name: user.name
  };
  User.findOneAndUpdate(query, update, options, callback);
};

//Delete Genre
module.exports.deleteUser = function(id, callback){
  var query = {_id : id};
  User.remove(query, callback);
};
