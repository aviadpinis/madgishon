var User = require('./models/user');
var ImageEx = require('./models/imageEx');
var Exercise = require('./models/exercise')

module.exports=function(app) {
  //place your routes in here..

  //ImageEx Section
  app.get('/api/imageex', function(req, res){
    ImageEx.getImageExs(function(err,imageExs){
      if (err){
        throw err;
      }
      res.json(imageExs);
    });
  });

  app.get('/api/imageex/:_id', function(req, res){
    ImageEx.getImageExById(req.params._id, function(err,imageEx){
      if (err){
        throw err;
      }
      res.json(imageEx);
    });
  });

  app.post('/api/imageex', function(req, res){
    var imageEx = req.body;
    ImageEx.addImageEx(imageEx, function(err,imageEx){
      if (err){
        throw err;
      }
      res.json(imageEx);
    });
  });

  app.put('/api/imageex/:_id', function(req, res){
    var id = req.params._id;
    var imageEx = req.body;
    ImageEx.updateImageEx(id, imageEx,{}, function(err,imageEx){
      if (err){
        throw err;
      }
      res.json(imageEx);
    });
  });

  app.delete('/api/imageex/:_id', function(req, res){
    var id = req.params._id;
    ImageEx.deleteImageEx(id, function(err,imageEx){
      if (err){
        throw err;
      }
      res.json(imageEx);
    });
  });

  //Exercise Section
  app.get('/api/exercises', function(req, res){
    Exercise.getExercises(function(err,exercise){
      if (err){
        throw err;
      }
      res.json(exercise);
    });
  });

  app.get('/api/exercise/:_id', function(req, res){
    Exercise.getExerciseById(req.params._id, function(err,exercise){
      if (err){
        throw err;
      }
      res.json(exercise);
    });
  });

  app.get('/api/exercise/bytype/:_type', function(req, res){
    Exercise.getExercisesByType(req.params._type, function(err,exercise){
      if (err){
        throw err;
      }
      res.json(exercise);
    });
  });

  app.post('/api/exercise', function(req, res){
    var exercise = req.body;
    Exercise.addExercise(exercise, function(err,exercise){
      if (err){
        throw err;
      }
      res.json(exercise);
    });
  });

  app.put('/api/exercise/:_id', function(req, res){
    var id = req.params._id;
    var exercise = req.body;
    Exercise.updateExercise(id, exercise, {}, function(err,exercise){
      if (err){
        throw err;
      }
      res.json(exercise);
    });
  });

  app.delete('/api/exercise/:_id', function(req, res){
    var id = req.params._id;
    Exercise.deleteExercise(id, function(err,exercise){
      if (err){
        throw err;
      }
      res.json(exercise);
    });
  });


  app.get('/api/users', function(req, res) {
    User.getUsers(function(err,users){
      if (err){
        throw err;
      }
      res.json(users);
    });
  });


}
