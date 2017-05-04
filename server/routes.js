var User = require('./models/user');
var ImageEx = require('./models/imageEx');

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


  app.get('/api/users', function(req, res) {
    User.getUsers(function(err,users){
      if (err){
        throw err;
      }
      res.json(users);
    });
  });


}
