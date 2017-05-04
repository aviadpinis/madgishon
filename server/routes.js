var User = require('./models/user');

module.exports=function(app) {
  //place your routes in here..
  app.get('/api/users', function(req, res) {
    User.getUsers(function(err,users){
      if (err){
        throw err;
      }
      res.json(users);
    });
  });   //example
}
