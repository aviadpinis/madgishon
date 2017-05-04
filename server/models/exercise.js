var mongoose = require('mongoose');

//Exercise scheme
var exerciseScheme = mongoose.Schema({
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
  questions: [{
    image_url: {
      type: String,
      require: true
    },
    answers: [{
      type: String
    }],
    right_answer: {
      type: String,
      require: true
    }
  }]
});

var Exercise = module.exports = mongoose.model('Exercise', exerciseScheme);

//Get Exercises
module.exports.getExercises = function(callback, limit){
  Exercise.find(callback).limit(limit);
};

//Get Exercise
module.exports.getExerciseById = function(id, callback){
  Exercise.findById(id, callback);
};

//Get Exercises of specific type
module.exports.getExercisesByType = function(type, callback, limit){
  var query = {dyslexiaType : type};
  Exercise.find(query, callback).limit(limit);
};

//Add ImageEx
module.exports.addExercise = function(exercise, callback){
  Exercise.create(exercise, callback);
};

//Update Exercise
module.exports.updateExercise = function(id, exercise, options, callback){
  var query = {_id : id};
  var update = {
    name: exercise.name,
    dyslexiaType: exercise.dyslexiaType,
    level: exercise.level,
    questions: exercise.questions
  };
  Exercise.findOneAndUpdate(query, update, options, callback);
};

//Delete Exercise
module.exports.deleteExercise = function(id, callback){
  var query = {_id : id};
  Exercise.remove(query, callback);
};
