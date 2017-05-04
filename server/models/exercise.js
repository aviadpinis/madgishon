var mongoose = require('mongoose');

//Exercise scheme
var exerciseScheme = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  dyslexia:{
    type: String,
    require: true
  },
  level :{
    type: Number,
    require: true
  },
  question: {
    image_url : {
      type: String,
      require:true
    },
    answers:[{
      type: String
    }],
    right_answer:{
      type: String,
      require:true
    }
  }
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

//Add ImageEx
module.exports.addExercise = function(exercise, callback){
  Exercise.create(exercise, callback);
};

//Update Exercise
module.exports.updateExercise = function(id, exercise, options, callback){
  var query = {_id : id};
  var update = {
    name: exercise.name,
    dyslexia: exercise.dyslexia,
    level: exercise.level,
    question: exercise.question
  };
  Exercise.findOneAndUpdate(query, update, options, callback);
};

//Delete Exercise
module.exports.deleteExercise = function(id, callback){
  var query = {_id : id};
  Exercise.remove(query, callback);
};
