var mongoose = require('mongoose');

/*var imageExAnswer = mongoose.Schema({
  text : {
    type: String,
    require:true
  },
  index:{
    type: Number,
    require:true
  }
});*/

//ImageEx scheme
var imageExScheme = mongoose.Schema({
  image_url:{
    type: String,
    require: true
  },
  answers: [{
    text : {
      type: String,
        require:true
    },
    index:{
      type: Number,
        require:true
    }
  }],
  right_answer: {
    type: Number,
    require: true,
  }
});

//var ImageExAnswer = module.exports = mongoose.model('ImageExAnswer', imageExAnswer);
var ImageEx = module.exports = mongoose.model('ImageEx', imageExScheme);

//Get ImageExs
module.exports.getImageExs = function(callback, limit){
  ImageEx.find(callback).limit(limit);
};

//Get ImageEx
module.exports.getImageExById = function(id, callback){
  ImageEx.findById(id, callback);
};

//Add ImageEx
module.exports.addImageEx = function(imageEx, callback){
  ImageEx.create(imageEx, callback);
};

//Update ImageEx
module.exports.updateImageEx = function(id, imageEx, options, callback){
  var query = {_id : id};
  var update = {
    image_url: imageEx.image_url,
    answers: imageEx.answers,
    right_answer: imageEx.right_answer
  };
  ImageEx.findOneAndUpdate(query, update, options, callback);
};

//Delete ImageEx
module.exports.deleteImageEx = function(id, callback){
  var query = {_id : id};
  ImageEx.remove(query, callback);
};
