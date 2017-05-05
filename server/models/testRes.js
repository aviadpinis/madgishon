var mongoose = require('mongoose');

//TestRes scheme
var testResScheme = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  dyslexiaType:{
    type: String,
    require: true
  },
  level :{
    type: Number,
    require: true
  },
  results: [{
    img_url: {
      type: String,
      require: true
    },
    exName: {
      type: String,
      require: true
    },
    isSuccess :{
      type: Number,
      require: true
    },
    right_answer:{
      type:String,
      require: true
    },
    answer: {
      type: String,
      require: true
    }
  }]
});

var TestRes = module.exports = mongoose.model('TestRes', testResScheme);

//Get TestRes
module.exports.getTestReses = function(callback, limit){
  TestRes.find(callback).limit(limit);
};

//Get Exercise
module.exports.getTestResById = function(id, callback){
  TestRes.findById(id, callback);
};

//Get TestRes of specific user
module.exports.getTestResByDyslexiaType = function(type, callback, limit){
  var query = {dyslexiaType : type};
  TestRes.find(query, callback).limit(limit);
};

//Add TestRes
module.exports.addTestRes = function(testRes, callback){
  TestRes.create(testRes, callback);
};

