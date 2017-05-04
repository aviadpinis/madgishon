var User = require('./models/user');
var ImageEx = require('./models/imageEx');
var Exercise = require('./models/exercise')
var jwt = require('jwt-simple');
var config  = require('./config/database'); // get db config file
var passport	= require('passport');

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

  //users and auth section
  app.post('/api/signup', function(req, res) {
    if (!req.body.name || !req.body.password) {
      res.json({success: false, msg: 'Please pass name and password.'});
    } else {
      var newUser = new User({
        name: req.body.name,
        password: req.body.password,
        userType: req.body.userType
      });
      if (req.body.userType == "מטופל"){
        newUser.dyslexiaType = req.body.dyslexiaType;
      }
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
  });

  app.post('/api/authenticate', function(req, res) {
    User.findOne({
      name: req.body.name
    }, function(err, user) {
      if (err) throw err;

      if (!user) {
        res.send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.encode(user, config.secret);
            // return the information including token as JSON
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
  });

  // route to a restricted info (GET http://localhost:8080/api/memberinfo)
  app.get('/api/memberinfo', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      var decoded = jwt.decode(token, config.secret);
      User.findOne({
        name: decoded.name
      }, function(err, user) {
        if (err) throw err;

        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          res.json({success: true, msg: 'Welcome in the member area ' + user.name + '!'});
        }
      });
    } else {
      return res.status(403).send({success: false, msg: 'No token provided.'});
    }
  });

  getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };


}
