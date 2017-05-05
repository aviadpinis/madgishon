var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./server/routes.js');
var morgan = require('morgan');
var passport	= require('passport');
var User = require('./server/models/user');
var jwt = require('jwt-simple');


app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());

//Connect to mongoose
var connectionString = 'mongodb://poc:poc@ds119151.mlab.com:19151/poc';
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to db successfully. url is: ' + connectionString)
});

app.get('/', function(req, res){
  res.redirect('./dist/index.html');
});

//connect the api routes
routes(app);

app.listen(3001);
console.log('Running on port 3001.. ');
