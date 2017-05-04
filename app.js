var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./server/routes.js');

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

//Genre = require('./server/models/genre');
//Book = require('./server/models/book');

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

app.listen(3000);
console.log('Running on port 3000.. ');
